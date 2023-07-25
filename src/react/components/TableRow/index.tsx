// Dependencies
import React from 'react'
import { Checkbox } from 'vtex.styleguide'

interface TableRowProps extends Omit<IClientItem, 'imgURL'> {
  imgURL?: string
  showEmptyImage?: boolean,
  handler: (id: string) => void
}

const TableRow: React.FC<TableRowProps> = ({
  name,
  imgURL,
  id,
  handler,
  isActive,
  description,
  showEmptyImage = true,
}) => {
  return (
    <div className="table-row">
      <div className="mr5 mr7-l">

        <Checkbox
          checked={isActive}
           name={name}
           id={id}
           onChange={() => handler(id)}/>

      </div>

      <div className="flex w-100 items-center">
        {!imgURL && showEmptyImage && (
          <span className="table-row__empty-image mr5" />
        )}

        {imgURL && (
          <div className="table-row__image-container mr5">
            <img src={imgURL} alt={name} className="table-row__image" />
          </div>
        )}

        <div className="table-row__group">
          <h3 className="table-row__name">{name}</h3>

          <p className="table-row__short-description">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TableRow
