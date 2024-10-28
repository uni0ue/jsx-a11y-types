// Links must have discernible text (https://dequeuniversity.com/rules/axe/4.1/link-name)
export type AccessibleAnchorProps =
  | { href: string; 'aria-label': string }
  | { href: string; 'aria-labelledby': string }
  | { href: string; title: string }
  | { href: string; target: '_blank'; rel: 'noopener noreferrer'; 'aria-label'?: string }
  | { href: string; target: '_blank'; rel: 'noopener noreferrer'; 'aria-labelledby'?: string }
  | { href: string; target: '_blank'; rel: 'noopener noreferrer'; title?: string };