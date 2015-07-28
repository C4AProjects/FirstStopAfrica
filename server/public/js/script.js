jQuery(document).ready(function($) {
//initializa toastr options
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
  
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
                if (data.accepted && data.accepted === true){
                    toastr.success("Thank for your subscribing. We will contact you once we go live.");
                    $('.form-group').addClass('has-success');
                    $('.subscription-message').html('You have been successfully registered to get updates from FirStop').fadeIn(1000);
                    
                }else if (data.exists && data.exists === true){
                    toastr.warning('Your email is already added.');
                    $('.form-group').addClass('has-warning');
                    $('.subscription-message').html('Your email is already added.').fadeIn(1000);
                    
                } else {
                    toastr.warning('Incorrect email. Please make sure this is a working email address');
                    $('.form-group').addClass('has-error');
                    $('.subscription-message').html('Incorrect email. Please make sure this is a working email address').fadeIn(1000);
                    
                }
                /* Note that reset different from clear
                 * reset : set default values
                 * clear : set values to empty string
                 * @see http://jquery-howto.blogspot.com/2013/08/jquery-form-reset.html
                 */
                $('#subscription-form')[0].reset();
            },
            dataType: "json"
        });
    }else {
        //show validation error
        toastr.error('Incorrect email. Please enter valid email address.');
        $('.form-group').addClass('has-error');
        $('.subscription-message').html('Incorrect email. Please enter valid email address.').fadeIn(1000);
        
    }
});

});




 
