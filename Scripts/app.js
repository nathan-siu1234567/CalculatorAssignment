$(document).ready(function(){

    var result =0;
    var oldInput =0;
    var operator = null;
    var currentInput =0;
    displayScreen(result);

    //number click function
    $('.calcButton').on('click',function(){
        var value = $(this).html();
        console.log(value);
        if(value === "AC")
        {
            result ='0';
            currentInput='0';
        }
        else if(value === '+/-')
        {
            currentInput * -1;
        }
        else if(value === '%')
        {
            currentInput = currentInput/100;
        }
        else if(!isNaN(value))
        {
            if(currentInput ==='0') currentInput=value;
            else currentInput = currentInput + value;
        }
        
    displayScreen(currentInput);

    });


});

//update screen function
displayScreen = function(outputVal) {
  var outputVal = outputVal.toString();
  $('.screen').html(outputVal.substring(0, 10));
};

