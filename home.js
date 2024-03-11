console.log("Hi")

// 클릭시 즐겨찾기(별) 이미지 바꾸기
function toggleFavorite(imgElement) {
    var value = imgElement.getAttribute('value');
    if (value === 'Unfavorites') {
        // 즐겨찾기 추가
        imgElement.src = './src/star.png';
        imgElement.setAttribute('value', 'favorites');
    } else {
        // 즐겨찾기 취소
        imgElement.src = './src/non-star.png';
        imgElement.setAttribute('value', 'Unfavorites');
    }
}

// score가 null 일경우 공백으로 치환
document.addEventListener('DOMContentLoaded', function() {
    var nullElements = document.querySelectorAll('.livescore-elemenet span');
    
    nullElements.forEach(function(element) {
      if (element.textContent.trim() === "null") { // null바꾸기
        // element.remove();
        element.textContent = "";
      }
    });
  });

//

// 필터링 구현필요
// home.html: 종목필터링, 날짜 필터링, 검색 필터링 구현필요
// favorites.html: home에서 즐겨찾기한 요소를 불러옴
// search.html: 선택한 요소의내용을 home.html로 보내 필터링함

// -> home 종목필터링& 날짜 필터링 시도중
// 검색필터링과 즐겨찾기는 타 html에서 정보를 받아와야해서 힘들어 보임. . .

