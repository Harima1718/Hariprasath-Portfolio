$(document).ready(function() {
    $("#signup").validate({
        rules:{
            fname:{
                required: true,
                minlength: 5,
            },
            lname:{
                required: true,
                minlength: 5,
            },
            mobile:{
                required: true,
                minlength: 10,
            },
            password:{
                required: true,
                minlength: 8,
            },
            day:{
                required:true, 
            },
            month:{
                required:true
            },
            year:{
                required:true,
            },
            gender:{
                required:true,
            }
        },
        messages:{
            fname:{
                required:"Please enter the first name",
            }
        }
})
});