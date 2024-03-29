// console.log test
console.log("test")



// 클릭시 즐겨찾기(별) 이미지 바꾸기 및 로컬스토리지에 저장
function toggleFavorite(imgElement) {
  var value = imgElement.getAttribute('value');
  var wrapperElement = imgElement.closest('.livescore-elemenet-wrapper'); // 이부분에서 진짜 wrapper 클래스인지 판별
  var elementId = wrapperElement.getAttribute('id'); // livescore-element-wrapper의 id 가져오기

  if (value === 'Unfavorites') {
    // 즐겨찾기 추가
    imgElement.src = './src/star_full.png';
    imgElement.setAttribute('value', 'favorites');
    // 로컬 스토리지에 저장
    if (elementId) {
      var htmlString = wrapperElement.outerHTML;
      localStorage.setItem(elementId, htmlString);
    }
  } else {
    // 즐겨찾기 취소
    imgElement.src = './src/star_empty.png';
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
      if (wrapperElement) {
        wrapperElement.outerHTML = htmlString;
        //////////////////
        var imgElement = wrapperElement.querySelector('.star');
        if (imgElement) {
          var value = imgElement.getAttribute('value');
          if (value === 'favorites') {
            imgElement.src = './src/star_full.png';
          } else {
            imgElement.src = './src/star_empty.png';
          }
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

  function handleClick(event) {
    if (event.target.closest('.livescore-elemenet') && event.target.tagName !== 'IMG') {
        window.location.href = 'livescore.html';
    }
  }

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

  livescoreLink.addEventListener('click', handleClick);
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
  addHiddenClassToMatchDate(); // match_date 태그 hidden 처리 함수 호출
});
//



// 스포츠필터링
var sportsImages = document.querySelectorAll('.sports img');
var currentPage = null; // 초기값은 null

Array.from(sportsImages).forEach(function(image) {
  image.addEventListener('click', function() {
      document.querySelectorAll(".sports img").forEach(function(icon) {
          icon.style.removeProperty('filter'); // 필터 속성 제거
      });
      let selectedSports = image.classList[0];  // 하나의 클래스만 받아와야 함
      if (currentPage && currentPage === selectedSports) {
          currentPage = null;
          this.style.removeProperty('filter'); // 필터 속성 제거
          filterMatches(null); // 필터링 함수 호출
      } else {
          currentPage = selectedSports;
          this.style.filter = "invert(70%) sepia(99%) saturate(5414%) hue-rotate(170deg) brightness(102%) contrast(97%)"; //아이콘 색 변경
          filterMatches(selectedSports); // 필터링 함수 호출
      }
      hideDuplicateMatchDates();  // 하단 match_date 중복제거 function
      addHiddenClassToMatchDate(); // match_date 태그 hidden 처리 함수 호출

  });
});
//



// 경기 일정 필터링
function filterMatches(selectedSports) {
    var allMatchElements = document.querySelectorAll('.livescore-elemenet');

    allMatchElements.forEach(function(matchElement) {
        if (selectedSports === null) { // selectedSports
          matchElement.classList.remove('hidden'); 
        } else { // selectedSports null이면 모든 경기 일정을 표시
          if (matchElement.querySelector('.' + selectedSports)) {
            matchElement.classList.remove('hidden');
          } else {
            matchElement.classList.add('hidden');
          }  
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

// 로컬스토리지에서 theme 값을 가져옴
const theme = localStorage.getItem('theme');

// 만약 theme 값이 dark이면 스타일을 적용
if (theme === 'dark') {
    // date 요소의 폰트 색상을 하얀색으로 설정
    const dateInput = document.getElementById('selectedDate');
    dateInput.style.color = 'white';
}
//


// match_date 태그 hidden 처리
// html의 구조를 바꾸기전에 "match_date태그 안에 아무 livescore-element 요소도 없으면" hidden처리하는 요소 였기때문에 수정이 필요하나 작동에 문제 없음.
function addHiddenClassToMatchDate() {
  var matchDateElements = document.querySelectorAll('.match_date');

  // 중복을 처리하기 위해 사용할 객체 생성
  var uniqueDates = {};

  matchDateElements.forEach(function(matchDateElement) {
    if (!matchDateElement.classList.contains('hidden')) {
      // 중복되는지 확인
      if (uniqueDates.hasOwnProperty(matchDateElement.innerText)) {
        // 중복되면 hidden 클래스 추가
        matchDateElement.classList.add('hidden');
        // 기존 요소를 hidden 처리하기 위해 uniqueDates에서 해당 요소를 가져와 hidden 클래스 추가
        uniqueDates[matchDateElement.innerText].classList.add('hidden');
      } else {
        // 중복되지 않으면 객체에 추가
        uniqueDates[matchDateElement.innerText] = matchDateElement;
      }
    }
  });
}






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