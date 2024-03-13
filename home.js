// console.log test
console.log("test")


// 클릭 시 이미지 filter style 적용. 스포츠 필터기능의 selectedClass 의 값으로 판단함
document.addEventListener("DOMContentLoaded", function() {
  const sportsIcons = document.querySelectorAll(".sports img");

  sportsIcons.forEach(function(icon) {
      icon.addEventListener("click", function() {
          // 모든 아이콘의 필터 효과 초기화
          sportsIcons.forEach(function(icon) {
              icon.style.filter = "none";
          });

          // 선택된 아이콘에 대해서만 필터 효과 적용
          if (selectedClass === this.className) {
              this.style.filter = "invert(70%) sepia(99%) saturate(5414%) hue-rotate(170deg) brightness(102%) contrast(97%)";
          }
      });
  });
});





// 클릭시 즐겨찾기(별) 이미지 바꾸기 % 로컬스토리지에 저장
function toggleFavorite(imgElement) {
  var value = imgElement.getAttribute('value');
  var elementId = imgElement.parentElement.id; // livescore-element의 id 가져오기
  if (value === 'Unfavorites') {
    // 즐겨찾기 추가
    imgElement.src = './src/star.png';
    imgElement.setAttribute('value', 'favorites');
    // 로컬 스토리지에 저장
    var element = document.getElementById(elementId);
    if (element) {
      var htmlString = element.outerHTML;
      localStorage.setItem(elementId, htmlString);
    }
  } else {
    // 즐겨찾기 취소
    imgElement.src = './src/non-star.png';
    imgElement.setAttribute('value', 'Unfavorites');
    // 로컬 스토리지에서 제거
    localStorage.removeItem(elementId);
  }
}


document.addEventListener('DOMContentLoaded', function() {
  // 로컬 스토리지에서 값 가져옴.
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var htmlString = localStorage.getItem(key);
    // HTML 내용 수정.
    if (htmlString) {
      var matches = htmlString.match(/value="favorites"/);
      if (matches && matches.length > 0) {
        var imgElement = document.querySelector('#' + key + ' .star');
        if (imgElement) {
          imgElement.src = './src/star.png';
          imgElement.setAttribute('value', 'favorites');
        }
      } else {
        var imgElement = document.querySelector('#' + key + ' .star');
        if (imgElement) {
          imgElement.src = './src/non-star.png';
          imgElement.setAttribute('value', 'Unfavorites');
        }
      }
    }
  }
});


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
var selectedClass = null; // 초기값은 null

Array.from(sportsImages).forEach(function(image) {
    image.addEventListener('click', function() {
        if (selectedClass === image.className) {
            selectedClass = null; // 이미 선택된 이미지를 클릭하면 selectedClass를 null로 설정
        } else {
            selectedClass = image.className; // 클릭된 이미지의 클래스를 selectedClass 변수에 저장
        }
        filterMatches(); // 필터링 함수 호출
        addHiddenClassToMatchDate(); // match_date 태그 hidden 처리 함수 호출
        console.log(selectedClass)
    });
});

// 경기 일정 필터링
function filterMatches() {
    var allMatchElements = document.querySelectorAll('.livescore-elemenet');

    allMatchElements.forEach(function(matchElement) {
        if (selectedClass) { // selectedClass가 null이 아니면 해당 클래스에 맞는 일정만 표시
            if (matchElement.querySelector('.' + selectedClass)) {
                matchElement.classList.remove('hidden');
            } else {
                matchElement.classList.add('hidden');
            }
        } else { // selectedClass가 null이면 모든 경기 일정을 표시
            matchElement.classList.remove('hidden');
        }
    });
}

// match_date 태그 hidden 처리
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




// 오늘 날짜를 받아와서 포맷팅
var today = new Date();
var month = (today.getMonth() + 1).toString().padStart(2, '0');
var date = today.getDate().toString().padStart(2, '0');
var formattedDate = month + "-" + date; // 출력형식: MM-DD
// 오늘 날짜인 livescore-element 요소에 style 적용
document.addEventListener("DOMContentLoaded", function() {
  var matchDates = document.querySelectorAll('.match_date');

  matchDates.forEach(function(matchDate) {
      if (matchDate.textContent.trim() === formattedDate) {
          var siblingElement = matchDate.nextSibling; // match_date 요소의 다음 형제 요소를 가져옴
          while (siblingElement) {
              if (siblingElement.classList && siblingElement.classList.contains('livescore-elemenet')) {
                  siblingElement.style.borderRadius = '12px';
                  siblingElement.style.backgroundColor = 'rgba(0, 0, 0, .1)';
              }
              siblingElement = siblingElement.nextSibling; // 다음 형제 요소로 이동
          }
      }
  });
});
//

