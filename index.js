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



// 클릭시 즐겨찾기(별) 이미지 바꾸기 및 로컬스토리지에 저장
function toggleFavorite(imgElement) {
  var value = imgElement.getAttribute('value');
  var wrapperElement = imgElement.closest('.livescore-elemenet-wrapper');
  var elementId = wrapperElement.getAttribute('id'); // livescore-element-wrapper의 id 가져오기

  if (value === 'Unfavorites') {
    // 즐겨찾기 추가
    imgElement.src = './src/star2.png';
    imgElement.setAttribute('value', 'favorites');
    // 로컬 스토리지에 저장
    if (elementId) {
      var htmlString = wrapperElement.outerHTML;
      localStorage.setItem(elementId, htmlString);
    }
  } else {
    // 즐겨찾기 취소
    imgElement.src = './src/star1.png';
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
      var wrapperElement = document.getElementById(key);
      wrapperElement.innerHTML = htmlString;

      var imgElement = wrapperElement.querySelector('.star');
      if (imgElement) {
        var value = imgElement.getAttribute('value');
        if (value === 'favorites') {
          imgElement.src = './src/star2.png';
        } else {
          imgElement.src = './src/star1.png';
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
  var bracketLink = document.getElementById('nav-item3');
  var settingsLink = document.getElementById('nav-item4');
  var searchLink = document.getElementById('searchButton');
  var livescoreLink = document.getElementById('livescore-elemenet4');

  // 클릭 이벤트 핸들러를 추가
  favoritesLink.addEventListener('click', function(event) {
    window.location.href = 'favorites.html';
  });

  bracketLink.addEventListener('click', function(event) {
    window.location.href = 'league_table/league_index.html';
  });

  settingsLink.addEventListener('click', function(event) {
    window.location.href = 'theme.html';
  });

  searchLink.addEventListener('click', function(event) {
    window.location.href = 'search.html';
  });

  livescoreLink.addEventListener('click', function(event) {
    window.location.href = 'livescore.html';
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
  hideDuplicateMatchDates();  // 하단 match_date 중복제거 function
});
//



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
        hideDuplicateMatchDates();  // 하단 match_date 중복제거 function
    });
});
//



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
//



// 오늘 날짜를 받아와서 포맷팅
function formatTodayDate() {
  var today = new Date();
  var month = (today.getMonth() + 1).toString().padStart(2, '0');
  var date = today.getDate().toString().padStart(2, '0');
  return month + "-" + date; // 출력형식: MM-DD
}
// 해당 날짜의 스크롤 바 이동 및 스타일 적용
function applyStyleToMatchDates() {
  var formattedDate = formatTodayDate();
  var matchDates = document.querySelectorAll('.match_date');

  matchDates.forEach(function(matchDate) {
      if (matchDate.textContent.trim() === formattedDate) {
          
          matchDate.scrollIntoView({ behavior: "smooth", block: "center" });

          var siblingElement = matchDate.nextSibling;
          while (siblingElement) {
              if (siblingElement.classList && siblingElement.classList.contains('livescore-elemenet')) {
                  siblingElement.style.borderRadius = '12px';
                  siblingElement.style.backgroundColor = 'rgba(0, 64, 128, .1)';
              }
              siblingElement = siblingElement.nextSibling;
          }
      }
  });
}
//
document.addEventListener("DOMContentLoaded", function() {
  applyStyleToMatchDates(); // 페이지 로드시 스타일 적용

  window.addEventListener("beforeunload", function(event) {
      // 페이지가 언로드되기 전에 해당 기능을 다시 적용
      applyStyleToMatchDates();
  });
});
//



// match_date 태그 hidden 처리
// html의 구조를 바꾸기전에 "match_date태그 안에 아무 livescore-element 요소도 없으면" hidden처리하는 요소 였기때문에 수정이 필요하나 작동에 문제 없음.
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
//



// .match_data 중복 제거
function hideDuplicateMatchDates() {
  const matchDates = document.querySelectorAll('.match_date');
  const uniqueMatchDates = new Set();

  matchDates.forEach(matchDate => {
    const dateText = matchDate.textContent.trim();

    if (uniqueMatchDates.has(dateText)) {
      matchDate.classList.add('hidden');
    } else {
      uniqueMatchDates.add(dateText);
    }
  });
}
//
//
document.addEventListener("DOMContentLoaded", function() {
  hideDuplicateMatchDates();
});
