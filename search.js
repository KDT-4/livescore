document.addEventListener('DOMContentLoaded', function() {

    var homeLink = document.getElementById('nav-item1');
    var favoritesLink = document.getElementById('nav-item2');
    var bracketLink = document.getElementById('nav-item3');
    var settingsLink = document.getElementById('nav-item4');
  
    // 클릭 이벤트 핸들러를 추가
    homeLink.addEventListener('click', function(event) {
      window.location.href = 'index.html';
    });

    favoritesLink.addEventListener('click', function(event) {
        window.location.href = 'favorites.html';
    });
  
    bracketLink.addEventListener('click', function(event) {
      window.location.href = 'league_table/league_index.html';
    });
  
    settingsLink.addEventListener('click', function(event) {
      window.location.href = 'theme.html';
    });
  });