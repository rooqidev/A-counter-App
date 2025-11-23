const body = document.body;
body.style.backgroundColor = "royalblue";
body.style.padding = "3rem 0rem";
body.style.textAlign = "center";
body.style.fontFamily = "serif";
body.style.color = "white";
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");
const res = document.getElementById("res");
[inc, res, dec].forEach(btn => {
  btn.style.color = "royalblue";
  btn.style.backgroundColor = "white";
  btn.style.border = "none";
  btn.style.padding = "0.5rem 0.9rem";
  btn.style.borderRadius = "0.5rem";
  btn.style.fontSize = "13px";
});
const counting = document.getElementById("count");
counting.style.fontSize = "9rem"
let count = 0;

function increaseC() {
  count += 1;
  counting.innerText = count;
}

function decreaseC() {
  count -= 1;
  if (count < 1) {
    count = 0;
    counting.innerText = count;
  } else {
    counting.innerText = count;
  }
}
// reseting count
function resetC() {
  count = 0;
  counting.innerText = count;
}
inc.addEventListener("click", () => {
  // count += 1;
  // counting.innerText = count;
  increaseC();
});

dec.addEventListener("click", () => {
  // count -= 1;
  // if (count < 1) {
  //   count = 0;
  //   counting.innerText = count;
  // } else {
  //   counting.innerText = count;
  // }
  decreaseC();
});

res.addEventListener("click", () => {
  // count = 0;
  // counting.innerText = count;
  resetC();
});

function handleKeys(e) {
  switch (e.key) {
    case 'ArrowUp':
      increaseC();
      break;
      
    case "ArrowDown":
      decreaseC();
      break;
      
    case "Enter":
      resetC();
      break;
  }
}
document.addEventListener("keydown", handleKeys);