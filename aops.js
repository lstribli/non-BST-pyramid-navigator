console.time('time');
let Target = 720;

let input = [2, 4, 3, 3, 2, 6, 2, 9, 5, 2, 10, 5, 2, 15, 5];
let size = input.length;
let ind = input.length - 1;
let base = ind - 5;
let fl = base - 4;
let tl = fl - 3;
let sl = tl - 2;
let FL = sl - 1;

const factor = (Target, input) => {

};

for (let i = size; i > 0; i--) {
  while (i !== input[base]) {

  }
}






// let algoObj = {};
// let counter = 0;
// // establish tree structure
// while (counter < input.length) {

//   let current;

//   if (input[0] !== null) {
//     current = input[0];
//     Object.assign(algoObj, { 'level 1': current });
//     current = null;
//     counter++;
//     console.log(algoObj);
//   }

//   if (counter === 1) {
//     let tempArr = [];

//     tempArr.push(input[1], input[2]);
//     current = tempArr;
//     Object.assign(algoObj, { 'level 2': current });
//     tempArr = null;
//     current = null;
//     counter = counter + 2;
//     console.log(algoObj);
//   }

//   if (counter === 3) {
//     let tempArr = [];

//     tempArr.push(input[3], input[4], input[5]);
//     current = tempArr;
//     Object.assign(algoObj, { 'level 3': current });
//     tempArr = null;
//     current = null;
//     counter = counter + 3;
//     console.log(algoObj);
//   }

//   if (counter === 6) {
//     let tempArr = [];

//     tempArr.push(input[6], input[7], input[8], input[9]);
//     current = tempArr;
//     Object.assign(algoObj, { 'level 4': current });
//     tempArr = null;
//     current = null;
//     counter = counter + 4;
//     console.log(algoObj);
//   }

//   if (counter === 10) {
//     let tempArr = [];

//     tempArr.push(input[10], input[11], input[12], input[13], input[14]);
//     current = tempArr;
//     Object.assign(algoObj, { 'level 5': current });
//     tempArr = null;
//     current = null;
//     counter = counter + 5;
//     console.log(algoObj);
//   }
// }


// console.timeEnd('time');