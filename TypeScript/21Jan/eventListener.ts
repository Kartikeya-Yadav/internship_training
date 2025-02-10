//EventListener 

const btn = document.getElementById("button") as HTMLElement;

const btnClick = (event:MouseEvent) => {
    alert("Butten Clicked");
}

btn.addEventListener("click", btnClick);

const div = document.createElement("div");
div.style.width = "200px";
div.style.height = "200px";
div.style.backgroundColor = "blue";
document.body.appendChild(div);

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "green";
});

div.addEventListener("mouseleave", () => {
    div.style.backgroundColor = "red";
});


const form = document.createElement("form");
const input = document.createElement("input");
const submitButton = document.createElement("button");

submitButton.textContent = "Submit";
form.appendChild(input);
form.appendChild(submitButton);
document.body.appendChild(form);

input.addEventListener("input", (event:Event) =>{
    const target = event.target as HTMLInputElement;
    console.log(`Input Value: ${target.value}`);
});

form.addEventListener("submit", (event:Event) => {
event.preventDefault();
alert(`Form sumitted with value: ${input.value}`)
});


//focus and blur event
const inputField = document.createElement("input");
document.body.appendChild(inputField);

inputField.addEventListener("focus", () => {
    inputField.style.border = "5px solid green";
});

inputField.addEventListener("blur", () => {
    inputField.style.border = "1px solid black";
});


