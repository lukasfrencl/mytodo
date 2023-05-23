import IconButton from '@mui/material/IconButton'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'

import ModeEditIcon from '@mui/icons-material/ModeEdit'
import CloseIcon from '@mui/icons-material/Close'

import { useAppDispatch } from 'app/hooks'

import deleteTodo from '../thunks/deleteTodo'

import { Todo } from '../types'

interface Props {
  todo: Todo
  setIsEditing: (isEditing: boolean) => void
}

export default function TodoActions({ todo, setIsEditing }: Props) {
  const dispatch = useAppDispatch()

  return (
    <ListItemSecondaryAction sx={{ right: 0 }}>
      <IconButton title="Edit" onClick={() => setIsEditing(true)}>
        <ModeEditIcon color="primary" />
      </IconButton>
      <IconButton title="Delete" onClick={() => dispatch(deleteTodo(todo.id))}>
        <CloseIcon color="error" />
      </IconButton>
    </ListItemSecondaryAction>
  )
}
