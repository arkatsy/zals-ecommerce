const DEFAULT_SIZES = {
  sm: 26,
  md: 30,
  lg: 34,
} as const;

export interface IconBaseProps {
  size?: keyof typeof DEFAULT_SIZES | number;
  className?: string;
  [x: string]: any;
}

export const chooseSize = (size: IconBaseProps["size"]) =>
  typeof size === "string" ? DEFAULT_SIZES[size] : size;
