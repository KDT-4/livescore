console.log("test")


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
//


// score가 null 일경우 공백으로 치환
document.addEventListener('DOMContentLoaded', function() {
    var nullElements = document.querySelectorAll('.livescore-elemenet span');
    
    nullElements.forEach(function(element) {
      if (element.textContent.trim() === "null") { // String "null" 이면 ""로 바꿈
        // element.remove();
        element.textContent = "";
      }
    });
  });
//


// favorites.html로 이동
document.addEventListener('DOMContentLoaded', function() {
  // "nav-item2" id를 가진 요소 지정
  var favoritesLink = document.getElementById('nav-item2');
  // 클릭 이벤트 핸들러를 추가
  favoritesLink.addEventListener('click', function(event) {
    window.location.href = 'favorites.html';  // 
  });
});
//


// 날짜 필터링 기능 구현
var dateInput = document.querySelector('.calendar input[type="date"]'); // input type="date"

dateInput.addEventListener('change', function() {   // 날짜 선택 enectListener
  var selectedDate = dateInput.value;  // 선택된 날짜 가져옴

  if (!selectedDate) { // 만약 선택된 날짜가 없다면
    var matchDates = document.querySelectorAll('.match_date');  // 모든 match_date 요소를 가져옴
    // matchdate loop
    matchDates.forEach(function(matchDate) {
      matchDate.parentElement.style.display = 'block'; // 모든 요소를 보이도록 설정
    });
  } else { // 선택된 날짜가 있다면
    var formattedDate = selectedDate.split('-').slice(1).join('-'); // mm-dd로 포맷팅
    var matchDates = document.querySelectorAll('.match_date');  // match_date가 일치하면 가져옴
    // matchdate loop
    matchDates.forEach(function(matchDate) {
      // 일치하면 block 일치안하면 none
      if (matchDate.textContent === formattedDate) { 
        matchDate.parentElement.style.display = 'block';
      } else {
        matchDate.parentElement.style.display = 'none';
      }
    });
  }
});





// //
// document.addEventListener("DOMContentLoaded", function() {
//   const sportsIcons = document.querySelectorAll(".sports img");

//   sportsIcons.forEach(icon => {
//     icon.addEventListener("click", function() {
//       // 클릭된 이미지의 부모 요소를 찾음
//       const parentElement = icon.parentElement;

//       // 부모 요소가 "livescore-element" 클래스를 가지고 있는지 확인
//       if (parentElement.classList.contains("livescore-element")) {
//         // 모든 "livescore-element" 클래스를 가진 요소를 숨김
//         const allLivescoreElements = document.querySelectorAll(".livescore-element");
//         allLivescoreElements.forEach(element => {
//           element.style.display = "none";
//         });

//         // 클릭된 이미지를 포함하는 요소만 표시
//         parentElement.style.display = "block";
//       }
//     });
//   });
// });