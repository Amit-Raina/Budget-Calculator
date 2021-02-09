const allItems = document.getElementById("items");
const allCost = document.getElementById("price");
const btn = document.getElementById("submit");
const mainList = document.getElementById("main-list");
const costList = document.getElementById("cost-list");
const ttl = document.getElementById("tot");
const displayBudget = document.getElementById("budShow");
const budgt = document.getElementById("budget");
const balanceMoney = document.getElementById("bal");
var total = 0;
var budgetMoney = 0;
var balance = 0;

function btnClick(){

budgetMoney = parseInt(budgt.value);
if(budgt.value == '' || budgt.value == 0 || budgt.value == NaN){
    alert("Budget : Enter Postive Value");
    return;
}

if(allItems.value == ""){
    alert("Item : Enter Title");
    return;
}

if(allCost.value == NaN || allCost.value == ''){
    alert("Price : Enter Postive Value");
    return;
}

const newLi = document.createElement("li");
const newCst = document.createElement("li");
const addContent = document.createTextNode(allItems.value);
const addCost = document.createTextNode("Rs "+ allCost.value);

newLi.appendChild(addContent);
mainList.appendChild(newLi);
newCst.appendChild(addCost);
costList.appendChild(newCst);

total = parseInt(total) + parseInt(allCost.value);
balance = budgetMoney - total;
// const totalPrint = document.createTextNode(total);
ttl.innerText =  "To be Paid : Rs " + total; 
displayBudget.innerText = "Budget : Rs " + budgetMoney;
balanceMoney.innerText = "Balance : Rs " + balance;

allCost.value  = '';
allItems.value = '';   

}

btn.addEventListener('click', function(){
    btnClick();
});
