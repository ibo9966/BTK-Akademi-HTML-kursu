function gorselGoster(value) {
    const img = document.getElementById('karakterGorsel');
    img.src = `resimler/${value}.jpg`;
    img.classList.add('show');
  
    setTimeout(() => {
      img.classList.remove('show');
      setTimeout(() => {
        img.style.display = 'none';
      }, 300); // fade-out sonrası
    }, 1000);
    
    img.style.display = 'block'; // tekrar görünür yap
  }
  