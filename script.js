const navLinks = document.querySelectorAll("#navbar a");
const sections = document.querySelectorAll(".section");

function highlightSection(id) {
  // Remove active class from all links and sections
  navLinks.forEach(link => link.classList.remove("active"));
  sections.forEach(section => section.classList.remove("active"));

  // Add active class to the clicked menu item
  document.querySelector(`a[href="#${id}"]`).classList.add("active");

  // Add active class to the corresponding section
  const activeSection = document.getElementById(id);
  activeSection.classList.add("active");
}

// Event listener for each menu item
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1); // Get the target section ID
    highlightSection(targetId);

    // Smooth scroll to the section with offset adjustment
    const targetElement = document.getElementById(targetId);

    // Calculate the top position of the target element and subtract the navbar height
    const navbarHeight = document.getElementById("navbar").offsetHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    // Scroll smoothly to the target position with full section visibility
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Initialize the page by showing the "About" section as default
highlightSection('about');
