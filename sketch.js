function setup() {
  createCanvas(800, 800);
  friends = ["Rohan", "Cam", "Josh", "Vasu", "Dave", "William", "Jackson"];
  numbers = [63, 434, 87, 10, 13, 79];
  family = [121, 140, 93, 110, 100];
  // for (var i = 0; i < friends.length; i++) {
  //   console.log(friends[i]);
  // }
  // for (var i = 0; i < family.length; i++) {
  //   if (family[i] % 2 == 0) {
  //     console.log(family[i]);
  //   }
  // }
  // for (var i = 0; i < numbers.length; i++) {
  //   if (numbers[i] > 0) {
  //     console.log(numbers[i]);
  //   }

  // }
  // for (var i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i] * -1);
  // }
  // for (var i = 5; i >= 0;i--) {
  //   console.log(numbers[i]);
  // }
  // power();
  //s3();
  a5();
}

function draw() {
  background("black");
}

function power() {
  // var a = Math.pow(2, 64);
  var a = 1;

  // while (a != 10000) {
  //   console.log(a);
  //   a = a*10;

  // }
  for (var i = 0; i <= 1; i++) {
    var a = Math.pow(10, i);
    console.log(a);
  }
}
//1,4,, 9 , 16 , 25 .. 10 terms
function s1() {
  for (var i = 1; i <= 10; i++) {
    var b = Math.pow(i, 2);
    console.log(b);
  }
}
//0,3,8,15,24 ... 10 terms
function s2() {
  for (var i = 1; i <= 10; i++) {
    var c = Math.pow(i, 2) - 1;
    console.log(c);
  }
}

function factors() {
  var twlv = 6;
  for (var i = 1; i <= twlv; i++) {
    if (twlv % i == 0) {
      console.log(i);
    }
  }
}
function countFactors() {
  var factor = 12;
  var count = 0;
  for (var i = 1; i <= factor; i++) {
    if (factor % i == 0) {
      count = count + 1;
    }
  }
  console.log(count);
}
function checkPrime() {
  var prime = 21;
  var count = 0;
  for (var i = 1; i <= prime; i++) {
    if (prime % i == 0) {
      count = count + 1;
    }
  }
  if (count == 2) {
    console.log("prime");
  }
  if (count > 2) {
    console.log("not prime");
  }
}
function factorial() {
  var factorial = 6;
  var product = 1;
  for (var i = 1; i <= factorial; i++) {
    product = product * i;
  }
  console.log(product);
}
//2,5,10,17,26
function s3() {
  for (var i = 1; i <= 10; i++) {
    var c = Math.pow(i, 2) + 1;
    console.log(c);
  }
}
//WAP TO TAKE AN ARRAY AND FIND THE SUM OF ALL NUMBERS
function a1() {
  var numbers = [2, 4, 6, 8];
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
}
//1. Accept 10 numbers into an array 
//and then calculate the sum of numbers present 
//in odd positions and even positions respectively.
function a2() {
  var evenSum = 0
  var oddSum = 0
  var numbers = [1,2,3,4,5,6,7,8,9,10]
  for (var i = 0; i<numbers.length;i++) {
    if (i%2==0) {
      evenSum = evenSum + numbers[i];
    } else {
      oddSum = oddSum + numbers[i];
    }
  }
  console.log(oddSum + " is the odd sum.");
  console.log(evenSum + " is the even sum.");
}
//2. Accept 10 numbers into an array 
//and then calculate the sum of even numbers 
//present in odd positions.
function a3() {
  var numbers = [16,10,13,18,26,35];
  var sum = 0;
  for (var i = 0; i<numbers.length;i++) {
    if (i%2!=0 && numbers[i]%2==0) {
      sum = sum + numbers[i];
    }
  }
  console.log(sum);
}
//WAP TO TAKE AN ARRAY OF SIZE 10 
//AND TRANSFRER ALL THE NEGATIVE
//ELEMENTS IN A NEW ARRAY
function a4() {
  var numbers = [1,-2,3,-4,5,6,-7,8,9,-10];
  var empty = [];
  for (var i = 0; i<numbers.length;i++) {
    if (numbers[i]<0) {
      empty.push(numbers[i])
    }
  }
  console.log(empty);
}
//Create three arrays A, B and C both of size 5.
//Accept numbers in two arrays A and B.
//Fill all the elements of array C with the sum of numbers present in 
//appropriate element of array A and B.
function a5() {
  var a = [1,2,3,4,5]
  var b = [6,7,8,9,10]
  var c = []
  var sum = 0
  for (var i = 0; i<a.length; i++) {
    sum = a[i] + b[i]
    c.push(sum);
  }
  console.log(c);
}