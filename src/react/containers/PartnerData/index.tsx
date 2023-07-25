/* eslint-disable @typescript-eslint/no-explicit-any */
// Dependencies
import React, { useState, useEffect } from 'react'
import { Input, Textarea, CheckboxGroup } from 'vtex.styleguide'

// Data
import countries from './countries'
import partnerTypes from './partnerTypes'
import { categories } from './categories'

// Components
import Select from '../../components/Select'
import ImageContainer from '../../components/ImageContainer'
import axios from 'axios'

const countryOptions = countries.map(country => ({
  label: country,
  value: country,
}))

interface CheckedMap {
  label?: string
  checked: boolean
}

interface CategoriesCheckboxes {
  [key: string]: CheckedMap
}

const categoriesInitialState = categories.reduce(
  (obj, category) => ({
    ...obj,
    [category.id]: category.subcategories.reduce(
      (obj2, subcategory) => ({
        ...obj2,
        [subcategory.id]: {
          checked: false,
          label: subcategory.name,
        },
      }),
      {}
    ),
  }),
  {}
)

interface PartnerDataProps {
  data: IPartnerData
  currentStatus: any
}

const PartnerData: React.FC<PartnerDataProps> = ({ data, currentStatus }) => {
  const [categoriesCheckboxes, setCategoriesCheckboxes] = useState<
    CategoriesCheckboxes
  >(categoriesInitialState)

  const [denialReason, setDenialReason] = useState('')

  const getDenialReason = async () => {
    const denialResponse = await axios.get(
      `/api/dataentities/PN/documents/${data.id}?_fields=reasonDeny`
    )

    setDenialReason(denialResponse.data.reasonDeny)
  }

  const { categories: _categories, subcategories, status } = data

  useEffect(() => {
    getDenialReason()

    setCategoriesCheckboxes(prevState => {
      const newCheckedMap = _categories.reduce((obj: any, category: any) => {
        const subcategoryFinded = subcategories.find(
          ({ categoryID }: { categoryID: string }) => categoryID === category.id
        )

        const prevSubCategories = categoriesCheckboxes[category.id]

        if (!subcategoryFinded) return obj

        return {
          ...obj,
          [category.id]: subcategoryFinded.subcategories.reduce(
            (obj2: any, subcategory: any) => {
              return {
                ...obj2,
                [subcategory.id]: {
                  checked: true,
                  label: subcategory.name,
                },
              }
            },
            {
              ...prevSubCategories,
            }
          ),
        }
      }, {})

      return {
        ...prevState,
        ...newCheckedMap,
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStatus, status])

  const regionsValue = data.regions
    .map(region => countryOptions.find(country => country.value === region))
    .filter(Boolean)

  const typesValue = data.types
    .map(type => partnerTypes.find(partnerType => partnerType.value === type))
    .filter(Boolean)

  return (
    <>
      <div className="mb8">
        <ImageContainer title={data.name} imgURL={data.imgURL} />
      </div>

      <div className="mb7 flex flex-column flex-row-l">
        <div className="w-100 mb7 mb0-l mr7-l">
          <Input disabled value={data.name} />
        </div>

        <div className="w-100">
          <div className="select-input-container">
            <Select
              multi
              disabled
              options={countryOptions}
              value={regionsValue as ISelectOption[]}
            />
          </div>
        </div>
      </div>

      <div className="mb7 flex flex-column flex-row-l">
        <div className="w-100 mb7 mb0-l mr7-l">
          <div className="select-input-container">
            <Select
              multi
              disabled
              options={partnerTypes}
              value={typesValue as ISelectOption[]}
            />
          </div>
        </div>

        <div className="w-100">
          <Input disabled type="url" value={data.website} />
        </div>
      </div>

      <div className="mb7 mb8-l flex">
        <div className="w-100">
          <Input disabled type="email" value={data.email} />
        </div>
      </div>
      <div className="mb7 about-the-partner">
        <h3 className="t-heading-3">About the partner</h3>

        <Textarea disabled resize="none" value={data.description} />
      </div>

      <div className="mb7 about-the-partner">
        <h3 className="t-heading-3">Categorias anb Subcategories</h3>

        {categories.map(category => {
          const checkedMap = categoriesCheckboxes[category.id]

          return (
            <div className="mb6" key={category.id}>
              <CheckboxGroup
                value="simple"
                id={category.id}
                name={category.id}
                label={category.name}
                checkedMap={checkedMap}
              />
            </div>
          )
        })}
      </div>

      {denialReason && (
        <div className="mb7 about-the-partner">
          <h3 className="t-heading-3">
            {(currentStatus !== undefined && currentStatus === 'DENIED') ||
            status === 'DENIED'
              ? 'Denial reason'
              : 'Observation'}
          </h3>
          <Input disabled type="name" value={denialReason} />
        </div>
      )}
    </>
  )
}

export default PartnerData
