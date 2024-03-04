document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === 'user@example.com' && password === 'user@example.com') {
            // Successful login
            loginMessage.classList.add('hidden');
            alert('Login successful! Redirecting...');

            // Redirect to a dashboard or homepage
            window.location.href = 'index.html';
            const hide = document.querySelector('.right');
            hide.classList.add('hidden');
        } else {
            // Failed login
            loginMessage.textContent = 'Invalid email or password.';
            loginMessage.classList.remove('hidden');
        }
    });
});

const name = 'moloantoa johannes';



// forgot passsword

document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const resetMessage = document.getElementById('resetMessage');
    const enp = document.getElementById('enp');
    const fp = document.getElementById('fp');

    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const email = document.getElementById('email').value;
        forgotPasswordForm.reset();
        
        // Simulating a password reset request (replace with your actual logic)
        setTimeout(function() {
            resetMessage.innerHTML = 'A password reset link has been sent to ' + email;
            // resetMessage.classList.remove('hidden');
        }, 2000);
    });
});

const navlinks = document.querySelector('.navlinks');
const menuBtN = document.getElementById('menuBtn');
const menuIcon = document.getElementById('menuIcon');
const closeIcon= document.getElementById('closeIcon');

function memuVisible() {
    navlinks.className = 'flex flex-col gap-[10px] bg-blue-900 absolute text-white left-[5vw] rounded-xl top-[85px] py-4 px-12';
    navlinks.innerHTML = `  <a href="#" class="active">Home</a>
                            <a href="#" class="">Rooms</a>
                            <a href="#" class="">Pricing</a>
                            <a href="#" class="">About</a>
                            <a href="#" class="">Contact</a>`

    closeIcon.classList.remove('hidden');
    menuIcon.classList.add('hidden');
}

// function menuInVisible () {
//     navlinks.classList.add('hidden');
// }

menuBtN.cck()



console.log(window.innerWidth);
console.log('hi');
