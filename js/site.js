//Make jQuery lose control of the $
$.noConflict();

jQuery(function($) {
  $('#user-form').on('submit', function(event) {
      console.log('hello');
      $('#test').append('hello');
  })
});
