import React from 'react'

import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'

import TodoDescription from './TodoDescription'
import TodoCheck from './TodoCheck'
import TodoActions from './TodoActions'

import { Todo } from '../types'

interface Props {
  todo: Todo
}

export default function TodoItem({ todo }: Props) {
  const [isEditing, setIsEditing] = React.useState(false)

  return (
    <React.Fragment>
      <ListItem sx={{ p: 0, py: 0.25 }}>
        <TodoCheck todo={todo} />
        <TodoDescription todo={todo} isEditing={isEditing} setIsEditing={isEditing => setIsEditing(isEditing)} />
        <TodoActions todo={todo} setIsEditing={isEditing => setIsEditing(isEditing)} />
      </ListItem>
      <Divider />
    </React.Fragment>
  )
}
