export interface Todo {
  id: number
  description: string
  completed: boolean
}

export type TodoForUpdate = Partial<Todo> & Pick<Todo, 'id'>
