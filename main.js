module.exports = {isValid,generatemultiplyArray,printMultiplyTable};

function multiplyTable(firstNumber,secondNumber){
   
}

function isValid(firstNumber,secondNumber){
    return firstNumber <= secondNumber;
}

function generatemultiplyArray(firstNumber,secondNumber){
    let array = new Array();
    for(let i=firstNumber;i<=secondNumber;i++){
        let arraycolum = new Array();
        for (let j = firstNumber; j <= i; j++) {
            arraycolum.push(j +'*' + i + '=' + i*j)
            
        }
    array.push(arraycolum)
    }
    return array
}

function printMultiplyTable(generatemultiplyArray){
    let output ='';
    let arraylist = generatemultiplyArray;
    for (let i = 0; i < arraylist.length; i++) {
        for (let j = 0; j < arraylist[i].length; j++) {
            output = output + arraylist[i][j] + ' ';           
        }
        output = output + '\n';
    }      
    return output;
}