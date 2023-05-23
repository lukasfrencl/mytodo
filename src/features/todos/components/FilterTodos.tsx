import React from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { FilterConfig } from 'hooks/use-filter'

import { Todo } from '../types'

interface Props {
  config: FilterConfig<Todo>[]
  defaultBy: string
  onFilter: (name: string) => void
}

export default function FilterTodos({ config, defaultBy, onFilter }: Props) {
  const [filter, setFilter] = React.useState<string>(defaultBy)

  const handleFilter = React.useCallback((filter: string) => {
    setFilter(filter)
    onFilter(filter)
  }, [onFilter])

  return (
    <Box sx={{ textAlign: 'center', mb: 2 }}>
      {config.map(i => (
        <Button key={i.by} variant={i.by === filter ? 'contained' : undefined} sx={{ px: 2 }} onClick={() => handleFilter(i.by)}>{i.by}</Button>
      ))}
    </Box>
  )
}
