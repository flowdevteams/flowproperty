gsap.from("#navbar", { duration: 1.5, ease: "bounce.out", y: '-100%', });
// dark mode script start -------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Select the required elements
  const toggle = document.getElementById('darkModeToggle');
  const html = document.documentElement;
  const iconSun = document.getElementById('iconSun');
  const iconMoon = document.getElementById('iconMoon');

  // Check the stored theme in localStorage and apply it
  if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark'); 
  } else {
      html.classList.remove('dark'); 
  }

  // Function to update the toggle icon based on the current theme
  const updateIcon = () => {
      if (html.classList.contains('dark')) {
          iconSun.classList.remove('hidden'); 
          iconMoon.classList.add('hidden');   
      } else {
          iconSun.classList.add('hidden');    
          iconMoon.classList.remove('hidden');
      }
  };

  // Run the icon update function on page load
  updateIcon();

  // Event listener for dark mode toggle
  toggle.addEventListener('click', () => {
      if (html.classList.contains('dark')) {
          html.classList.remove('dark'); 
          localStorage.setItem('theme', 'light'); 
      } else {
          html.classList.add('dark');
          localStorage.setItem('theme', 'dark'); 
      }
      updateIcon(); 
  });

  console.log("Dark mode script initialized successfully.");
});
// dark mode script end -------------------------------------------


//  mobile menu script start -------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Select the hamburger button and the menu
  const button = document.getElementById("hamburger");
  const menu = document.getElementById("nav-menu");

  if (button && menu) {
      button.addEventListener("click", function () {
          menu.classList.toggle("hidden"); 
          const expanded = button.getAttribute("aria-expanded") === "true";
          button.setAttribute("aria-expanded", !expanded); 
      });
  } else {
      console.error("Hamburger menu or navigation menu not found.");
  }

  // Function to toggle dropdowns
  window.toggleDropdown = function (dropdownId) {
      const dropdown = document.getElementById(dropdownId);
      if (dropdown) {
          dropdown.classList.toggle("hidden"); 
      } else {
          console.error(`Dropdown with ID "${dropdownId}" not found.`);
      }
  };

  console.log("Mobile menu script initialized successfully.");
});
//  mobile menu script end -------------------------------------------

// Active link highlighter script start -------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links inside <nav>
  const links = document.querySelectorAll("nav a");

  // Get the current page URL
  const currentUrl = window.location.href;

  links.forEach((link) => {
      // Check if the link's href matches the current URL
      if (currentUrl.includes(link.href)) {
          link.classList.add("text-teal-600", "after:scale-x-100");
      } else {
          link.classList.remove("text-teal-600", "after:scale-x-100");
      }
  });

  console.log("Active link highlighter initialized.");
});
// Active link highlighter script end -------------------------------------------

// Animation Happy Client Start --------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    AOS.init();

    function animateCounter(element, endValue) {
        let startValue = 0;
        const duration = 2000;
        const stepTime = 50;
        const stepValue = Math.ceil(endValue / (duration / stepTime));

        const timer = setInterval(() => {
            startValue += stepValue;
            if (startValue >= endValue) {
                startValue = endValue;
                clearInterval(timer);
            }
            element.textContent = startValue;
        }, stepTime);
    }

    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const startCountersOnScroll = () => {
        document.querySelectorAll(".counter").forEach((el) => {
            if (isElementInViewport(el) && !el.hasAttribute("data-animated")) {
                const endValue = parseInt(el.getAttribute("data-end"), 10);
                if (endValue) {
                    animateCounter(el, endValue);
                    el.setAttribute("data-animated", "true");
                }
            }
        });
    };

    window.addEventListener("scroll", startCountersOnScroll);
    window.addEventListener("load", startCountersOnScroll);
});
// JavaScript to add 'active' class to navbar links
document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");

    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
            pageYOffset >= sectionTop - 60 &&
            pageYOffset < sectionTop + sectionHeight - 60
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});
// Animation Happy Client End --------------------------------------------------
// Smooth Scroll to Target Section on Click Start ----------------------------------
document.querySelectorAll(".scroll-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 10);
        }
    });
});
// Smooth Scroll to Target Section on Click End -----------------------------------------
