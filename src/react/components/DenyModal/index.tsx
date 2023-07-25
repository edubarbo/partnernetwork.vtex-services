import type { FC } from 'react'
import React, { useState } from 'react'

import { Button, Dropdown, Modal, Textarea } from 'vtex.styleguide'

interface Props {
  show: boolean
  onClose: any
  onDeny: any
  statusButton: any
}

const options = [
  { value: '', label: 'Select' },
  { value: 'Dados incorretos', label: 'Incorrect Data' },
  { value: 'Dados incompletos', label: 'Incomplete Data' },
  { value: 'Logo enviada fora do padrão', label: 'Logo out of pattern' },
  {
    value: 'Categoria principal selecionada inadequada',
    label: 'Inappropriate selected main category',
  },
  {
    value: 'Case dos clientes deve ser revisado',
    label: 'Customer case must be reviewed',
  },
  {
    value: 'Serviços descritos não estão de acordo',
    label: 'Described services are not in agreement',
  },
]


const DenyModal: FC<Props> = ({ show, onClose, onDeny, statusButton }) => {
  const [reason, setReason] = useState('')
  const [observation, setObservation] = useState('')
  const [error, setError] = useState(false)
  const [errorObservation, setErrorObservation] = useState(false)

  const denyMessage = statusButton === 'Deny'

  const handleDeny = () => {
    let hasError = false

    if (denyMessage && !reason) {
      setError(true)
      hasError = true
    }

    if (denyMessage && !observation.length) {
      setErrorObservation(true)
      hasError = true
    }

    if (hasError) return

    onDeny(reason, observation)
    onClose()
  }

  return (
    <Modal
      isOpen={show}
      title={
        denyMessage ? (
          'Are you sure you want to deny this partner?'
        ) : (
          <span>
            You are approving this partner. <br />
            If you have some observation, please fill the fields below.
          </span>
        )
      }
      aria-describedby="modal-description"
      responsiveFullScreen
      bottomBar={
        <div className="w-100 nowrap flex justify-between">
          <span className="mr4">
            <Button variation="tertiary" onClick={onClose}>
              Cancel
            </Button>
          </span>
          <span>
            <Button variation="danger" onClick={handleDeny}>
              {denyMessage ? 'Deny' : 'Approve'}
            </Button>
          </span>
        </div>
      }
      onClose={onClose}
    >
      <div className="flex flex-column">
        <div className="w-100 w-50-ns">
          <Dropdown
            label={
              denyMessage
                ? 'Select the deny reason'
                : 'Select the reason for observation'
            }
            options={options}
            value={reason}
            required={!!denyMessage}
            error={error}
            onChange={(_: any, selected: string) => setReason(selected)}
          />
        </div>
        <div className="w-100 mt5 mb5">
          <Textarea
            required
            error={errorObservation}
            label={
              denyMessage
                ? 'Write some observation.'
                : 'Write some observation if necessary.'
            }
            onChange={(e: any) => setObservation(e.target.value)}
            value={observation}
          />
        </div>
      </div>
    </Modal>
  )
}

export default DenyModal
