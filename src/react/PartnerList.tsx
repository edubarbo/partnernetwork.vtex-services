// Dependencies
import type { ChangeEventHandler, FormEventHandler } from 'react'
import React, { useState, useEffect } from 'react'
import { Button, Checkbox, Table, Tag, PageBlock } from 'vtex.styleguide'
import { useQuery, gql } from '@apollo/client'
import { useRuntime } from 'vtex.render-runtime'
import { categories } from './containers/PartnerData/categories'
import countries from './containers/PartnerData/countries'

// Typing
import type { IPartner } from './typings/partner'

const getPartnersWithPaginationInfoQuery = gql`
  query getPartnersWithPaginationInfo($page: Int, $pageSize: Int) {
    partnersWithPaginationInfo(
      page: $page
      pageSize: $pageSize
      status: PENDING
    ) @context(provider: "partnernetwork.vtex-services@1.x") {
      partners {
        name
        email
        status
        account
        regions
        categories {
          name
        }
      }
      pagination {
        page
        total
        pageSize
      }
    }
  }
`

interface PaginationInfo {
  page: number
  total: number
  pageSize: number
}

interface PartnersWithPaginationInfo {
  partners: IPartner[]
  pagination: PaginationInfo
}

const initialPaginationState = {
  currentPage: 1,
  currentItemFrom: 1,
  currentItemTo: 10,
  itemsPerPage: 10,
  totalItems: 0,
}

