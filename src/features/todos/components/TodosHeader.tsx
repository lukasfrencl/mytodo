import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import CloseIcon from '@mui/icons-material/Close'

import { useAppDispatch } from 'app/hooks'
import pluralize from 'helpers/pluralize'

import updateMultipleTodos from '../thunks/updateMultipleTodos'
import deleteMultipleTodos from '../thunks/deleteMultipleTodos'

import { Todo } from '../types'

interface Props {
  todos: Todo[]
}

export default function TodosHeader({ todos }: Props) {
  const dispatch = useAppDispatch()

  const completed = todos.filter(i => i.completed)
  const uncompleted = todos.filter(i => !i.completed)
  const areAllCompleted = completed.length > 0 && completed.length === todos.length
  const areSomeCompleted = completed.length > 0

  const completeAll = () => dispatch(updateMultipleTodos(uncompleted.map(todo => ({ id: todo.id, completed: true }))))
  const uncompleteAll = () => dispatch(updateMultipleTodos(completed.map(todo => ({ id: todo.id, completed: false }))))
  const deleteCompleted = () => dispatch(deleteMultipleTodos(completed.map(todo => todo.id)))

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        {areAllCompleted ? (
          <IconButton title="Make all not completed" onClick={() => uncompleteAll()}>
            <TaskAltIcon color="success" />
          </IconButton>
        ) : (
          <IconButton title="Make all completed" onClick={() => completeAll()}>
            <RadioButtonUncheckedIcon />
          </IconButton>
        )}
        {areSomeCompleted && (
          <IconButton title="Delete all completed" onClick={() => deleteCompleted()}>
            <CloseIcon color="error" />
          </IconButton>
        )}
      </Box>
      <Typography variant="body2">{pluralize(completed.length, 'item')} completed / {pluralize(uncompleted.length, 'item')} left</Typography>
    </Box>
  )
}
