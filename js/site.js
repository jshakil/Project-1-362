//Make jQuery lose control of the $
$.noConflict();

jQuery(function($) {
  $('#user-form').on('submit', function(event) {
      
    var emailInput = $('#email').val()
    console.log(emailInput)
      
    event.preventDefault();
      
  });
});

