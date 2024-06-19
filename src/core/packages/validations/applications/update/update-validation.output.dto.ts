export type UpdateValidationOutput<T> = {
  name: string;
  type: T;
  rule: string;
  default: string;
  custom: boolean;
  active: boolean;
};
