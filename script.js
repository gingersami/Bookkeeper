function submitForm() {
    var userNameElement = document.getElementById('user-name');
    var userName = userNameElement.value;
    var userPassElement = document.getElementById('user-pass')
    var userPass = userPassElement.value;
    var repeatPassElement = document.getElementById('repeat-pass')
    var repeatPass = repeatPassElement.value
    var phoneNumberElemt = document.getElementById('phone-number');
    var phoneNumber = phoneNumberElemt.value;
    var userCountryElement = document.getElementById('country');
    var userCountry = userCountryElement.value;
    var li = document.createElement("li")
    var ul = document.getElementById('error-list')


    var validatePassLength = function () {
        if ((userPass.length <= 6)) {
            // document.getElementById('error-list')
            li.appendChild(document.createTextNode("Password should be longer than 6 characters"))
            ul.appendChild(li)

        } else {
            // document.getElementById('pass-div').innerHTML = ""
        }
    }
    var validatePassMatch = function () {
        if (userPass !== repeatPass) {
            li.appendChild(document.createTextNode("Passwords Should Match"))
            ul.appendChild(li)
            // document.getElementById('pass-div').innerHTML = "The 2 Password Should Match"
        } else {
            // document.getElementById('pass-div').innerHTML = ""
        }
    }
    var validatePhone = function () {
        if (phoneNumber.length > 15) {
            li.appendChild(document.createTextNode("Phone Number Should Contain less than 15 Characters"))
            ul.appendChild(li)
            // document.getElementById('phone-msg').innerHTML = "Phone Number Sould contain less than 15 characters"
        } else {
            // document.getElementById('phone-msg').innerHTML = ""
        }
    }
    var validateCountry = function () {
        if ((userCountry !== 'IL') && (userCountry !== 'US')) {
            li.appendChild(document.createTextNode("Israel and United"))
            ul.appendChild(li)
            // document.getElementById('country-msg').innerHTML = "We're Sorry, US and IL only"
        } else {
            // document.getElementById('country-msg').innerHTML = ""
        }
    }
    ul.innerHTML = ""
    validateCountry();
    validatePhone();
    validatePassMatch();
    validatePassLength();
}