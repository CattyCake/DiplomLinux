$(document).ready(function(){

var jqXHR;
var target = 1;
$(".response").mousedown(function(){target=0;  jqXHR.abort(); });
$(".response").mouseup(function(){target=1 });


 $(".but_search").click(function(){
  var search = $('#search').val();

  $.ajax({
   url: '/ajax',
   type: 'post',
   beforeSend: function(){
    // Show image container
    $("#loader").show();
   },
       success: function(response){
    $('.response').empty();
    $('.response').append(response.htmlresponse);
   },
   complete:function(data){
    // Hide image container
    $("#loader").hide();

   }
  });

 });


 setInterval(function() {
      var checkboxes = document.getElementsByClassName('checkbox');
  for (var index = 0; index < 1; index++) {
   if (checkboxes[index].checked == 0, 1 && target == 1) {
    jqXHR = $.ajax({
   url: '/ajax',
   type: 'post',
   beforeSend: function(){
    // Show image container
    $("#loader").show();
   },
       success: function(response){
    $('.response').empty();
    $('.response').append(response.htmlresponse);
   },
   complete:function(data){
    // Hide image container
    $("#loader").hide();

   }
  });
}}}, 5000);


$(document).on("click",".but_search", function(e){
     $.ajax({
   url: '/ajax',
   type: 'post',
       success: function(response){
    $('.response').empty();
    $('.response').append(response.htmlresponse);
         $.ajax({
   url: '/buttonback',
   type: 'post',

       success: function(response){
    $('.controls').empty();
    $('.controls').append(response.htmlresponse3);


   },
   complete:function(data){
    // Hide image container
    $("#loader").hide();

   }
  });


   },
  });

 });



});