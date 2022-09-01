$(document).ready(function(){
      $("#loginForm").on("submit", function(e){
        e.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val();

        $.ajax({
            url : "login.php",
            type:"POST",
            cache:false,
            data:{email:email,password:password},
            success:function(response){
              if(response == '1') {
                window.location.replace("profile.php");
              }else if(response=='0'){
                $(".show-message").show();
                $(".ajax-message").text('Email or Password is Invalid');
              }
            }
        });
      });
  });
