//Step 1: add click event handler with submit button

document.getElementById('button-submit').addEventListener('click',function(){
    //step - 2: get the email address inside the email field
    //Always remember to use .value to get the text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //step -3: get password
    // 3.a. set id on the html element
    // 3.b. get the element
    // 3.c. get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // DANGER: DO NOT VERIFY EMAIL PASSWORD on the client site
    //Step - 4: verify email and password and check whether valid user or not
    if (email === 'shameem@gmail.com' && password === 'secret'){
        console.log('valid user');
    }
    else{
        console.log('invalid user');
    }
})