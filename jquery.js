
$(document).ready(function() {

  $('img').click(function() {
    $(this).parent('div').toggleClass('state2');
  });

  $("button").click(function() {
    var head = $(this).parent().children('h1').text();

      $('ul#tripList').prepend('<li>' + head + '</li>');
      $("ul#tripList").children("li").click(function() {
          $(this).remove();
      });
  });



  $(".footer").click(function(){
    var div = $(".footer");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '2%', opacity: '0.4'}, "slow");
        div.animate({width: '100%', opacity: '0.8'}, "slow");

  });

});
