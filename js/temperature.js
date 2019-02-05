/* Button flag variables alert when buttons are clicked */

var buttonC1 = false;
var buttonC2 = false;
var buttonF1 = false;
var buttonF2 = false;
var buttonK1 = false;
var buttonK2 = false;
var buttonR1 = false;
var buttonR2 = false;

var buttonA1 = buttonA2 = buttonB1 = buttonB2 = buttonP1 = buttonP2 = buttonT1 = buttonT2 = false;


/* Multiple functions are used on click to set flags */

document.getElementById("Torr1").onclick = function(){

buttonT1 = true;
buttonA1 = buttonB1 = buttonP1 = false;
document.getElementById("btn2").innerHTML = "Torr";

/* The rest of flags are set to false everytime one is selected in order to avoid conflict when using the calculator multiple times */

};

document.getElementById("Torr2").onclick = function(){

buttonT2 = true;
buttonA2 = buttonB2 = buttonP2 = false;
document.getElementById("convert2").innerHTML = "Convert to: Torr";

};

document.getElementById("Pascal1").onclick = function(){

buttonP1 = true;
buttonA1 = buttonB1 = buttonT1 = false;
document.getElementById("btn2").innerHTML = "Pascal";

};

document.getElementById("Pascal2").onclick = function(){

buttonP2 = true;
buttonA2 = buttonB2 = buttonT2 = false;
document.getElementById("convert2").innerHTML = "Convert to: Pascal";
};

document.getElementById("Bar1").onclick = function(){

buttonB1 = true;
buttonA1 = buttonP1 = buttonT1 = false;
document.getElementById("btn2").innerHTML = "Bar";
};

document.getElementById("Bar2").onclick = function(){

buttonB2 = true;
buttonA2 = buttonP2 = buttonT2 = false;
document.getElementById("convert2").innerHTML = "Convert to: Bar";
};

document.getElementById("Atmosphere1").onclick = function(){

buttonA1 = true;
buttonB1 = buttonP1 = buttonT1 = false;
document.getElementById("btn2").innerHTML = "Atmosphere";
};

document.getElementById("Atmosphere2").onclick = function(){

buttonA2 = true;
buttonB2 = buttonP2 = buttonT2 = false;
document.getElementById("convert2").innerHTML = "Convert to: Atmosphere";
};






document.getElementById("celcius1").onclick = function(){

buttonC1 = true;
buttonF1 = buttonK1 = buttonR1 = false;
document.getElementById("btn1").innerHTML = "Celcius";
};

document.getElementById("celcius2").onclick = function(){
buttonC2 = true;
buttonF2 = buttonK2 = buttonR2 = false;
document.getElementById("convert").innerHTML = "Convert to: Celcius";
};

document.getElementById("Fahrenheit1").onclick = function(){
buttonF1 = true;
buttonC1 = buttonK1 = buttonR1 = false;
document.getElementById("btn1").innerHTML = "Fahrenheit";
};

document.getElementById("Fahrenheit2").onclick = function(){

buttonF2 = true;
buttonC2 = buttonK2 = buttonR2 = false;
document.getElementById("convert").innerHTML = "Convert to: Fahrenheit";
};

document.getElementById("kelvin1").onclick = function(){

buttonK1 = true;
buttonC1 = buttonF1 = buttonR1 = false;
document.getElementById("btn1").innerHTML = "Kelvin";

};

document.getElementById("kelvin2").onclick = function(){

buttonK2 = true;
buttonC2 = buttonF2 = buttonR2 = false;
document.getElementById("convert").innerHTML = "Convert to: Kelvin";

};

document.getElementById("rankine1").onclick = function(){

buttonR1 = true;
buttonC1 = buttonF1 = buttonK1 = false;
document.getElementById("btn1").innerHTML = "Rankine";

};

document.getElementById("rankine2").onclick = function(){

buttonR2 = true;
buttonC2 = buttonF2 = buttonK2 = false;
document.getElementById("convert").innerHTML = "Convert to: Rankine";

};

/* Check function procces temperature data if input is correct and alerts the user if it isnt */
/* When two sets of flags are true the function will procces input and format output with the function format*/

