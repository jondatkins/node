const { log } = require('node:console');
const fs = require('node:fs/promises');
const { console } = require('node:inspector');
const path = require('node:path');

let sourceFilePath = "../algorithms/modules/"
let testFilePath = "../algorithms/tests/"

let fileName = process.argv[2];
console.log('foo')

function test() {
  console.log('xxx')
}
// const validAnagram = (str1, str2) => {
// Create files for Udemy Algorithms course
async function createFile() {
  console.log('test');
  if (!fileName) {
    console.log("please provide a file name.")
    return;
  }
  let srcFileTemplateBegin = `const ${fileName} = () => {
      return true;
    }`;

  let srcFileTemplateEnd = `module.exports = { ${fileName} };`

  let testFileTemplate = `const ${fileName} = require('../modules/${fileName}');

    test('', () => {
      expect( ${fileName}.${fileName}()).toBe(true)
    })
    `
  try {
    let testDataArray = await readTestData();
    console.log(testDataArray);
    let fileString = "";
    testDataArray.forEach((funcCall) => {
      fCall = funcCall[0];
      fileString = `console.log(${fcall});\n`
    })
    console.log(fileString);
    // await fs.writeFile(`./${fileName}.js`, sourceFileTemplate);
    // await fs.writeFile(`./${fileName}.test.js`, testFileTemplate);
  } catch (err) {
    console.log(err);
  }
}



async function readTestData() {
  let fileArray2 = [];
  try {
    let testDataDir = "/home/jon/Projects/Node/algorithms/testData"
    console.log(__dirname)
    // const data = await fs.readFile(`../algorithms/testData/${fileName}`, { encoding: 'utf8' });
    const data = await fs.readFile(`${testDataDir}/${fileName}`, { encoding: 'utf8' });
    // console.log(data);
    let fileArray = data.split(/\r?\n/);
    fileArray.forEach((element, i) => {
      // console.log(element);
      let funcCallArray = [];
      if (element) {
        funcCallArray = element.split("\/\/");
      }
      if (funcCallArray[0] && funcCallArray[1]) {
        funcCallArray[0] = funcCallArray[0].trim()
        funcCallArray[1] = funcCallArray[1].trim()
        fileArray2[i] = funcCallArray;
        console.log(funcCallArray);
      }
    });

  } catch (err) {
    console.error(err);
  }
  return fileArray2;
}
// createFile();
// test();
// readTestData();
