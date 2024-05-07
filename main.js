//alert("connected");
//console.log("Hello World")

const output = document.getElementById("output");

//document.getElementById("output").value = result;

function appendToOutput(input){
    output.value += input;
}

function result(){

    try{
        output.value = eval(output.value);
    }

    catch{
        output.value= "Error";
    }
    

    
}