// console.log test
console.log("test")


// sports icon 클릭 시 cliked css 적용
document.addEventListener("DOMContentLoaded", function() {
  const sportsIcons = document.querySelectorAll(".sports img");

  sportsIcons.forEach(function(icon) {
    icon.addEventListener("click", function() {
      sportsIcons.forEach(function(icon) {
        icon.classList.remove("clicked");
      });
      this.classList.add("clicked");
    });
  });
});


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


// score가 null일 경우 공백으로 치환
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
  var selectedDate = dateInput.value.trim();  // 선택된 날짜 가져옴 (공백 제거)

  // 만약 선택된 날짜가 없다면 필터링 제거
  if (!selectedDate) {
    var matchDates = document.querySelectorAll('.match_date');  // 모든 match_date 요소를 가져옴
    // matchdate loop
    matchDates.forEach(function(matchDate) {
      matchDate.parentElement.classList.remove('hidden'); // hidden 클래스 제거
    });
  }
  // 선택된 날짜가 있다면 필터링
  else {
    var formattedDate = selectedDate.split('-').slice(1).join('-'); // mm-dd로 포맷팅
    var matchDates = document.querySelectorAll('.match_date');  // match_date가 일치하면 가져옴
    // matchdate loop
    matchDates.forEach(function(matchDate) {
      // 일치하면 block 일치안하면 none
      if (matchDate.textContent.trim() === formattedDate) {  // trim() 추가
        matchDate.parentElement.classList.remove('hidden'); // hidden 클래스 제거
      } else {
        matchDate.parentElement.classList.add('hidden'); // hidden 클래스 추가
      }
    });
  }
});




// 스포츠필터링
var sportsImages = document.querySelectorAll('.sports img');

Array.from(sportsImages).forEach(function(image) {
    image.addEventListener('click', function() {
        var clickedClass = image.className; // 클릭된 이미지의 클래스 가져오기
        var allMatchElements = document.querySelectorAll('.livescore-elemenet');

        if (clickedClass === 'icon-all') { // 클릭된 이미지가 'icon-all'이면 모든 경기 일정을 표시
            allMatchElements.forEach(function(matchElement) {
                matchElement.classList.remove('hidden'); // hidden 클래스 제거
            });
        } else {
            allMatchElements.forEach(function(matchElement) {
                if (matchElement.querySelector('.' + clickedClass)) {
                    matchElement.classList.remove('hidden'); // hidden 클래스 제거
                } else {
                    matchElement.classList.add('hidden'); // hidden 클래스 추가
                }
            });
        }
        addHiddenClassToMatchDate();
    });
});

// match_date 태그 hidden
function addHiddenClassToMatchDate() {
  var matchDateElements = document.querySelectorAll('.match_date');

  matchDateElements.forEach(function(matchDateElement) {
    var siblingMatchElements = matchDateElement.parentElement.querySelectorAll('.livescore-elemenet');
    
    var allHidden = true;
    siblingMatchElements.forEach(function(element) {
      if (!element.classList.contains('hidden')) {
        allHidden = false;
        return;
      }
    });

    if (allHidden) {
      matchDateElement.classList.add('hidden');
    } else {
      matchDateElement.classList.remove('hidden');
    }
  });
}



