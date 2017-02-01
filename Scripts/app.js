// Author:Nathan Siu
//Date: 1/31/2017
//File Name: app.js
//File Description: This is the backend for the calculator UI
$(document).ready(function(){

    //variables
    var result =0;
    var oldInput =0;
    var operator = null;
    var currentInput = '0';
    displayScreen(result);
    

    //button click function
    $('.calcButton').on('click',function(){
        var value = $(this).html();
        console.log(value);

        //number validation
        if(!isNaN(value))
        {
            if(currentInput ==='0') currentInput=value;
            else currentInput = currentInput + value;
        }
        //operator validation
        else if(value ==='+' || value ==='-' || value==='/' || value==='*')
        {
            oldInput = parseFloat(currentInput);
            operator = value;
            currentInput=' ';
        }
        if(value === "AC")
        {
            result ='0';
            currentInput='0';
        }
        else if(value === '+/-')
        {
            currentInput=currentInput * -1;
        }
        else if(value === '%')
        {
            currentInput = currentInput/100;
        }
        else if(value ==='.')
        {
            currentInput += '.';
        }
        else if(value === '=')
        {
            currentInput = calculate(oldInput,currentInput,operator);
            operator =null;
        }
      
        //sending current input to the screen method
    displayScreen(currentInput);

    });


});

//display screen function
displayScreen = function(outputVal) {
  var outputVal = outputVal.toString();
  $('.screen').html(outputVal.substring(0, 10));
};

//calcuate function
calculate=function(num1,num2,operator)
{
    num1 =parseFloat(num1);
    num2 = parseFloat(num2);

    console.log(num1,num2,operator);
    if(operator ==='+')
    {
        return num1+num2;
    }
    if(operator ==='-')
    {
        return num1-num2;
    }
    if(operator ==='/')
    {
        return num1/num2;
    }
    if(operator ==='*')
    {
        return num1*num2;
    }
}

