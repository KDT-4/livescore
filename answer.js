document.addEventListener('DOMContentLoaded', function() {
  // 페이지 로딩 후 실행될 코드

  var homeLink = document.getElementById('nav-item1');
  var favoritesLink = document.getElementById('nav-item2');
  var bracketLink = document.getElementById('nav-item3');
  var settingsLink = document.getElementById('nav-item4');
  var backLink = document.getElementById('backButton');

  // "container2" 클래스를 가진 요소를 찾습니다.
  var container2Element = document.querySelector('.container2');

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

  backLink.addEventListener('click', function(event) {
    window.location.href = 'theme.html';
  });

  // 클릭 이벤트 핸들러를 추가합니다.
  container2Element.addEventListener('click', function() {
    // direct.html로 이동하는 코드
    window.location.href = 'direct.html';
  });
});
