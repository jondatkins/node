const fs = require('node:fs/promises');



async function readFile() {
  let fileName = process.argv[2];
  let fileArray2 = [];
  try {

    let testDataDir = "/home/jon/Projects/Node/algorithms/testData"
    const data = await fs.readFile(`${testDataDir}/${fileName}.js`, { encoding: 'utf8' });

    let fileArray = data.split(/\r?\n/);
    fileArray.forEach((element, i) => {
      let funcCallArray = [];
      if (element) {
        funcCallArray = element.split("\/\/");
      }
      if (funcCallArray[0] && funcCallArray[1]) {
        funcCallArray[0] = funcCallArray[0].trim()
        funcCallArray[1] = funcCallArray[1].trim()
        fileArray2[i] = funcCallArray;
      }
    });
  } catch (err) {
    console.error(err);
  }
  return fileArray2;
}

async function writeFile() {
  let fileName = process.argv[2];
  let sourceFilePath = "/home/jon/Projects/Node/algorithms/modules";
  let testFilePath = "/home/jon/Projects/Node/algorithms/tests"
  if (!fileName) {
    console.log("please provide a file name.")
    return;
  }
  let srcFileTemplateBegin = `const ${fileName} = () => {
      return true;
    }`;

  let srcFileTemplateEnd = `module.exports = { ${fileName} };`

  let testFileTemplateBegin = `const ${fileName} = require('../modules/${fileName}')`;

  let testFileFunc = `test('', () => {`;
  let testFileTemplateEnd = "})";

  try {
    let testDataArray = await readFile();
    let funcCallString = "";
    let testCallString = "";
    testDataArray.forEach((funcCall) => {
      funcCallString += `console.log(${funcCall[0]}); \n`
      testCallString += testFileFunc + `\nexpect( ${fileName}.${fileName}()).toBe(true)\n` + testFileTemplateEnd + "\n";
    })
    let fileString = srcFileTemplateBegin + "\n" + funcCallString + srcFileTemplateEnd;
    let testString = testFileTemplateBegin + "\n" + testCallString;
    await fs.writeFile(sourceFilePath + `/${fileName}.js`, fileString);
    await fs.writeFile(testFilePath + `/${fileName}.test.js`, testString);
  } catch (err) {
    console.log(err);
  }
}
writeFile();
