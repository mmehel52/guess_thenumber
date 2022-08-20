let sayi = Math.round(Math.random() * 100);
let tahmin = +prompt("enter a number");
let hak = 5;
while (hak > 0) {
  if (tahmin == sayi) {
    console.log(`tebrikler bildiniz`);
    break;
  } else if (tahmin < sayi) {
    console.log(`up to the number`);
    tahmin = +prompt("enter a number");
    hak--;
  } else if (tahmin > sayi) {
    console.log(`down to the number`);
    tahmin = +prompt("enter a number");
    hak--;
  }
  if (hak == 0) {
    console.log(`you are lost`);
    let request = prompt("do you want to play again");
  }
  if (request == "yes") {
    tahmin = +prompt("enter a number");
  } else {
    console.log(`game over`);
  }
}
