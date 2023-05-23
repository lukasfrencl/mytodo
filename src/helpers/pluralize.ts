const pluralize = (quantity: number, base: string, singularEnding: string = '', pluralEnding: string = 's'): string =>
  quantity === 1 ? `${quantity} ${base}${singularEnding}` : `${quantity} ${base}${pluralEnding}`

export default pluralize
