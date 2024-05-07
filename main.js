//alert("connected");
//console.log("Hello World")

let output = document.getElementById("output");

//document.getElementById("output").value = result;

function appendToOutput(input){
    output.value += input;
}

function result(){
    output.value = eval(output.value);

    
}