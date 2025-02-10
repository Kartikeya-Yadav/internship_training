//EventListener 
var btn = document.getElementById("button");
var btnClick = function (event) {
    alert("Butten Clicked");
};
btn.addEventListener("click", btnClick);
var div = document.createElement("div");
div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "blue";
document.body.appendChild(div);
div.addEventListener("mouseover", function () {
    div.style.backgroundColor = "green";
});
div.addEventListener("mouseleave", function () {
    div.style.backgroundColor = "red";
});
var form = document.createElement("form");
var input = document.createElement("input");
var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
form.appendChild(input);
form.appendChild(submitButton);
document.body.appendChild(form);
input.addEventListener("input", function (event) {
    var target = event.target;
    console.log("Input Value: ".concat(target.value));
});
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Form sumitted with value: ".concat(input.value));
});
//focus and blur event
var inputField = document.createElement("input");
document.body.appendChild(inputField);
inputField.addEventListener("focus", function () {
    inputField.style.border = "5px solid green";
});
inputField.addEventListener("blur", function () {
    inputField.style.border = "1px solid black";
});
