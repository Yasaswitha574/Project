 $(document).ready(function(){
      $("#signupForm").on("submit",function(e){
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            url : "register.php",
            type: "POST",
            cache:false,
            data: formData,
            success:function(response){
              data = JSON.parse(response);
              if (data.error == "0") {
                $("#signupForm").trigger("reset");
                $('.message-message').replaceWith('<div class="alert alert-success alert-dismissible" role="alert">'
                 + data.message + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
              }else if(data.error == "1") {
               $('.message-message').replaceWith('<div class="alert alert-danger alert-dismissible" role="alert">'
                 + data.message + ' <button type="button" class="close" data-dismiss="alert">&times;</button></div>');
              }
            }
        });
      });
  });
