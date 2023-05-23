import React from 'react'

import TextField from '@mui/material/TextField'

interface Props {
  onFinish: (description: string) => void
}

export default function AddTodo({ onFinish }: Props) {
  const [description, setDescription] = React.useState('')

  const finishEdit = React.useCallback(() => {
    const newDescription = description.trim()
    if (newDescription !== '') {
      onFinish(newDescription)
    }
    setDescription('')
  }, [onFinish, description])

  return (
    <TextField
      fullWidth
      variant="standard"
      label="What needs to be done?"
      value={description}
      onChange={ev => setDescription(ev.target.value)}
      onKeyUp={ev => {
        ev.key === 'Enter' && finishEdit()
      }}
    />
  )
}
