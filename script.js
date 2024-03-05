document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(eventi) {
        eventi.preventDefault();

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
const menuIcon = document.getElementById('menuIcon');
const closeIcon= document.getElementById('closeIcon');

function memuVisible() {
   
    if (window.innerWidth <  1280) {
    navlinks.className = 'flex rightbtn flex-col gap-[10px] xl:flex xl:flex-row bg-blue-900 absolute xl:gap-[40px] text-white left-[5vw] rounded-xl xl:top-8 xl:left-[25%] top-[100px] py-[20px] px-8';
    // navlinks.innerHTML = `  <a href="#" class="active">Home</a>
    //                         <a href="#" class="">Rooms</a>
    //                         <a href="#" class="">Pricing</a>
    //                         <a href="#" class="">About</a>
    //                         <a href="#" class="">Contact</a>`

    closeIcon.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    } else {
        navlinks.className="navlinks hidden xl:flex gap-5 text-grey-100";
    }
}

const strictImg = document.getElementById('strictImg');

strictImg.onscroll(() => {
    strictImg.classList.add('move');
})

function menuInVisible () {
    navlinks.classList.add('hidden');
    closeIcon.classList.add('hidden');
    menuIcon.classList.remove('hidden');
}

console.log(window.innerWidth);
console.log('hi');
console.log(492/2)