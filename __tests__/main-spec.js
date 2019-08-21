const {isValid,generatemultiplyArray,printMultiplyTable} = require('../main');

it('should divide two numbers',() =>{
	//given
	var firstNumber =2;
	var secondNumber=3;
	//when
	var result = isValid(firstNumber,secondNumber);
	//then
	expect(result).toBe(true);
});

it('should be a double array',() =>{
	//given
	var firstNumber =2;
	var secondNumber=3;
	//when
	var result = generatemultiplyArray(firstNumber,secondNumber);
	//then
	expect(result[0][0]).toBe('2*2=4');
	expect(result[1][0]).toBe('2*3=6');

});

it('should be printMultiplyTable output',() =>{
	//given
	var firstNumber =2;
	var secondNumber=3;
	var result1 = generatemultiplyArray(firstNumber,secondNumber);
	//when
	var result = printMultiplyTable(result1);
	//then
	expect(result).toBe('2*2=4 \n2*3=6 3*3=9 \n');
	// expect(result[1][0]).toBe('2*3=6');

});