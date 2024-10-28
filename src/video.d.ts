// Video elements must have accessible controls (https://dequeuniversity.com/rules/axe/4.1/video-caption)
export type AccessibleVideoProps = 
  | { controls: true; 'aria-label'?: string }
  | { controls: false; 'aria-hidden': true };