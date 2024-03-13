document.addEventListener('DOMContentLoaded', function() {
  // 페이지 로딩 후 실행될 코드

  // "container2" 클래스를 가진 요소를 찾습니다.
  var container2Element = document.querySelector('.container2');

  // 클릭 이벤트 핸들러를 추가합니다.
  container2Element.addEventListener('click', function() {
    // direct.html로 이동하는 코드
    window.location.href = 'direct.html';
  });
});