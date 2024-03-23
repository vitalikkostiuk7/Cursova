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

        var name = document.querySelector('input[name="name"]').value;
        var email = document.querySelector('input[name="email"]').value;
        var password = document.querySelector('input[name="password"]').value;
        var confirmPassword = document.querySelector('input[name="confirm-password"]').value;
    
        var isValidPassword = validatePassword(password);
    
        var passwordsMatch = password === confirmPassword;
    
        if (!isValidPassword) {
            alert('Пароль повинен містити принаймні одну велику літеру, одну малу літеру, одну цифру, не містити пробілів і мати довжину не менше 8 символів.');
        } else if (!passwordsMatch) {
            alert('Паролі не співпадають.');
        } else {
            console.log('Ім\'я:', name);
            console.log('Email:', email);
            console.log('Пароль:', password);
            console.log('Підтвердження паролю:', confirmPassword);
            alert('Реєстрація пройшла успішно!');

            // TODO: переробити виводу в консоль на роботу з бдшкою

            document.querySelector('input[name="name"]').value = "";
            document.querySelector('input[name="email"]').value = "";
            document.querySelector('input[name="password"]').value = "";
            document.querySelector('input[name="confirm-password"]').value = "";
        }
    })
}

main();