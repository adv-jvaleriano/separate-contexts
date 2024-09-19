export const enum CapacityStatus {
  EMPTY,
  AVAILABLE,
  FULL,
}

export type Action = {
  type: string;
  payload?: any;
};
