// index.html로 이동
document.addEventListener('DOMContentLoaded', function() {

  var homeLink = document.getElementById('nav-item1');
  var bracketLink = document.getElementById('nav-item3');
  var settingsLink = document.getElementById('nav-item4');

  // 클릭 이벤트 핸들러를 추가
  homeLink.addEventListener('click', function(event) {
    window.location.href = 'index.html';
  });

  bracketLink.addEventListener('click', function(event) {
    window.location.href = 'league_table/league_index.html';
  });

  settingsLink.addEventListener('click', function(event) {
    window.location.href = 'theme.html';
  });
});
//



////////// local storage에서 내림차순으로 데이터를 받아와서 추가함.
window.onload = function() {
  loadElementFromLocalStorage();
};
//
function loadElementFromLocalStorage() {
  var localStorageLength = localStorage.length;
  var elements = [];
  // 모든 키에 대해 loop해서 값을 가져와서 elements 배열에 추가
  for (var i = 0; i < localStorageLength; i++) {
    var key = localStorage.key(i);
    var savedHTML = localStorage.getItem(key);

    if (savedHTML) {
      var container = document.createElement('div');
      container.innerHTML = savedHTML;
      elements.push(container.firstElementChild);
    }
  }
  // match_date를 기준으로 elements 배열을 내림차순으로 정렬
  elements.sort(function(a, b) {
    var dateA = getDateFromString(a.querySelector('.match_date').textContent);
    var dateB = getDateFromString(b.querySelector('.match_date').textContent);
    return dateB - dateA;
  });
  var livescoreSection = document.querySelector('.livescore');
  if (livescoreSection) {
    // 정렬된 요소들을 livescore 섹션 안에 추가
    elements.forEach(function(element) {
      livescoreSection.appendChild(element);
    });
  }
}
function getDateFromString(dateString) {
  // (ex) "03-14" 형식의 문자열을 Date 객체로 변환하여 반환
  var parts = dateString.split('-');
  var month = parseInt(parts[0], 10) - 1; // JavaScript에서 월은 0부터 시작하므로 1을 빼줌.
  var day = parseInt(parts[1], 10);
  return new Date(new Date().getFullYear(), month, day);
}
//////////



// 클릭시 즐겨찾기(별) 이미지 바꾸기 및 로컬스토리지에 저장
function toggleFavorite(imgElement) {
  var value = imgElement.getAttribute('value');
  var wrapperElement = imgElement.closest('.livescore-elemenet-wrapper');
  var elementId = wrapperElement.getAttribute('id'); // livescore-element-wrapper의 id 가져오기

  if (value === 'Unfavorites') {
    // 즐겨찾기 추가
    imgElement.src = './src/star_full.png';
    imgElement.setAttribute('value', 'favorites');
    localStorage.setItem(elementId, 'favorites'); // 로컬 스토리지에 저장
    // 해당 livescore-element를 같이 저장
    var htmlString = wrapperElement.outerHTML;
    localStorage.setItem('savedElement', htmlString);
  } else {
    // 즐겨찾기 취소
    imgElement.src = './src/star_empty.png';
    imgElement.setAttribute('value', 'Unfavorites');
    localStorage.removeItem(elementId); // 로컬 스토리지에서 제거
    // 저장된 livescore-element요소도 제거
    localStorage.removeItem('savedElement');
  }
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