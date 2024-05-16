// Initialize Barba.js
Barba.Pjax.start();

// Define the transition
var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    // Fade out the current page
    this.oldContainer.style.opacity = 0;
    // Start the transition
    gsap.to(this.oldContainer, { opacity: 0, duration: 0.5, onComplete: this.finish.bind(this) });
  },
  finish: function() {
    // Remove the old container
    this.oldContainer.parentNode.removeChild(this.oldContainer);
    // Fade in the new container
    gsap.fromTo(this.newContainer, { opacity: 0 }, { opacity: 1, duration: 0.5, onComplete: this.done.bind(this) });
  }
});

// Use the defined transition
Barba.Pjax.getTransition = function() {
  return FadeTransition;
};
