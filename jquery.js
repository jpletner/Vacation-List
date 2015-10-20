
$(document).ready(function() {

//on toggle click of image, details of place are displayed/removed    
  $('img').click(function() {
    $(this).parent('div').toggleClass('state2');
  });

 //add name of place to sidebar list when 'Add to Trips' button is selected   
  $("button").click(function() {
    var head = $(this).parent().children('h1').text();
      $('ul#tripList').prepend(" " + '<li>' + head + " |  "+ '</li>');
      $("ul#tripList").children("li").click(function() {
          $(this).remove(); //on click of list item, remove from list
      });
  });

//animated footer (for fun)
  $(".footer").click(function(){
    var div = $(".footer");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '2%', opacity: '0.4'}, "slow");
        div.animate({width: '100%', opacity: '0.8'}, "slow");

  });

});
