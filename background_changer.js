const color_list = ["red" , "green" , "blue" , "green" , "pink" , "yellow"]

let interval;

function color_choser(){
    const chosen = color_list[Math.floor(Math.random()*(color_list.length+1))]
    document.body.style.backgroundColor = chosen
}

function start_changing(){
    if(!interval){
        interval = setInterval(color_choser , 1000) 
    }
}

function stop_changing(){
    clearInterval(interval)
    interval = null
}

document.getElementById("start").addEventListener("click" , start_changing)
document.getElementById("end").addEventListener("click" , stop_changing)