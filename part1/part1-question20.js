function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let seconds = setInterval(printTime, [1000]);