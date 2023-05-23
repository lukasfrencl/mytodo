import React from 'react'

import Box from '@mui/material/Box'
import List from '@mui/material/List'

import { useAppSelector, useAppDispatch } from 'app/hooks'
import useFilter from 'hooks/use-filter'

import AddTodo from './AddTodo'
import FilterTodos from './FilterTodos'
import TodosHeader from './TodosHeader'
import TodoItem from './TodoItem'

import { TodosFilterBy, todosFilterConfig } from '../todosFilterConfig'
import { selectTodos } from '../todosSlice'

import fetchTodos from '../thunks/fetchTodos'
import addTodo from '../thunks/addTodo'

import { Todo } from '../types'

const useFetchTodos = (): [Todo[]] => {
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  return [todos]
}

export default function Todos() {
  const dispatch = useAppDispatch()

  const [todos] = useFetchTodos()
  const [filteredTodos, setFilterBy] = useFilter(todos, todosFilterConfig)

  return (
    <Box sx={{ my: 4 }}>
      <FilterTodos config={todosFilterConfig} defaultBy={TodosFilterBy.ALL} onFilter={setFilterBy} />
      <TodosHeader todos={todos} />
      <AddTodo onFinish={(description: string) => dispatch(addTodo(description))} />
      <List>
        {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
      </List>
    </Box>
  )
}
