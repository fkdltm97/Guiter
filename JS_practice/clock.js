const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  // time clock made it
  const minutes = date.getMinutes();
  const hour = date.getHours();
  const seconds = date.getSeconds();
  clockContainer.innerHTML = `${hour < 10 ? `0${hour}` : `${hour}`} :
     ${minutes < 10 ? `0${minutes}` : `${minutes}`}`;
     
    //  :${seconds < 10 ? `0${seconds}` : `${seconds}`}

  clockContainer.style.fontSize = "150px";
  clockContainer.style.color = "white";
  clockContainer.style.display = "flex";
  clockContainer.style.justifyContent = "center";
  clockContainer.style.textShadow = "2px 2px 2px black";
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
