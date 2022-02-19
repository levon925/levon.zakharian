$(document).ready(function(){
    const sendBtn = document.getElementById('send')
    
    $(sendBtn).on('click',function(){
        const email = $('input.e-mail').val()
        const message = $('input.message').val()

        $.ajax({
            method: "POST",
            url: "/php/mail.php",
            data: {email: email, message: message}
        })
            .done(function(msg){
                
            })
            $('input.e-mail').val('')
            $('input.message').val('')
            alert("Thank you! I'll contact you soon!")

    })
})