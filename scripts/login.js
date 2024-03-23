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
    const btnLogin = document.getElementById("btn-login");

    btnLogin.addEventListener('click', function(event) {
        event.preventDefault();
        var email = document.querySelector('input[type="text"]').value;
        var password = document.querySelector('input[type="password"]').value;

        if (!validateEmail(email) || !validatePassword(password)){
            alert("Incorrect input.");
            return;
        }

        console.log('Email:', email);
        console.log('Password:', password);

        alert('Реєстрація пройшла успішно!');
        // TODO: змінити вивід в консоль на роботу з бдшкою

        document.querySelector('input[type="text"]').value = "";
        document.querySelector('input[type="password"]').value = "";
    })
}

main();