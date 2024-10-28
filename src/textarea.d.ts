// Textarea elements must have accessible names (https://dequeuniversity.com/rules/axe/4.1/label)
export type AccessibleTextareaProps =
  | { 'aria-label': string; required?: boolean }
  | { 'aria-labelledby': string; required?: boolean }
  | { title: string; required?: boolean };