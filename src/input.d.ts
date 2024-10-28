// Inputs must have accessible names (https://dequeuniversity.com/rules/axe/4.1/input-button-name)
export type AccessibleInputProps =
  | { type: 'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel'; 'aria-label': string; required?: boolean }
  | { type: 'checkbox' | 'radio'; 'aria-label': string; required?: boolean; checked?: boolean }
  | { type: 'checkbox' | 'radio'; 'aria-labelledby': string; required?: boolean; checked?: boolean }
  | { type: 'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel'; title: string; required?: boolean };