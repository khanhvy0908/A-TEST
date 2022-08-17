function findEven(number){
    for (let i = 4; i < number; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}




function numberOneTriangle(){
    let a = "";
    for (let i = 0; i <= 4; i++) {
        console.log(a+="1")
    }
}
function Time(){
  
    var date = new date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    if(hour ==0){
        hour = 12;
    }else{
        if (hour > 12){
            hour = hour - 12;
        }
    }
    hour = update(hour);
    minute = update(minute);
    function update(t){
        if (t<10) {
            return "0" +t;
        } else {
            return t;
        }
    } 
    document.getElementsByClassName("digital-clock").innerText = hour +":"+ minute;
    setTimeout(Time, 1000);
}