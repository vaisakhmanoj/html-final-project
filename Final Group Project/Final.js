// header.js

// Execute the code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create the header content
    const header = document.createElement('header');
    header.innerHTML = `
        <div class="logo-container">
            <img src="logo-image.png" alt="Company Logo">
        </div>
        <nav>
            <ul>
                <li><a href="Home.html">Home</a></li>
                <li><a href="product.html">Product</a></li>
                <li><a href="About us.html">About Us</a></li>
                <li><a href="Contact.html">Contact Us</a></li>
            </ul>
        </nav>
    `;

    // Append the header to the body
    document.body.prepend(header);
});

// footer.js

// Execute the code when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create the footer content
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; 2023 Your Company. All rights reserved.</p>
    `;

    // Append the footer to the body
    document.body.appendChild(footer);
});

// Add scroll event listener
window.addEventListener("scroll", function() {
    // Get the vertical scroll position
    var scrollY = window.scrollY;

    // Check if the user has scrolled beyond a certain point (e.g., 200 pixels from the top)
    if (scrollY > 200) {
        // Add a class to the body when scrolled
        document.body.classList.add("scrolled");
    } else {
        // Remove the class when not scrolled
        document.body.classList.remove("scrolled");
    }
});



