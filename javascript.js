let box = document.querySelector(".box");
const button = document.querySelector(".button");

function createDivs(number) {
    box.innerHTML = ""; // clear previous divs
    const containerWidth = box.clientWidth;
    const squareSize = containerWidth / number;

    for (let i = number; i > 0; i--) {
        for (let j = number; j > 0; j--) {
            const newDiv = document.createElement("div");
            newDiv.style.height = squareSize + "px";
            newDiv.style.width = squareSize + "px";

            newDiv.addEventListener("mouseenter",() => {

                newDiv.style.backgroundColor = `hsl(${Math.random()*360}, 20% , 50% )`
            })

            box.appendChild(newDiv);
        }
    }
}

button.addEventListener('click', () => {
    let quantityofDivs = parseInt(prompt("Please enter the Grid Value (Max 100): "));
    if(quantityofDivs>0 && quantityofDivs<101){
        createDivs(quantityofDivs);}
    
});