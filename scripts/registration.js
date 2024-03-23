function validateName(name) {
    const conds = [
        s => !/\s/.test(s),
        s => s.length >= 3
    ];
    return conds.every(cond => cond(name));
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validatePassword(pwd) {
    const conds = [
        s => /[A-Z]/.test(s),
        s => /[a-z]/.test(s),
        s => /\d/.test(s),
        s => !/\s/.test(s),
        s => s.length >= 8
    ];
    return conds.every(cond => cond(pwd));
}



function main(){
    const registrationBtn = document.getElementById("registration-btn");

    registrationBtn.addEventListener('click', function(event) {
        event.preventDefault();
        try {
            var name = document.querySelector('input[name="name"]').value;
            var email = document.querySelector('input[name="email"]').value;
            var password = document.querySelector('input[name="password"]').value;
            var confirmPassword = document.querySelector('input[name="confirm-password"]').value;
            var isValidPassword = validatePassword(password);
        } catch(err){
            console.log(err);
            alert(err);
        }

        var passwordsMatch = password === confirmPassword;
        
        if(!validateName(name)) {
            alert('The name must contain spaces and be at least 3 characters long.');
            return;
        }

        if (!validateEmail(email)){
            alert("Incorrect email input.");
            return;
        }

        if (!isValidPassword) {
            alert('The password must contain at least one uppercase letter, one lowercase letter, one number, no spaces and be at least 8 characters long.');
            return;
        } else if (!passwordsMatch) {
            alert('Passwords do not match.');
            return;
        }

        console.log('Ім\'я:', name);
        console.log('Email:', email);
        console.log('Пароль:', password);
        console.log('Підтвердження паролю:', confirmPassword);
        alert('Registration was successful!');
        // TODO: переробити виводу в консоль на роботу з бдшкою

        document.querySelector('input[name="name"]').value = "";
        document.querySelector('input[name="email"]').value = "";
        document.querySelector('input[name="password"]').value = "";
        document.querySelector('input[name="confirm-password"]').value = "";
    })
}

main();