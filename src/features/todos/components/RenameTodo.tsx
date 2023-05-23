import React from 'react'

import TextField from '@mui/material/TextField'

import DescriptionBox from './DescriptionBox'

import { Todo } from '../types'

interface Props {
  todo: Todo
  onCancel: () => void
  onFinish: (id: number, description: string) => void
}

export default function RenameTodo({ todo, onCancel, onFinish }: Props) {
  const [description, setDescription] = React.useState(todo.description)

  const cancelEdit = React.useCallback(() => {
    onCancel()
    setDescription('')
  }, [onCancel])

  const finishEdit = React.useCallback(() => {
    const newDescription = description.trim()
    if (newDescription !== todo.description) {
      onFinish(todo.id, newDescription)
    }
    cancelEdit()
  }, [todo, onFinish, description, cancelEdit])

  return (
    <DescriptionBox>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={description}
        inputRef={input => input && input.focus()}
        onChange={ev => setDescription(ev.target.value)}
        onKeyUp={ev => {
          ev.key === 'Enter' && finishEdit()
          ev.key === 'Escape' && cancelEdit()
        }}
        onBlur={() => finishEdit()}
      />
    </DescriptionBox>
  )
}
