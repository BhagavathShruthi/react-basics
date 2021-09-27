export function Add(number) {
  return {
    type: 'ADD',
    payload: number,
  };
}
export function Subtract(number) {
  return {
    type: 'SUBTRACT',
    payload: number,
  };
}