function check(){
/* Is NaN method is used to check that thee input is an integer */

	document.getElementById("btn1").innerHTML = "Select Unit";
	document.getElementById("convert").innerHTML = "Convert to:";



	var a = document.getElementById("temperature").value;
	var temp = parseFloat(a, 10);
	
	if(buttonC1 == false && buttonF1 == false && buttonR1== false && buttonK1==false)
	alert("Please choose base unit");
	else if(buttonC2 == false && buttonF2 == false && buttonR2== false && buttonK2==false)
	alert("Please choose unit of conversion");
	else if(isNaN(temp))
	alert("Invalid input");
	else{
	
	if(buttonC1 && buttonF2)
   {
	temp = (temp*9/5) + 32;
	temp = format(temp);
	document.getElementById("result").value = temp+ " \xb0F";
   }

   if(buttonF1 && buttonC2)
   {
	temp = (temp - 32)*(5/9);
	temp = format(temp);
	document.getElementById("result").value = temp+ " \xb0C";
   }
   
   if(buttonF1 && buttonK2)
   {
	temp = (temp + 459.67)*(5/9);
	temp = format(temp);
	document.getElementById("result").value = temp+ " K";
   }
   
   if(buttonF1 && buttonR2)
   {
	temp = temp + 459.67;
	temp = format(temp);
	document.getElementById("result").value = temp+ " \xb0R";
   }
   
   
   if(buttonC1 && buttonK2)
   {
	temp = temp + 273.15;
	temp = format(temp);
	document.getElementById("result").value = temp + " K";
   }
   
   if(buttonK1 && buttonC2)
   {
	temp = temp - 273.15;
	temp = format(temp);
	document.getElementById("result").value = temp + " K";
   }
   
   if(buttonK1 && buttonF2)
   {
	temp = (temp*9/5) - 459.67;
	temp = format(temp);
	document.getElementById("result").value = temp + " \xb0F";
   }
   
   if(buttonK1 && buttonR2)
   {
	temp = temp*9/5;
	temp = format(temp);
	document.getElementById("result").value = temp + " \xb0R";
   }
   
   
   if(buttonC1 && buttonR2)
   {
	temp = (273.15 + temp)*(9/5);
	temp = format(temp);
	document.getElementById("result").value = temp + " \xb0R";
   }
   
   if(buttonR1 && buttonC2)
   {
	temp = (temp - 491.67)*(5/9);
	temp = format(temp);
	document.getElementById("result").value = temp + " \xb0C";
   }
   
   if(buttonR1 && buttonF2)
   {
	temp = temp - 459.67;
	temp = format(temp);
	document.getElementById("result").value = temp + " \xb0F";
   }
   
   if(buttonR1 && buttonK2)
   {
	temp = temp*5/9;
	temp = format(temp);
	document.getElementById("result").value = temp + " K";
   }

   
   if(buttonC1 && buttonC2)
	{
	temp = format(temp);
	document.getElementById("result").value = temp+ " \xb0C";
	}

   if(buttonF1 && buttonF2)
	{
	temp = format(temp);
	document.getElementById("result").value = temp+ " \xb0F";
	}
   
   if(buttonK1 && buttonK2)
	{
	temp = format(temp);
	document.getElementById("result").value = temp+ " \K";
	}
   
   if(buttonR1 && buttonR2)
	{
	temp = format(temp);
	document.getElementById("result").value = temp+ " \xb0R";
	}

	}
};

