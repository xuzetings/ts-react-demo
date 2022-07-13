export type CounterState = {
  count: number
}

// export type CounterAction = {
//   type: string
//   payload: number
// }

export type CounterPayloadAction = {
  type: string
  payload: number
}

export type CounterNoPayloadAction = {
  type: string
}

export type CounterAction = CounterPayloadAction | CounterNoPayloadAction

export enum COUNTER_ACTION_TYPE {
  INCREASE = 'increase',
  DECREASE = 'decrease',
  DOUBLE = 'double'
}
