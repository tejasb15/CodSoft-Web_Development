document.addEventListener("DOMContentLoaded", function () {
    // Get all the navigation links
    const navLinks = document.querySelectorAll(".navbar a");

    // Add a click event listener to each link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Remove the "active" class from all links
            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });

            // Add the "active" class to the clicked link
            event.currentTarget.classList.add("active");
        });
    });
});


function toggleMenu(x) {
    x.classList.toggle("change");
    var navbar = document.getElementById("topnav");
    navbar.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function () {
    const arr = ["full stack web developer", "sql developer", "front end web developer", "python developer", "back end web developer"];
    const typed = document.getElementById("typing-text");
    let ti = 0;
    let ci = 0;

    function typeText() {
        if (ci < arr[ti].length) {
            typed.innerHTML += arr[ti][ci];
            ci++;
            setTimeout(typeText, 50); // Adjust the typing speed (in milliseconds)
        } else {
            // Text fully typed, reset and move to the next text
            setTimeout(eraseText, 1000); // Wait for 1 second before erasing
        }
    }

    function eraseText() {
        if (typed.innerHTML.length > 0) {
            typed.innerHTML = typed.innerHTML.slice(0, -1);
            setTimeout(eraseText, 25); // Adjust the erasing speed (in milliseconds)
        } else {
            // Text erased, move to the next text
            ti = (ti + 1) % arr.length;
            ci = 0;
            setTimeout(typeText, 500); // Wait for 0.5 seconds before typing the next text
        }
    }

    typeText(); // Start the typing effect
});


