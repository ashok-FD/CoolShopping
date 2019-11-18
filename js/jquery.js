$(document).ready(function() {
  $("#newOne").click(function() {
    $("#u1").hide();
    $("#u2").show();
  });
  $("#newOne2").click(function() {
    $("#u1").show();
    $("#u2").hide();
  });
});
$(document).ready(function() {
  $("#flowerImage1").click(function() {
    var image = $(this).attr("src");
    $("#flowerBigImage").attr("src", image);
  });
  $("#flowerImage2").click(function() {
    var image = $(this).attr("src");
    $("#flowerBigImage").attr("src", image);
  });

  $("#flowerImage3").click(function() {
    var image = $(this).attr("src");
    $("#flowerBigImage").attr("src", image);
  });
});

$(document).ready(function(){
    $("#productLink").click(function(){
        $(".whiteBar").hide();
        $(".whiteBar2").hide();
        $(".whiteBar3").hide();
        $("#carousel").hide();
        $("#banner_1").hide();
        $("#banner_2").hide();
        $("#banner_3").hide();
        $("#Gallery").hide();
        $("#productPage").show(2000);
    });

    $("#OrderLink").click(function(){
      $("#productPage").hide();
      $("#productOrder").show(2000);
    });

    $("#placeOrderBtn").click(function(){
      $("#productOrder").hide();
      $("#AddressOrder").show(2000);
    });
    $("#returnBtn").click(function(){
      $(".whiteBar").show(1000);
      $(".whiteBar2").show(1000);
      $(".whiteBar3").show(1000);
      $("#carousel").show(1000);
      $("#banner_1").show(500);
      $("#banner_2").show(1000);
      $("#banner_3").show(2000);
      $("#Gallery").show(2500);
      $("#productPage").hide();
      $("#productOrder").hide();
      $("#AddressOrder").hide();
    });
});

