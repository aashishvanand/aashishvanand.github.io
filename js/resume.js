(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

//image viewer

document.addEventListener("DOMContentLoaded", function() {
  // Get the modal
  var modal = document.getElementById("myModal");
  if (!modal) return; // Exit if modal not found

  // Get the <span> element that closes the modal
  var spans = document.getElementsByClassName("close");
  var span = spans.length > 0 ? spans[0] : null;
  if (!span) return; // Exit if close span not found

  // Get all list items that should open the modal
  var imgOpeners = document.querySelectorAll(".img-opener");

  // The image and caption in the modal
  var modalImg = document.getElementById("img01");
  if (!modalImg) return; // Exit if img01 not found
  var captionText = document.getElementById("caption");
  if (!captionText) return; // Exit if caption not found

  // Attach click event to each list item
  imgOpeners.forEach(function(item) {
    item.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.getAttribute("data-img-src"); // Set src to the data-img-src attribute
      captionText.innerHTML = this.textContent; // Optional: Use the list item's text as the caption
    });
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };

  // Close the modal if the user clicks anywhere outside of the modal content
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});


// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');

  themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      
      if (document.body.classList.contains('dark-theme')) {
          // Apply the dark theme
          document.body.classList.add('bg-dark', 'text-white');
          document.querySelectorAll('.card').forEach(card => card.classList.add('bg-dark', 'text-white'));
          // Add more elements as needed
      } else {
          // Revert to the light theme
          document.body.classList.remove('bg-dark', 'text-white');
          document.querySelectorAll('.card').forEach(card => card.classList.remove('bg-dark', 'text-white'));
          // Add more elements as needed
      }
  });
});


const updateIcons = () => {
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  const sunIcon = themeToggleBtn.querySelector('.fa-sun');
  const moonIcon = themeToggleBtn.querySelector('.fa-moon');
  
  if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline-block';
  } else {
      sunIcon.style.display = 'inline-block';
      moonIcon.style.display = 'none';
  }
};
