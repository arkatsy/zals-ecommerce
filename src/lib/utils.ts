export const MAIN_CATEGORIES = ["MAN", "WOMEN", "KIDS"] as const;

export function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}
