//Make jQuery lose control of the $
$.noConflict();

jQuery(function($) {
  $('#user-form').on('submit', function(event) {
      
      var emailInput = $('#email').val()
      console.log(emailInput)
      
      for(count = 0; count < emailInput.length; count++){
          if (count == '@'){
              window.alert("looks good bro!");
          }
      }
      event.preventDefault();
  });
});

