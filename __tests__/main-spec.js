const {isValid,generatemultiplyArray} = require('../main');

it('should divide two numbers',() =>{
	//given
	var firstNumber =2;
	var secondNumber=3;
	//when
	var result=isValid(firstNumber,secondNumber);	
	//then
	expect(result).toBe(true);
});

it('should generated array with table items',() =>{
	//given
	var firstNumber =2;
	var secondNumber=3;
	//when
	var generagedArray=generatemultiplyArray(firstNumber,secondNumber);	
	//then
	expect(generagedArray[0][0]).toBe('2*2=4');
	expect(generagedArray[1][0]).toBe('2*3=6');
	expect(generagedArray[1][1]).toBe('3*3=9');
});

