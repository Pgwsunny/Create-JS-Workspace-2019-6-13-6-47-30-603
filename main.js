module.exports = {isValid,generatemultiplyArray};

function multiplyTable(firstNumber,secondNumber){
    var output ="";
    var valid = isValid(firstNumber,secondNumber)
    if(valid){
        return valid;
    }
    var multiplyArray = generatemultiplyArray(firstNumber,secondNumber);
    output = printMultiplyTable(generatemultiplyArray)
}

function isValid(firstNumber,secondNumber){
    return firstNumber < secondNumber;
}

function generatemultiplyArray(firstNumber,secondNumber){
    // var generagedArray =[];
    // var times = secondNumber-firstNumber+1;
    // for (let rowIndex = 0; rowIndex < times; rowIndex++){
    //     var row =[];
    //     for(let colunmIndex =0;colunmIndex<(rowIndex+1);colunmIndex++){
    //         var result = ((colunmIndex+1)*(rowIndex+1))
    //         row.push(result)
    //     }
    // }
    var result = new Array();
    for(let i = firstNumber; i < secondNumber + 1; i++){
        let list = new Array();
        for(let j = firstNumber; j <= i; j++){
            let tmpString = j + "*" + i + "=" + i * j;
            list.push(tmpString);
        }
        result.push(list);
    }
    return result;
}

function printMultiplyTable(generatemultiplyArray){
        console.log(result);
}