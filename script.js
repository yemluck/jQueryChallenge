$(document).ready( onReady ) 

function onReady(){

    console.log('in onReady')

    $('h1:first').text('jQuery challenge 1')
    $('h2').parent().css('background-color', 'yellow')
    $('h2').parent().children().css('background-color',"green")



} // end function onReady