
function randomArray(length: number): number[] {
  // let random: number[] = Array.apply(null, { length: 10000 });
  let random = Array.from({ length: length }, () => Math.floor(Math.random() * length));
  // map(Function.call, Math.random);
  return random;
}

module.exports = { randomArray };
