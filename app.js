let sayi = Math.round(Math.random() * 100);
let hak = 5;
let tahmin = +prompt("enter a number");

while (hak > 0) {
  if (tahmin == sayi) {
    alert("congratulation!!");
    break;
  } else if (tahmin < sayi) {
    hak--;
    alert("up to the number");
    tahmin = +prompt("enter a number");
  } else if (tahmin > sayi) {
    hak--;
    alert("down to the number");
    tahmin = +prompt("enter a number");
  }
}
if (hak == 0) {
  alert("you are lost");
  let request = prompt("do you want to play again");

  if (request == "yes") {
    hak = 5;
  } else {
    alert("game over");
  }
}
