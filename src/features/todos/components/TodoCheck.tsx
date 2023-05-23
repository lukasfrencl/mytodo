import IconButton from '@mui/material/IconButton'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import TaskAltIcon from '@mui/icons-material/TaskAlt'

import { useAppDispatch } from 'app/hooks'

import updateTodo from '../thunks/updateTodo'

import { Todo } from '../types'

interface Props {
  todo: Todo
}

export default function TodoCheck({ todo }: Props) {
  const dispatch = useAppDispatch()

  return todo.completed ? (
    <IconButton sx={{ mr: 1 }} title="Make not completed" onClick={() => dispatch(updateTodo({ id: todo.id, completed: false }))}>
      <TaskAltIcon color="success" />
    </IconButton>
  ) : (
    <IconButton sx={{ mr: 1 }} title="Make completed" onClick={() => dispatch(updateTodo({ id: todo.id, completed: true }))}>
      <RadioButtonUncheckedIcon />
    </IconButton>
  )
}
