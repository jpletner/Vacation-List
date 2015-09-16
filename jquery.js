$(document).ready(function() {

$(".paris").click(function() {
    $('#parisInfo').removeClass('hidden');
    $("#parisInfo").slideToggle();
});

$(".nyc").click(function() {
    $('#nycInfo').removeClass('hidden');
    $("#nycInfo").slideToggle();
});

$(".rome").click(function() {
    $('#romeInfo').removeClass('hidden');
    $("#romeInfo").slideToggle();
});

$(".footer").click(function(){
  var div = $(".footer");
      div.animate({height: '300px', opacity: '0.4'}, "slow");
      div.animate({width: '300px', opacity: '0.8'}, "slow");
      div.animate({height: '5%', opacity: '0.4'}, "slow");
      div.animate({width: '100%', opacity: '0.8'}, "slow");

});

});
