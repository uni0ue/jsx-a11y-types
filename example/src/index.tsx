import type * as React from "react"; // Type-only import to avoid runtime React inclusion
import { AccessibleImgProps } from "jsx-a11y-types/src/img";
import { AccessibleButtonProps } from "jsx-a11y-types/src/button";

const TestImg: React.FC<AccessibleImgProps> = (props) => <img {...props} />;
const TestButton: React.FC<AccessibleButtonProps> = (props) => (
  <button {...props} />
);

// Invalid example (should throw errors)
const InvalidImgExample = <TestImg />;
const InvalidButtonExample = <TestButton />;

// Valid example (should pass without errors)
const ValidImgExample = <TestImg alt="Descriptive text" />;
const ValidButtonExample = <TestButton type="button" />;
