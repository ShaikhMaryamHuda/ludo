var num = Math.floor (Math.random()*6)+1;
console.log(num);

var diceImage= "dice" + num +".png";
console.log(diceImage);

var diceImageSource = "assets/"+diceImage;
console.log(diceImageSource);

var image1 = document.querySelectorAll("img")[0];
console.log(image1);

image1.setAttribute("src",diceImageSource);

var num2 = Math.floor (Math.random()*6)+1;
console.log(num2);

var diceImage2= "dice" + num2 +".png";
console.log(diceImage2);

var diceImageSource2 = "assets/"+diceImage2;
console.log(diceImageSource2);

var image2 = document.querySelectorAll("img")[1];
console.log(image2);

image2.setAttribute("src",diceImageSource2);


if(num > num2)
{
    document.querySelector("h1").innerHTML = "Player 1 Win!!!";
}
else if(num2 > num)
{
    document.querySelector("h1").innerHTML = "Player 2 Win!!!";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!!!";
}