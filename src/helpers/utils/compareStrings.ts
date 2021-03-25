export const compareStrings = (search: string) => {
  const normalizedSearch = search.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  return function comparizon (text: string): boolean { return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(normalizedSearch) }
}
