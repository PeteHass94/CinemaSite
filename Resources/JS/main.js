$(document).on("scroll", function(){
  var element = document.getElementById("bumper");
  if
    ($(document).scrollTop() > 100){
    $("header").addClass("shrink");
  }
  if
    ($(document).scrollTop() > 150){
    $("nav").addClass("shrink");
    $(element).addClass("shrink");
  }
  if
    ($(document).scrollTop() < 130){
    $("nav").removeClass("shrink");
    $("header").removeClass("shrink");
    $(element).removeClass("shrink");
  }
});

$(function () {
    $('#joinModal').modal({
        keyboard: true,
        backdrop: "fixed",
        show: false,
    }).on('show', function () {
    });
    $(".joinClub").on('click', function () {
        debugger;
        $('#joinModal').modal('show');
    });
});
$(function () {
    $('#commentModal').modal({
        keyboard: true,
        backdrop: "fixed",
        show: false,
    }).on('show', function () {
    });
    $(".commentClub").on('click', function () {
        debugger;
        $('#commentModal').modal('show');
    });
});

$(document).ready(function(){
	var iFrameDOM = $("iframe#comments").contents();

	iFrameDOM.find("div.freebirdFormviewerViewFormBanner.freebirdHeaderMast").css("height", "6em");
});
