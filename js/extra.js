document.addEventListener('DOMContentLoaded', () => {
  // Select all links
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    // Check if the link is external
    if (link.hostname && link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }
  });

  // Select all image stacks
  const stacks = document.querySelectorAll('.image-stack');

  stacks.forEach((stack) => {
    const container = stack.querySelector('.image-container');
    const images = stack.querySelectorAll('.stacked-image');
    const leftArrow = stack.querySelector('.arrow.left');
    const rightArrow = stack.querySelector('.arrow.right');
    let currentIndex = 0;

    // Function to update visible images
    function updateImages() {
      const imageWidth = images[0].offsetWidth;
      container.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    // Right arrow functionality
    rightArrow.addEventListener('click', () => {
      if (currentIndex < images.length - 3) {
        currentIndex += 1; // Move one image forward
      } else {
        currentIndex = 0; // Loop back to the beginning
      }
      updateImages();
    });

    // Left arrow functionality
    leftArrow.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= 1; // Move one image backward
      } else {
        currentIndex = images.length - 3; // Go to the last pair
      }
      updateImages();
    });

    // Initialize the first image view
    updateImages();
  });

  // --- Research Carousel Logic ---
  const researchCarousel = document.querySelector('.research-carousel-section');
  if (researchCarousel) {
    const track = researchCarousel.querySelector('.research-carousel-track');
    const slides = Array.from(researchCarousel.querySelectorAll('.research-carousel-slide'));
    const nextBtn = researchCarousel.querySelector('.carousel-control.next');
    const prevBtn = researchCarousel.querySelector('.carousel-control.prev');
    const dots = Array.from(researchCarousel.querySelectorAll('.research-carousel-dots .dot'));
    let slideIndex = 0;

    function updateCarousel() {
      // Calculate translate percentage
      track.style.transform = `translateX(-${slideIndex * 100}%)`;

      // Update dots active state
      dots.forEach((dot, index) => {
        if (index === slideIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    nextBtn.addEventListener('click', () => {
      if (slideIndex < slides.length - 1) {
        slideIndex++;
      } else {
        slideIndex = 0; // Loop back
      }
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      if (slideIndex > 0) {
        slideIndex--;
      } else {
        slideIndex = slides.length - 1; // Loop to end
      }
      updateCarousel();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        slideIndex = index;
        updateCarousel();
      });
    });

    // Touch support for mobile swipe
    let startX = 0;
    let endX = 0;

    track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchmove', (e) => {
      endX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', () => {
      const diffX = startX - endX;
      if (Math.abs(diffX) > 50) { // minimum threshold for swipe
        if (diffX > 0) {
          // Swipe left -> next
          nextBtn.click();
        } else {
          // Swipe right -> prev
          prevBtn.click();
        }
      }
    });
  }
});
