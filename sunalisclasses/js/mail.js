$(document).ready(function () {


    $('.contact-form-button').click(function () {


        event.preventDefault();
        var formData = {
            'name': $('#contact-name').val(),
            'child': $('#contact-child').val(),
            'standard': $('#contact-standard').val(),
            'message': $('#contact-message').val()
        };


        $.ajax({
                type: 'GET',
                url: 'http://sunalisclasses.com/mail.php',
                data: formData,
                dataType: 'json',
                encode: true,

                beforeSend: function () {
                    /*DO SOMETHING BEFOE SENDING*/
                }
            })
            .done(function (data) {
                console.log(data);
                if (data == true) {
                    alert("Email has been sent to Sunali's Classes Information Desk");
                    $('#contact-name').val('');
                    $('#contact-child').val('');
                    $('#contact-message').val('');
                }
                console.log("Done");

            });


    });

})
