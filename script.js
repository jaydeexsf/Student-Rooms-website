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

function menuInVisible () {
    navlinks.classList.add('hidden');
    closeIcon.classList.add('hidden');
    menuIcon.classList.remove('hidden');
}

let leftValue = 0;

function moveElementsRight(pixels, interval) {
    const elements = document.querySelectorAll('.image-text');
    elements.forEach((element) => {
        let rightValue = 0;
        const moveRight = setInterval(() => {
            leftValue += pixels;
            element.style.transform = `translateX(${leftValue}px)`;
        }, interval);

        // Stop moving after a certain time
        setTimeout(() => {
            clearInterval(moveRight);
            leftValue = 0;
        }, 3000); 
    });
}


// Function to move elements to the left

// const elements = document.querySelectorAll('.image-text');

// function moveElementsLeft(pixels, interval) {
//     const elements = document.querySelectorAll('.image-text');
//     elements.forEach((element) => {
        
//         const moveLeft = setInterval(() => {
//             leftValue -= pixels;
//             element.style.transform = `translateX(${leftValue}px)`;
//         }, interval);

//         // Stop moving after a certain time
//         setTimeout(() => {
//             clearInterval(moveLeft);
//         }, 35000); // Change 5000 to the desired time in milliseconds
//     });
// }

// setTimeout(() => 
//     {moveElementsRight(1, 20)},
//      35000
// )

// setTimeout(() => {
//     leftValue = 0;
//     moveElementsRight(0, 0)
//     element.style.transform = `translateX(${leftValue}px)`;
//     moveElementsLeft(20, 2000)
// }, 41000);

// moveElementsLeft(20, 2000)

// // Your moveElementsLeft and moveElementsRight functions

// let hoverElement = document.querySelector('.image-e');
// let animationPaused = false;

// hoverElement.addEventListener('mouseenter', () => {
//     // Stop the animation when hovering
//     if (!animationPaused) {
//         clearInterval(leftValue);
//         clearInterval(leftValue);
//         animationPaused = true;
//         hoverElement.classList.add('hidden');
//     }
// });

// hoverElement.addEventListener('mouseleave', () => {

//     if (animationPaused) {
//         moveElementsLeft(1, 20);
//         moveElementsRight(1, 20);
//         animationPaused = false;
//     }
// });

const load = document.getElementById('load');
const sign =document.getElementById('signIn');

function bringLoading() {
    load.classList.remove('hidden');
    load.classList.add('z-10')

    setTimeout(() =>{
        load.classList.add('hidden')
        load.classList.add('transition-opacity');
        window.location.href = './pages/SignIn.html';
    }, 3000)
}

const cookies = document.getElementById('cookies');

cookies.addEventListener('load', () => {
    setTimeout(()=>{
    cookies.classList.remove('hidden');
    }
    ), 1000
})

