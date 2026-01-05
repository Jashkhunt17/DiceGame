let randomeNumber1 = Math.floor(Math.random() * 6 + 1);
let randomeNumber2 = Math.floor(Math.random() * 6 + 1);

console.log(randomeNumber1);

let getpicture1 = `images/dice${randomeNumber1}.png`;
let getpicture2 = "images/" + "dice" + randomeNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", getpicture1);
document.querySelector(".img2").setAttribute("src", getpicture2);

let h1 = document.querySelector("h1");

if(randomeNumber1 > randomeNumber2){
    h1.innerText = "player 1 is won the match!";
}
else if(randomeNumber1 == randomeNumber2){
    h1.innerText = "Draw!"
}
else{
    h1.innerText = "player 2 is won the match!"
}
