const fs = require('node:fs/promises');

// Function assumes that there is a file in a specific locaton with the name supplied by the user, e.g. 'findPairs.js'
// This will contain function calls on new lines, e.g.
// findPair([6, 1, 4, 10, 2, 4], 2) // true
async function readFile() {
  let fileName = process.argv[2];
  // The second file array, once the file has been read and processed
  let fileArray2 = [];
  try {

    let testDataDir = "/home/jon/Projects/Node/algorithms/testData"
    const data = await fs.readFile(`${testDataDir}/${fileName}.js`, { encoding: 'utf8' });
    // Read each line in the file into an array
    let fileArray = data.split(/\r?\n/);
    fileArray.forEach((element, i) => {
      // An array of 2 items, the call, e.g. 'findPair(yourArgsHere)' and the comment, e.g. // true
      // The comment gives the expected result of the call.
      let funcCallArray = [];
      if (element) {
        // split the function call into the call and the comment
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

// Create a file for the problem being worked on, e.g. 'findPairs.js', and another to test this file
// e.g. 'findPairs.test.js'. These files go in a specific absolute path. Create some basic content
// For each file based on the contents of the file with the given function calls and their expected
// results.
async function writeFile() {
  let fileName = process.argv[2];
  if (!fileName) {
    console.log("please provide a file name.")
    return;
  }
  let sourceFilePath = "/home/jon/Projects/Node/algorithms/modules";
  let testFilePath = "/home/jon/Projects/Node/algorithms/tests"
  let srcFileTemplateBegin = `const ${fileName} = () => {
      return true;
    }`;

  let srcFileTemplateEnd = `module.exports = { ${fileName} };`

  let testFileTemplateBegin = `const ${fileName} = require('../modules/${fileName}')\n`;

  let testFileFunc = `test('', () => {`;
  let testFileTemplateEnd = "})";

  try {
    let testDataArray = await readFile();
    let funcCallString = "";
    let testCallString = "";
    testDataArray.forEach((funcCall) => {
      funcCallString += `console.log(${funcCall[0]}) \/\/ ${funcCall[1]}; \n`
      testCallString += testFileFunc + `\nexpect( ${fileName}.${funcCall[0]}).toBe(${funcCall[1]})\n` + testFileTemplateEnd + "\n";
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
