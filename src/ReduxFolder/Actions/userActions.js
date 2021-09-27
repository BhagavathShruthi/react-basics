export function SetName(name) {
  // const obj = {
  //   type: 'UpdateName',
  //   payload: name,
  // };
  // async
  // return (dispatch) => {
  //   setTimeout(() => {
  //     dispatch(obj);
  //   }, 2000);
  // };
  return {
    type: 'UpdateName',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    })
  };
}
export function SetAge(age) {
  return {
    type: 'UpdateAge',
    payload: age,
  };
}