/* Check2 function procces preasure data if input is correct and alerts the user if it isnt */
/* When two sets of flags are true the function will procces input and format output with the function format*/
function check2(){

	document.getElementById("btn2").innerHTML = "Select Unit";
	document.getElementById("convert2").innerHTML = "Convert to:";
	var a = document.getElementById("Preasure").value;
	var temp = parseFloat(a, 10);
	
	if(buttonA1 == false && buttonB1 == false && buttonP1== false && buttonT1==false)
	alert("Please choose base unit");
	else if(buttonA2 == false && buttonB2 == false && buttonP2== false && buttonT2==false)
	alert("Please choose unit of conversion");
	else if(isNaN(temp))
	alert("Invalid input");
	else{
	
	if(buttonA1 && buttonA2)
	{
	temp = format(temp);
	document.getElementById("result2").value = temp+ " ATM";
	}
	
	if(buttonA1 && buttonB2)
	{
	temp = temp*1.01325;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Ba";
	}
	
	if(buttonA1 && buttonP2)
	{
	temp = temp*101325;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Pa";
	}
	
	if(buttonA1 && buttonT2)
	{
	temp = temp*760;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Torr";
	}
	
	if(buttonB1 && buttonB2)
	{
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Ba";
	}
	
	if(buttonB1 && buttonA2)
	{
	temp = temp*0.986923;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " ATM";
	}
	
	if(buttonB1 && buttonP2)
	{
	temp = temp*100000;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Pa";
	}
	
	if(buttonB1 && buttonT2)
	{
	temp = temp*750.062;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Torr";
	}
	
	if(buttonP1 && buttonP2)
	{
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Pa";
	}
	
	if(buttonP1 && buttonA2)
	{
	temp = temp/101325;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " ATM";
	}
	
	if(buttonP1 && buttonB2)
	{
	temp = temp/100000;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Ba";
	}
	
	if(buttonP1 && buttonT2)
	{
	temp = temp/133.322;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Torr";
	}
	
	if(buttonT1 && buttonT2)
	{
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Torr";
	}
	
	if(buttonT1 && buttonA2)
	{
	temp = temp/760;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " ATM";
	}
	
	if(buttonT1 && buttonB2)
	{
	temp = temp/750.062;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Ba";
	}
	
	if(buttonT1 && buttonP2)
	{
	temp = temp*133.322;
	temp = format(temp);
	document.getElementById("result2").value = temp+ " Pa";
	}
	
	}
};
/* Check3 function procces temperature and preasure data if input is correct and alerts the user if it isnt */
function check3(){
	
	var a = document.getElementById("inputP1").value;
	var b = document.getElementById("inputT1").value;
	var c = document.getElementById("inputP2").value;
	var d = document.getElementById("inputT2").value;
	
	a = parseFloat(a, 10);
	b = parseFloat(b, 10);
	c = parseFloat(c, 10);
	d = parseFloat(d, 10);
	
/* When a variable is not an integer the counter gets increased by one and that variable gets set to true*/
/* Variables that are set to true are considered the variable to be solve for in the equation*/

	var p1, p2, t1, t2 = false;
	var solution = 0;
	
	var temp = 0;
	
	if(isNaN(a))
	{
		temp++;
		p1 = true;
	}
	if(isNaN(b))
	{
		temp++;
		t1 = true;
	}
	if(isNaN(c))
	{
		temp++;
		p2 = true;
	}
	if(isNaN(d))
	{
		temp++;
		t2 = true;
	}

	
	
/* If the counter temp is less than one, it means that the user didnt leave a blank variable to be solved for*/
/* If the counter temp is larger than one, it means that too many fields have been left blank*/


	if(temp < 1)
		alert("Please leave the variable you wish to solve for, empty");
	else if(temp>1)
		alert("Input variable missing");
	else if(p1){
		solution = c*(b/d);
		solution = format(solution);
		document.getElementById("result3").value = "P1 = "+solution;
	}
	else if(p2){
		solution = a*(d/b);
		solution = format(solution);
		document.getElementById("result3").value = "P2 = "+solution;
	}
	else if(t1){
		solution = d*(a/c);
		solution = format(solution);
		document.getElementById("result3").value = "T1 = "+solution;
	}
	else{
		solution = b*(c/a);
		solution = format(solution);
		document.getElementById("result3").value = "T2 = "+solution;
	}
	
	
};

/* format function takes input from the user and determines the type of formating needed*/

function format(x){
	if(x < 0.0001 || x > 9999)
		x = x.toExponential(3);
	else
		x = x.toFixed(3);
	
	return x;
};

/* when the convert button is pressed the specific function gets called*/


document.getElementById("convert").onclick = function() {

	check();
   
   
};
	
document.getElementById("convert2").onclick = function() {

	check2();
   
   
};	

document.getElementById("convert3").onclick = function() {

	check3();
   
   
};	

