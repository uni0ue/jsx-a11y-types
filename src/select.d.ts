// Select elements must have accessible names (https://dequeuniversity.com/rules/axe/4.1/label)
export type AccessibleSelectProps =
  | { 'aria-label': string; required?: boolean }
  | { 'aria-labelledby': string; required?: boolean }
  | { title: string; required?: boolean }
  | { 'aria-label': string; 'aria-expanded'?: boolean }
  | { 'aria-labelledby': string; 'aria-expanded'?: boolean };