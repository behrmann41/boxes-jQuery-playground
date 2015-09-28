$(document).ready(function(){
  alert('Document Ready!')
  //$('#secretBox').css('background-color', 'white').html("secret box!")
  //$('#row1 > div').removeClass().addClass('box boxType3')
  //$('#row4 > div:last').hide()
  //$('.boxType1').css('background-color', 'white')
  //$('#row2 :first, #row2 :eq(1)').removeClass()
  //$('div').not('#container').not('.row').not('#secretBox').css('width', '2px');
  // $('#container').on('click', function(){
  //   console.log(event.pageX, event.pageY)
  // })
  // $('.boxType1').append('<a href="www.galvanize.com">Galvanize</a>')
  // $('.boxType1').on('click', function(){
  //   event.preventDefault();
  //   alert("You can never leave this page!!!")
  // })
  // $('.box').on('click', function(){
  //   if($(this).children().length > 0){
  //     $(this).empty()
  //   } else {
  //     $(this).append('<img src="http://spenglercounseling.com/wp-content/uploads/2013/01/Cute-puppy.jpg" style="height: 100px; width: 100px;" />');
  //   }
  // })
  $('#container').on('click', function (){
    if (event.target === this) {
      $(this).css('background-color', 'limegreen');
    } else{
      $(event.target).css('background-color', 'white');
      $(this).css('background-color', 'black');
    }
  });
})
