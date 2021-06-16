export default number => {
  let factorial = 1;  
  for (let i = 1; i < number; number--) {
    factorial *= number;
  }
  return factorial;
}