"use strict";

function findMin(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

function findAverage(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

function findMedian(array) {
  const halfLenghtArray = array.length / 2;
  const sorted = [].concat(array).sort((a, b) => a - b);
  return (array.length % 2 === 0)
    ? (sorted[halfLenghtArray] + sorted[halfLenghtArray - 1]) / 2
    : sorted[Math.floor(halfLenghtArray)];
}

function findCountConsecutiveNumbersByHow(array) {
  let countNumbersByHow = 0;
  let maxCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= array[i + 1]) {
      countNumbersByHow++;
    } else {
      countNumbersByHow = 0;
    }
    if (countNumbersByHow > maxCount) {
      maxCount = countNumbersByHow;
    }
  }
  return maxCount;
}

function findCountConsecutiveNumbersByDesc(array) {
  let countNumbersByDesc = 0;
  let maxCount = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= array[i + 1]) {
      countNumbersByDesc++;
    } else {
      countNumbersByDesc = 0;
    }
    if (countNumbersByDesc > maxCount) {
      maxCount = countNumbersByDesc;
    }
  }
  return maxCount;
}

const fs = require('fs');
fs.readFile('10m.txt', 'utf-8', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  const arrayFromData = data.split('\n').map(value => +value);
  const average = findAverage(arrayFromData);
  const median = findMedian(arrayFromData);
  const minValue = findMin(arrayFromData);
  const maxVAlue = findMax(arrayFromData);
  const countByHow = findCountConsecutiveNumbersByHow(arrayFromData);
  const countByDesc = findCountConsecutiveNumbersByDesc(arrayFromData);

  console.log(average);
  console.log(median);
  console.log(minValue);
  console.log(maxVAlue);
  console.log(countByHow);
  console.log(countByDesc);
});