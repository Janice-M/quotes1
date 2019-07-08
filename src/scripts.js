$(document).ready(function(){

  var vote = 0;
  $("#up").click(function(){
    vote = vote + 1;
    $("#vote").val(vote);
  })

  $("#down").click(function(){
    vote = vote - 1;
    $("#vote").val(vote);
    alert(vote)
  })

});
