//Make jQuery lose control of the $
$.noConflict();

jQuery(function($) {
  $('#user-form').on('submit', function(event) {
      console.log('hello');
      $('#test').append('hello');
      
      var emailInput = $('#email').val()
      console.log(emailInput)
      
      for(count = 0; count < emailInput.length; count++){
          if (count == '@'){
              alert('looks good bro!')
          }
      }
      
      event.preventDefault();
  });
});

