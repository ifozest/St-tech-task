/**
 * Makes a shallow copy of 2d array
 * Creates new references only for exact array and all arrays inside
 * @param {Object[][]} array to copy
 * @return {Object[][]} new array
 */
export const copy2dArray = (array) => {
  const newArray = [...array];
  const { length } = newArray;
  for (let i = 0; i < length; i += 1) {
    newArray[i] = [...newArray[i]];
  }
  return newArray;
};
