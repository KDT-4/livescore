document.addEventListener('DOMContentLoaded', function() {

    var homeLink = document.getElementById('nav-item1');
    var favoritesLink = document.getElementById('nav-item2');
    var settingsLink = document.getElementById('nav-item4');
  
    // 클릭 이벤트 핸들러를 추가
    homeLink.addEventListener('click', function(event) {
      window.location.href = '../index.html';
    });
  
    favoritesLink.addEventListener('click', function(event) {
      window.location.href = '../favorites.html';
    });
  
    settingsLink.addEventListener('click', function(event) {
      window.location.href = '../theme.html';
    });
  });
  