var tijd = 0;var timer = null; var hold = 0;

function startTimer(){
    tijd = 0; hold = 0; //0 is gepauzeerd, 1 is running
    setValue();
    timer = setInterval(addTime,1000);
}

function holdTimer(){
    clearInterval(timer);
    hold = 1;
}

function continueTimer(){
    timer = setInterval(addTime,1000);
    hold = 0;
    setValue();
}

function addTime(){
    if(hold == 0){
        tijd++;
    }
    setValue();
}

function setValue() {
    document.getElementById("chrono").innerHTML = tijd;
    document.getElementById("title").innerHTML = "chronoapp: " + tijd;
}