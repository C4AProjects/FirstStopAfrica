 jQuery(document).ready(function($) {
 
  
// send data via ajax
$('#subscription-form').submit( function(event){
    event.preventDefault();
    console.log('form submitted');
    submitted_email = $('#email').val();
    var re = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    if (re.test(submitted_email)){
        d = {"email": submitted_email};
        console.log('sent data'+d.email);
        $.ajax({
            type: "POST",
            url: '/subscribe',
            data: d,
            success: function(data){
                console.log(data);
                if (data.accepted === true){
                    
                    $('.subscription-success').html('You have been successfully registered to get updates from FirStop').fadeIn(1000);
                    $('.subscription-error').fadeOut(500); 
                }else {
                    $('.form-group').addClass('has-error');
                    $('.subscription-error').html('Incorrect email. Please make sure this is a working email address').fadeIn(1000);
                    $('.subscription-success').fadeOut(500);
                }
            },
            dataType: "json"
        });
    }else {
        //show validation error
        $('.form-group').addClass('has-error');
        $('.subscription-error').html('Incorrect email. Please enter valid email address').fadeIn(1000);
        $('.subscription-success').fadeOut(500);
    }
});

});




 
