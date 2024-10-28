// Buttons must have discernible text (https://dequeuniversity.com/rules/axe/4.1/button-name)
export type AccessibleButtonProps =
  | { type: 'button' | 'submit' | 'reset'; 'aria-label': string }
  | { type: 'button' | 'submit' | 'reset'; 'aria-labelledby': string }
  | { type: 'button' | 'submit' | 'reset'; title: string };