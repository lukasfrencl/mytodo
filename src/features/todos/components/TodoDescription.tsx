import ListItemText from '@mui/material/ListItemText'

import DescriptionBox from './DescriptionBox'
import CompletedListItemText from './CompletedListItemText'

import { useAppDispatch } from 'app/hooks'

import RenameTodo from './RenameTodo'

import updateTodo from '../thunks/updateTodo'

import { Todo } from '../types'

interface Props {
  todo: Todo
  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void
}

export default function TodoDescription({ todo, isEditing, setIsEditing }: Props) {
  const dispatch = useAppDispatch()

  return isEditing ? (
    <RenameTodo
      todo={todo}
      onCancel={() => setIsEditing(false)}
      onFinish={(id: number, description: string) => dispatch(updateTodo({ id, description }))}
    />
  ) : (
    <DescriptionBox onDoubleClick={() => setIsEditing(true)}>
      {!todo.completed && <ListItemText>{todo.description}</ListItemText>}
      {todo.completed && <CompletedListItemText>{todo.description}</CompletedListItemText>}
    </DescriptionBox>
  )
}
