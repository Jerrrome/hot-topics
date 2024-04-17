document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('nav a');
  const container = document.getElementById('main-content');

  function loadContent(url) {
      fetch(url)
          .then(response => response.text())
          .then(html => {
              container.innerHTML = html;
          })
          .catch(error => {
              console.error('Error loading the content: ', error);
          });
  }

  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          loadContent(this.href);
      });
  });

  loadContent('partials/home.html');
});
