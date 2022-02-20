const Clock = document.querySelector("#clock")


function Getclock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    Clock.innerText = `${hours}:${minutes}:${seconds}`;
}


Getclock(); //바로 볼 수 있다.
setInterval(Getclock, 1000); //반복 작업을 해줌 