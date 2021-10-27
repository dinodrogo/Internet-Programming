//timer
var enterDate = new Date();
function stopwatch(){
    return (new Date()-enterDate)/1000;
}

function submit() {
    input=document.getElementById("input1").value;
    if(input==""){
        alert("Fill in the first question.")
    }else{
        score=0;
        if(document.getElementById('ans14').checked){
            score+=1;
        }
        // Only 1 answer is right(?), but the question asks for multiple answers?
        if(document.getElementById('ans22').checked){
            score+=1;
        }
        if(document.getElementById('ans31').checked){
            score+=1;
        }
        document.getElementById("results").innerHTML = "Score: " + score + "/3, it took you " + stopwatch() + " seconds to submit.";
    }
}


function archive() {
    mileage = document.getElementById("input1").value;
    avgfuel = document.getElementById("input2").value;
    fuelprice = document.getElementById("input3").value;
    cost = document.getElementById("input4").value;
    passenger = document.getElementById("input5").value;
    let object={
        mileage,
        avgfuel,
        fuelprice,
        cost,
        passenger
    };
    localStorage.setItem("Info", JSON.stringify(object));
}