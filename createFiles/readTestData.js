const fs = require('node:fs/promises');

async function example() {
  try {
    const data = await fs.readFile('../algorithms/testData/', { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
example();
