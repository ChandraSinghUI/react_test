export function toggleSelect(obj) {
  return {
    type: "TOGGLESELECT",
    payload: obj
  };
}
export function saveData(obj) {
  return {
    type: "SAVEDATA",
    payload:obj
  };
}
//export const TOGGLESELECT = "TOGGLE_SELECT";
