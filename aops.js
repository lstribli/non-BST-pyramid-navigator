console.time('time');
let Target = 720;

let input = [2, 4, 3, 3, 2, 6, 2, 9, 5, 2, 10, 5, 2, 15, 5];


const nav = (Target, input) => {
  if (input !== []) {
    console.log('invalid input type');
  }
  if (input.length % 2 === 0) {
    console.log('pyramid uneven');
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== isNaN()) {
      console.log('an element in input is NaN')
    }
  }
}






const nav = (Target, input) => {
  let product = null;
  let top = null;
  let levelCounter = 0;


  for (let i = 0; i < input.length; i++) {
    if (i === input[0]) {
      top = i;
      product = i;
      levelCounter++;
    }
    if () {

      (levelCounter * 1) + 1;
    }
    if () {

    }
  }

}




// let algoObj = {};
// let counter = 0;
// // establish tree structure
// while (counter < input.length) {

//   let current;

//   if (input[0] !== null) {
//     current = input[0];
//     Object.assign(algoObj, { 'one': current });
//     current = null;
//     counter++;
//   }

//   if (counter === 1) {
//     let tempObj = {};

//     Object.assign(tempObj, { 'ind1': input[1], 'ind2': input[2] });
//     current = tempObj;
//     Object.assign(algoObj, { 'two': current });
//     tempObj = null;
//     current = null;
//     counter = counter + 2;
//   }

//   if (counter === 3) {
//     let tempObj = {};

//     Object.assign(tempObj, { 'ind1': input[3], 'ind2': input[4], 'ind3': input[5] });
//     current = tempObj;
//     Object.assign(algoObj, { 'three': current });
//     tempObj = null;
//     current = null;
//     counter = counter + 3;
//   }

//   if (counter === 6) {
//     let tempObj = {};

//     Object.assign(tempObj, {
//       'ind1': input[6],
//       'ind2': input[7],
//       'ind3': input[8],
//       'ind4': input[9]
//     });
//     current = tempObj;

//     Object.assign(algoObj, { 'four': current });
//     tempObj = null;
//     current = null;
//     counter = counter + 4;
//   }

//   if (counter === 10) {
//     let tempObj = {};

//     Object.assign(tempObj, {
//       'ind1': input[10],
//       'ind2': input[11],
//       'ind3': input[12],
//       'ind4': input[13],
//       'ind5': input[14]
//     });
//     current = tempObj;

//     Object.assign(algoObj, { 'five': current });
//     tempObj = null;
//     current = null;
//     counter = counter + 5;
//   }
// }


// const navigate = (algoObj, Target) => {
//   const start = algoObj.one;
//   let top = null;
//   for (const [key, value] of Object.entries(algoObj.two)) {

//   }
//   for (const [key, value] of Object.entries(algoObj.three)) {
//     let res = value * top;
//     console.log(res);
//   }
//   for (const [key, value] of Object.entries(algoObj.four)) {
//     let res = value * top;
//     console.log(res);
//   }
//   for (const [key, value] of Object.entries(algoObj.five)) {
//     let res = value * top;
//     console.log(res);
//   }
// };
// navigate(algoObj);
console.timeEnd('time');


