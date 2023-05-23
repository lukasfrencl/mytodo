import { FilterConfig } from 'hooks/use-filter'

import { Todo } from './types'

export enum TodosFilterBy {
  ALL = 'All',
  ACTIVE = 'Active',
  COMPLETED = 'Completed',
}

export const todosFilterConfig: FilterConfig<Todo>[] = [
  {
    by: TodosFilterBy.ALL,
    filter: (data: Todo[]): Todo[] => data
  },
  {
    by: TodosFilterBy.ACTIVE,
    filter: (data: Todo[]): Todo[] => data.filter(i => !i.completed)
  },
  {
    by: TodosFilterBy.COMPLETED,
    filter: (data: Todo[]): Todo[] => data.filter(i => i.completed)
  },
]
