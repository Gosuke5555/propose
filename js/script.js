$(function() {
  $('#form').submit(function(){
      $.ajax({
          url: $('#form').attr('action'),
          data: $('#form').serialize(),
          type: 'POST',
          dataType: 'xml',
          statusCode: {
              0: function() {
                window.location.href = "thanks.html";
              },
              200: function() {
                window.location.href = "thanks.html";
              }
          }
      });
      return false;
  });
});
