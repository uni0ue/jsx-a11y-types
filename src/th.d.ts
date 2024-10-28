// Table headers must have scope (https://dequeuniversity.com/rules/axe/4.1/th-has-data-cells)
export type AccessibleThProps =
  | { scope: 'col' | 'row'; 'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' }
  | { scope?: never; 'aria-sort': 'none' | 'ascending' | 'descending' | 'other' };