function validate_playerForm(){
    var form = $("#JSsignUpForm");
    form.validate({
        rules:{
            JSFullName: {
                required: true,
                minlength: 2,
                maxlength: 30
            },
            JSAddress:{
                required: true,
                minlength: 5
            },
            JSPhoneNumber:{
                required: true,
                phone: true
            },
            JSCity:{
                required: true,
                minlength: 2
            },
            JSPostalCode:{
                required: true,
                minlength: 6,
                maxlength: 6
            },
            JSProvince:{
                required: true,
                minlength: 2
            },
            JSCountry:{
                required: true
            },
            DoB:{
                required: true
            },
            JScamp:{
                required: true
            }
        },
        messages:{
            JSFullName: {
                required: "Please fill out your full name",
                minlength: "Your name must be between 2-30 characters",
                maxlength: "Your name must be between 2-30 characters"
            },
            JSAddress:{
                required: "Please fill in your address",
                minlength: "Your address must be at least 5 characters"
            },
            JSPhoneNumber:{
                required: "Please fill in your phone number",
                phone: "Please fill in the proper format (519)123-1234"
            },
            JSCity:{
                required: "Please fill in your city",
                minlength: "Your city must be a minimum of 2 characters"
            },
            JSPostalCode:{
                required: "Please fill in your postal code",
                minlength: "Your postal code must be 6 characters long",
                maxlength: "Your postal code must be 6 characters long"
            },
            JSProvince:{
                required: "Please fill out you province",
                minlength: "Your province must be 2 characters long"
            },
            JSCountry:{
                required: "Please fill out your country"
            },
            DoB:{
                required: "Please enter your birth date"
            },
            JScamp:{
                required: "Please fill out what camp you are attending"
            }
        }
    });
    return form.valid();
}

function validate_review(){
    var form = $("#JSReviewInput");
    form.validate({
        rules:{
            JSreviewName:{
                required: true,
                minlength: 2
            },
            JSComment:{
                required: true,
                maxlength: 100
            },
            JSRate:{
                number: true
            }
        },
        messages:{
            JSreviewName:{
                required: "Please fill out your name",
                minlength: "Your name must be at least 2 characters"
            },
            JSComment:{
                required: "Please fill out your review",
                maxlength: "Your review must be under 100 characters"
            },
            JSRate:{
                number: "Please type in a number"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("phone",
function(value, element){
	var regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
	return this.optional(element) || regex.test(value);
	
}, "Please enter a valid phone number.");