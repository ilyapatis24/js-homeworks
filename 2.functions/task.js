"use strict";

function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((prev, current) => prev + current, 0);
  let avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = arr.reduce((prev, current) => prev + current, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let difference = max - min;
  if(arr.length === 0) return 0;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let i;

  if(arr.length === 0) return 0;

  for(const num of arr) {
    if((num % 2) === 0) sumEvenElement += num; else sumOddElement += num;
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if(arr.length === 0) return 0;
  for(const num of arr) {
    if((num % 2) === 0) {
      sumEvenElement += num;
      ++countEvenElement;
    }
  }
  return sumEvenElement/countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let result;

  if(arrOfArr.length === 0) return 0;

  for(let arr of arrOfArr) {
    // numbers = arrOfArr[i];
    result = func(...arr);
    if(result > maxWorkerResult) maxWorkerResult = result;
  }

  return maxWorkerResult;
}
