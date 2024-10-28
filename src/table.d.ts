// Tables must have an accessible name (https://dequeuniversity.com/rules/axe/4.1/table-aria-label)
export type AccessibleTableProps =
  | { 'aria-label': string }
  | { 'aria-labelledby': string }
  | { title: string };