$(document).ready(function(){
$('#testBtn').click(function(){
//alert('hello guys');
$('.box').fadeToggle(3000);
});
$('.box').mouseenter(function() {
    $(this).css({"background-color":"red"});
})
$('.box').mouseleave(function() {
    $(this).css({"background-color":"green"});
});
$('#name').blur(function() {
    var userInput =$(this).val();
    if(userInput.length <3){
      $('.error').show()
    }
})
});