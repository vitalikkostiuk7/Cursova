
function main(){
    // Обробка паролю
    const btnLogin = document.getElementById("btn-login");

    btnLogin.addEventListener('click', function(event) {
        event.preventDefault();

        var emailOrPhone = document.querySelector('input[type="text"]').value;
        var password = document.querySelector('input[type="password"]').value;

        console.log('Email or Phone:', emailOrPhone);
        console.log('Password:', password); 
        // TODO: змінити вивід в консоль на роботу з бдшкою

        document.querySelector('input[type="text"]').value = "";
        document.querySelector('input[type="password"]').value = "";
    })
}

main();