// Images must have alternate text (https://dequeuniversity.com/rules/axe/4.1/image-alt)
export interface AccessibleImgProps {
  alt: string;
  'aria-hidden'?: boolean;
}