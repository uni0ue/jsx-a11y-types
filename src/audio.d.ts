// Audio elements must have accessible controls (https://dequeuniversity.com/rules/axe/4.1/audio-caption)
export type AccessibleAudioProps = 
  | { controls: true; 'aria-label'?: string }
  | { controls: false; 'aria-hidden': true };