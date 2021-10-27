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
    surname = document.getElementById("input1").value;
    name = document.getElementById("input2").value;
    email = document.getElementById("input3").value;
    id = document.getElementById("input4").value;
    note = document.getElementById("input5").value;
    let object={
        surname,
        name,
        email,
        id,
        note
    };
    localStorage.setItem("Info", JSON.stringify(object));
}