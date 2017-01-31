$(document).ready(function(){

    var result =0;
    var oldEntry =0;
    var operator = null;
    var currentEntry =0;
    //displayScreen(result);

    //number click function
    $('.numberButton').on('click',function(){
        var value = $(this).html();
        console.log(value);

        if(currentEntry === '0')
        {
            currentEntry = value;
        }
        displayScreen(currentEntry);

    });


});
//update screen function
displayScreen = function(outputVal) {
  var outputVal = outputVal.toString();
  $('.screen').html(outputVal.substring(0, 10));
};
