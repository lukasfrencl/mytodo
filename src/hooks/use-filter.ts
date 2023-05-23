import React from 'react'

export type FilterConfig<T> = {
  by: string
  filter: (items: T[]) => T[]
}

const useFilter = <T>(data: T[], config: FilterConfig<T>[]): [T[], (by: string | null) => void] => {
  const [by, setBy] = React.useState<string | null>(null)

  let filteredData = data

  if (by !== null) {
    const foundConfig = config.find(i => i.by === by)
    if (foundConfig !== undefined) {
      filteredData = foundConfig.filter(data)
    }
  }

  return [filteredData, setBy]
}

export default useFilter