const PartnerList: React.FC = () => {
  const [pagination, setPagination] = useState(initialPaginationState)

  const [partners, setPartners] = useState<IPartner[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatements, setFilterStatements] = useState([])

  const { navigate } = useRuntime()

  const { data, loading } = useQuery<{
    partnersWithPaginationInfo: PartnersWithPaginationInfo
  }>(getPartnersWithPaginationInfoQuery, {
    variables: {
      status: 'PENDING',
      page: pagination.currentPage,
      pageSize: pagination.itemsPerPage,
    },
  })

  const getSchema = () => ({
    properties: {
      account: {
        title: 'Account',
      },
      name: {
        title: 'Name',
      },
      status: {
        title: 'Status',
        cellRenderer({ cellData }: { cellData: string }) {
          return (
            <Tag bgColor="#ffb100" color="#fff">
              <span className="nowrap">{cellData}</span>
            </Tag>
          )
        },
      },
    },
  })

  const handleInputSearchOnChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => setSearchTerm(value)

  const handleInputSearchOnClear = () => {
    setSearchTerm('')

    if (data) {
      const { partners: newPartners } = data.partnersWithPaginationInfo

      setPartners(newPartners)
    }
  }

  const handleInputSearchOnSubmit: FormEventHandler<HTMLInputElement> = () => {
    const newPartners = partners.filter(partner =>
      partner.account.includes(searchTerm)
    )

    setPartners(newPartners)
  }

  const selectObject = (
    initialValue: any,
    {
      values,
      onChangeObjectCallback,
    }: {
      values: any
      onChangeObjectCallback: any
    }
  ) => {
    const toggleValueByKey = (key: any) => ({
      ...(values || initialValue),
      [key]: values ? !values[key] : false,
    })

    return (
      <div className="partner-list-filters">
        {Object.keys(initialValue).map((opt, index) => (
          <div className="mb3" key={`class-statment-object-${opt}-${index}`}>
            <Checkbox
              checked={values ? values[opt] : initialValue[opt]}
              label={opt}
              name="default-checkbox-group"
              onChange={() => {
                const newValue = toggleValueByKey(`${opt}`)

                onChangeObjectCallback(newValue)
              }}
              value={opt}
            />
          </div>
        ))}
        <Button
          size="small"
          onClick={() => {
            const clearFilter = Object.keys(initialValue).reduce(
              (acc: any, curr: string) => {
                acc[curr] = false

                return acc
              },
              { ...initialValue }
            )

            onChangeObjectCallback(clearFilter)
          }}
        >
          Unselect All
        </Button>
      </div>
    )
  }

  const categorySelectorObject = ({
    values,
    onChangeObjectCallback,
  }: {
    values: any
    onChangeObjectCallback: any
  }) => {
    const initialValue = {
      ...categories.reduce((acc: any, cat: any) => {
        acc[cat.name] = true

        return acc
      }, {}),
      ...(values || {}),
    }

    return selectObject(initialValue, {
      values,
      onChangeObjectCallback,
    })
  }

  const countrySelectorObject = ({
    values,
    onChangeObjectCallback,
  }: {
    values: any
    onChangeObjectCallback: any
  }) => {
    const initialValue = {
      ...countries.reduce((acc: any, country: any) => {
        acc[country] = true

        return acc
      }, {}),
      ...(values || {}),
    }

    return selectObject(initialValue, {
      values,
      onChangeObjectCallback,
    })
  }

  const renderFilterLabel = (st: any) => {
    if (!st || !st.object) {
      // you should treat empty object cases only for alwaysVisibleFilters
      return 'All'
    }

    const keys: any = st.object ? Object.keys(st.object) : {}
    const isAllTrue = !keys.some((key: any) => !st.object[key])
    const isAllFalse = !keys.some((key: any) => st.object[key])
    const trueKeys = keys.filter((key: any) => st.object[key])
    let trueKeysLabel = ''

    trueKeys.forEach((key: any, index: number) => {
      trueKeysLabel += `${key}${index === trueKeys.length - 1 ? '' : ', '}`
    })

    return `${isAllTrue ? 'All' : isAllFalse ? 'None' : `${trueKeysLabel}`}`
  }

  const handleFiltersChange = (statements = []) => {
    if (!statements.length && data) {
      const { partners: newPartners } = data.partnersWithPaginationInfo

      setPartners(newPartners)
      setFilterStatements(statements)

      return
    }

    let filteredPartners = partners.slice()

    if (data) {
      filteredPartners = data.partnersWithPaginationInfo.partners
    }

    statements.forEach((st: any) => {
      if (!st || !st.object) return
      const { subject, object } = st

      // eslint-disable-next-line default-case
      switch (subject) {
        case 'category':
          if (!object) return

          filteredPartners = filteredPartners.filter(partner =>
            partner.categories.some(cat => object[cat.name])
          )

          break

        case 'country':
          if (!object) return

          filteredPartners = filteredPartners.filter(partner =>
            partner.regions.some(country => object[country])
          )
          break
      }
    })

    setPartners(filteredPartners)
    setFilterStatements(statements)
  }

  const handleOnRowClick = ({ rowData }: { rowData: IPartner }) => {
    const { account } = rowData

    navigate({
      page: 'admin.app.partner-details',
      params: { account },
    })
  }

  const handleNextClick = () => {
    const newPage = pagination.currentPage + 1
    const itemFrom = pagination.currentItemTo + 1
    const itemTo = pagination.itemsPerPage * newPage

    setPagination({
      ...pagination,
      currentPage: newPage,
      currentItemFrom: itemFrom,
      currentItemTo: itemTo,
    })
  }

  const handlePrevClick = () => {
    if (pagination.currentPage === 0) return

    const newPage = pagination.currentPage - 1
    const itemFrom = pagination.currentItemFrom - pagination.itemsPerPage
    const itemTo = pagination.currentItemFrom - 1

    setPagination({
      ...pagination,
      currentPage: newPage,
      currentItemFrom: itemFrom,
      currentItemTo: itemTo,
    })
  }

  const handleRowsChange = (_: unknown, value: string) => {
    setPagination({
      ...pagination,
      itemsPerPage: +value,
      currentItemTo: +value,
    })
  }

  useEffect(() => {
    if (!data) return

    setPartners(data.partnersWithPaginationInfo.partners)
    setPagination({
      ...pagination,
      totalItems: data.partnersWithPaginationInfo.pagination.total,
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  return (
    <PageBlock variation="full">
      <Table
        fullWidth
        items={partners}
        loading={loading}
        onRowClick={handleOnRowClick}
        schema={getSchema()}
        emptyStateLabel="Not found partners"
        toolbar={{
          inputSearch: {
            value: searchTerm,
            placeholder: 'Account...',
            onChange: handleInputSearchOnChange,
            onClear: handleInputSearchOnClear,
            onSubmit: handleInputSearchOnSubmit,
          },
        }}
        filters={{
          alwaysVisibleFilters: ['category', 'country'],
          statements: filterStatements,
          onChangeStatements: handleFiltersChange,
          clearAllFiltersButtonLabel: 'Clear Filters',
          collapseLeft: true,
          options: {
            category: {
              label: 'Category',
              renderFilterLabel,
              verbs: [
                {
                  label: 'includes',
                  value: 'includes',
                  object: {
                    renderFn: categorySelectorObject,
                    extraParams: {},
                  },
                },
              ],
            },
            country: {
              label: 'Country',
              renderFilterLabel,
              verbs: [
                {
                  label: 'includes',
                  value: 'includes',
                  object: {
                    renderFn: countrySelectorObject,
                    extraParams: {},
                  },
                },
              ],
            },
          },
        }}
        pagination={{
          onNextClick: handleNextClick,
          onPrevClick: handlePrevClick,
          currentItemFrom: pagination.currentItemFrom,
          currentItemTo: pagination.currentItemTo,
          onRowsChange: handleRowsChange,
          textShowRows: 'Show rows',
          textOf: 'of',
          totalItems: pagination.totalItems,
          rowsOptions: [10, 20, 30],
        }}
      />
    </PageBlock>
  )
}

export default PartnerList
