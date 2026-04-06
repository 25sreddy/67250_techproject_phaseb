/* Part 2: numeric addition */
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

/* Part 2: string concatenation */
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

/* Part 2: sumnPrint */
function sumnPrint(x1, x2) {
  var result = x1 + x2;
  console.log(result);
}

sumnPrint(x, y);
sumnPrint(A, B);
sumnPrint(x, y);
sumnPrint(A, B);

/* Part 2: nested if/else (C.length vs z) */
if (C.length > z) {
  if (C.length < z) {
    console.log(z);
  } else {
    console.log(C);
  }
} else {
  if (C.length < z) {
    console.log(z);
  } else {
    console.log("good job!");
  }
}

/* Part 2: arrays + Banana (comment out after forEach check per assignment) */
/*
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Banana") {
      alert("Banana");
    }
  }
}

findTheBanana(L1);
findTheBanana(L2);

function findTheBananaForEach(arr) {
  arr.forEach(function (item) {
    if (item === "Banana") {
      alert("Banana");
    }
  });
}

findTheBananaForEach(L1);
findTheBananaForEach(L2);
*/

/* Part 3: time-based greeting */
var now = new Date();
var hour = now.getHours();

function greeting(h) {
  var greetingEl = document.getElementById("greeting");
  if (!greetingEl) {
    return;
  }
  var phrase;
  if (h < 5 || h >= 20) {
    phrase = "Good night";
  } else if (h < 12) {
    phrase = "Good morning";
  } else if (h < 18) {
    phrase = "Good afternoon";
  } else {
    phrase = "Good evening";
  }
  greetingEl.innerHTML = phrase + " — Welcome to MonoMuse";
}

greeting(hour);

/* Part 4: footer year */
function addYear() {
  var yearEl = document.getElementById("copyYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
