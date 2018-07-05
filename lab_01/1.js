var budget = prompt("Ваш бюджет?","");
document.getElementById("budget1").innerHTML = budget;
var storeName = prompt("Название вашего магазина?","");
document.getElementById("storeName1").innerHTML = storeName;

var mainList = {};
mainList.budget = budget;
mainList.storeName = storeName;
mainList.shopGoods = [];

mainList.shopGoods[0] = prompt("Название вашего товара 1?","");
document.getElementById("goods1").innerHTML = mainList.shopGoods[0];

mainList.shopGoods[1] = prompt("Название вашего товара 2?","");
document.getElementById("goods2").innerHTML = mainList.shopGoods[1];

mainList.shopGoods[2] = prompt("Название вашего товара 3?","");
document.getElementById("goods3").innerHTML = mainList.shopGoods[2];

document.getElementById("allGoods").innerHTML = mainList.shopGoods;

document.getElementById("budgeOfDay").innerHTML = budget/30;