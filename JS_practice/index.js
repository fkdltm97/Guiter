const title = document.querySelector(".title");

// console.dir(title);

// title.innerHTML="change!! Text!!";

// title.style.color= "red";
// const BASE_COLOR = "#34495e";
// const OTHER_COLOR = "red";

// function handleClick() {
//     const color = title.style.color;
//     if(BASE_COLOR === color){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;

//     }
// }

function handleClick() {;
    if(title.style.color == "blue"){
        title.style.color = "red";
    }else{
        title.style.color = "blue";
    }
}

function init() {
    title.style.color = "red";
    title.addEventListener("mouseenter" ,handleClick);
}
init();

// title.addEventListener("click", handleClick);