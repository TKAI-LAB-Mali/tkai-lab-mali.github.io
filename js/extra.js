document.addEventListener('DOMContentLoaded', () => {
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
});
