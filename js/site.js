//Make jQuery lose control of the $
$.noConflict();

jQuery(function($) {
  $('#user-form').on('submit', function(event) {
      
    var emailInput = $('#email').val();
    console.log(emailInput);
    
    if($.trim($('#name' && '#email').val()) === '') {
      alert('Please fill out all fields');
    }
      
    event.preventDefault();
      
  });
});

