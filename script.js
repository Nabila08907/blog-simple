document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function() {
  const hero = document.querySelector('.hero');
  const scrollPosition = window.pageYOffset;
  hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.hidden').forEach(el => {
  observer.observe(el);
});

  const quotes = [
    "“Knowing yourself is the beginning of all wisdom.” – Aristotle",
    "“Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.”",
    "“Happiness depends upon ourselves.” – Aristotle",
    "“You have power over your mind – not outside events. Realize this, and you will find strength.” – Marcus Aurelius"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
  }
  
  