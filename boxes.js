$(document).ready(function(){
  alert('Document Ready!')
  //$('#secretBox').css('background-color', 'white').html("secret box!")
  //$('#row1 > div').removeClass().addClass('box boxType3')
  //$('#row4 > div:last').hide()
  //$('.boxType1').css('background-color', 'white')
  //$('#row2 :first, #row2 :eq(1)').removeClass()
  $('div').not('#container').not('.row').not('#secretBox').css('width', '2px');
})