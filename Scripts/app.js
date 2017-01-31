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
    if(!isNaN(value))
    {
        if(currentInput === '0')
        {
            currentInput=value;
            
        }
        else
        {
            currentInput + value;
        }
    }

        
    displayScreen(currentInput);

    });


});

//update screen function
displayScreen = function(outputVal) {
  var outputVal = outputVal.toString();
  $('.screen').html(outputVal.substring(0, 10));
};

