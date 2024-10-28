const fs = require("fs");
const path = require("path");

const components = [
  {
    name: "button",
    content: `
// Buttons must have discernible text (https://dequeuniversity.com/rules/axe/4.1/button-name)
export type AccessibleButtonProps =
  | { type: 'button' | 'submit' | 'reset'; 'aria-label': string }
  | { type: 'button' | 'submit' | 'reset'; 'aria-labelledby': string }
  | { type: 'button' | 'submit' | 'reset'; title: string };
    `,
  },
  {
    name: "img",
    content: `
// Images must have alternate text (https://dequeuniversity.com/rules/axe/4.1/image-alt)
export interface AccessibleImgProps {
  alt: string;
  'aria-hidden'?: boolean;
}
    `,
  },
  {
    name: "a",
    content: `
// Links must have discernible text (https://dequeuniversity.com/rules/axe/4.1/link-name)
export type AccessibleAnchorProps =
  | { href: string; 'aria-label': string }
  | { href: string; 'aria-labelledby': string }
  | { href: string; title: string }
  | { href: string; target: '_blank'; rel: 'noopener noreferrer'; 'aria-label'?: string }
  | { href: string; target: '_blank'; rel: 'noopener noreferrer'; 'aria-labelledby'?: string }
  | { href: string; target: '_blank'; rel: 'noopener noreferrer'; title?: string };
    `,
  },
  {
    name: "input",
    content: `
// Inputs must have accessible names (https://dequeuniversity.com/rules/axe/4.1/input-button-name)
export type AccessibleInputProps =
  | { type: 'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel'; 'aria-label': string; required?: boolean }
  | { type: 'checkbox' | 'radio'; 'aria-label': string; required?: boolean; checked?: boolean }
  | { type: 'checkbox' | 'radio'; 'aria-labelledby': string; required?: boolean; checked?: boolean }
  | { type: 'text' | 'email' | 'password' | 'number' | 'search' | 'url' | 'tel'; title: string; required?: boolean };
    `,
  },
  {
    name: "textarea",
    content: `
// Textarea elements must have accessible names (https://dequeuniversity.com/rules/axe/4.1/label)
export type AccessibleTextareaProps =
  | { 'aria-label': string; required?: boolean }
  | { 'aria-labelledby': string; required?: boolean }
  | { title: string; required?: boolean };
    `,
  },
  {
    name: "select",
    content: `
// Select elements must have accessible names (https://dequeuniversity.com/rules/axe/4.1/label)
export type AccessibleSelectProps =
  | { 'aria-label': string; required?: boolean }
  | { 'aria-labelledby': string; required?: boolean }
  | { title: string; required?: boolean }
  | { 'aria-label': string; 'aria-expanded'?: boolean }
  | { 'aria-labelledby': string; 'aria-expanded'?: boolean };
    `,
  },
  {
    name: "iframe",
    content: `
// Iframes must have a title attribute (https://dequeuniversity.com/rules/axe/4.1/frame-title)
export interface AccessibleIframeProps {
  title: string;
}
    `,
  },
  {
    name: "table",
    content: `
// Tables must have an accessible name (https://dequeuniversity.com/rules/axe/4.1/table-aria-label)
export type AccessibleTableProps =
  | { 'aria-label': string }
  | { 'aria-labelledby': string }
  | { title: string };
    `,
  },
  {
    name: "th",
    content: `
// Table headers must have scope (https://dequeuniversity.com/rules/axe/4.1/th-has-data-cells)
export type AccessibleThProps =
  | { scope: 'col' | 'row'; 'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other' }
  | { scope?: never; 'aria-sort': 'none' | 'ascending' | 'descending' | 'other' };
    `,
  },
  {
    name: "audio",
    content: `
// Audio elements must have accessible controls (https://dequeuniversity.com/rules/axe/4.1/audio-caption)
export type AccessibleAudioProps = 
  | { controls: true; 'aria-label'?: string }
  | { controls: false; 'aria-hidden': true };
    `,
  },
  {
    name: "video",
    content: `
// Video elements must have accessible controls (https://dequeuniversity.com/rules/axe/4.1/video-caption)
export type AccessibleVideoProps = 
  | { controls: true; 'aria-label'?: string }
  | { controls: false; 'aria-hidden': true };
    `,
  },
];

const outputDir = path.join(__dirname, "src");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

components.forEach(({ name, content }) => {
  const filePath = path.join(outputDir, `${name}.d.ts`);
  fs.writeFileSync(filePath, content.trim());
  console.log(`Created ${filePath}`);
});

console.log("Accessibility type files generated successfully!");
