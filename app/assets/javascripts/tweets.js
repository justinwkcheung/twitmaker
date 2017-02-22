// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).on('ready', function() {

  $('#new_tweet').on('submit', function(event){
    event.preventDefault();
    console.log("prevented default");

    $.ajax({
      url: $(this).attr('action'),
      method: $(this).attr('method'),
      data: $(this).serialize(),
      // dataType: 'json'
    }).done(function(responseData) {
      console.log("Came back successfully");
      console.log(responseData);
      $('.tweets').prepend(responseData);
      $('#create-tweet').prop('disabled', false);

    }).fail(function(responseData) {
      console.log("failed");

    }).always(function(responseData) {
      console.log("this always should happen");

    });

  });




});
