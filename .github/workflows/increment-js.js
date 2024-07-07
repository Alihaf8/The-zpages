function increment() {
  let el = document.getElementById("output").innerText++;
  if (el >= 499) {
    el = document.getElementById("output").innerText = 500;
    let full = document.getElementById("full").innerText = "The wallet is full!";
  };
  if (el <= 499) {
    let full = document.getElementById("full").innerText = " ";
  }
}
function decrement() {
  let el = document.getElementById("output").innerText--;
  if (el <= 0) {
    el = document.getElementById("output").innerText = 0;
    let empty = document.getElementById("full").innerText = "The wallet is empty";
  };
  if (el >= 1) {
    let empty = document.getElementById("full").innerText = " ";
  }
}
function refresh() {
  location.reload();
} 