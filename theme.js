document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('font-slider');
  const elementsToResize = document.querySelectorAll('.slider-label, .screen-styles, .service-center, .use-terms');
  const body = document.body;
  const lightModeButton = document.querySelector('.light-mode-button');
  const darkModeButton = document.querySelector('.dark-mode-button');
  const lightMode = document.querySelector('.light-mode');
  const darkMode = document.querySelector('.dark-mode');
  const boxes = document.querySelectorAll('.box'); // 모든 박스 선택

  var homeLink = document.getElementById('nav-item1');
  var favoritesLink = document.getElementById('nav-item2');
  var bracketLink = document.getElementById('nav-item3');

  var answerLink = document.getElementById('fq');
  var directLink = document.getElementById('cu');
  var termsLink = document.getElementById('terms');

  // const sportsIcons = document.querySelectorAll('.sports img');
  

  applyPreviousSettings();
  
  // 클릭 이벤트 핸들러를 추가
  homeLink?.addEventListener('click', function(event) {
    window.location.href = 'index.html';
  });

  favoritesLink?.addEventListener('click', function(event) {
    window.location.href = 'favorites.html';
  });

  bracketLink?.addEventListener('click', function(event) {
    window.location.href = 'league_table/league_index.html';
  });

  answerLink?.addEventListener('click', function() {
    window.location.href = 'answer.html';
  });

  directLink?.addEventListener('click', function() {
      window.location.href = 'direct.html';
  });

  termsLink?.addEventListener('click', function() {
    window.location.href = 'terms.html';
  });
  
  // 초기 글자 크기 설정
  const initialFontSize = 17; // 예: 100%
  body.style.fontSize = `${initialFontSize}px`;
  elementsToResize.forEach(element => {
    element.style.fontSize = `${initialFontSize}px`;
  });

  // 글자 크기 조절
  slider?.addEventListener('input', () => {
    const fontSize = slider.value;
    body.style.fontSize = `${fontSize}px`;
    elementsToResize.forEach(element => {
      element.style.fontSize = `${fontSize}px`;
    });
    localStorage.setItem('fontSize', fontSize); // 글자 크기 설정 저장
    updateFontSize(fontSize);
  });

  // 라이트 모드 버튼 클릭 이벤트
lightModeButton?.addEventListener('click', () => {
  body.classList.remove('dark-mode-active'); // 다크 모드 클래스 제거
  body.style.backgroundColor = 'white'; // 배경을 흰색으로
  body.style.color = 'black'; // 텍스트 색상을 검정색으로
  lightMode.style.borderColor = 'lightblue'; // 라이트 모드 컨테이너에 파란색 테두리 추가
  darkMode.style.borderColor = 'transparent'; // 다크 모드 컨테이너 테두리 제거
  lightModeButton.style.backgroundColor = '#526D82'; // 라이트 모드 버튼 채우기
  darkModeButton.style.backgroundColor = 'transparent'; // 다크 모드 버튼 배경 제거
  localStorage.setItem('theme', 'light'); // 테마 설정 저장
  updateTheme('light');
});

// 다크 모드 버튼 클릭 이벤트
darkModeButton?.addEventListener('click', () => {
  body.classList.add('dark-mode-active'); // 다크 모드 클래스 추가
  body.style.backgroundColor = 'black'; // 배경을 검정색으로
  body.style.color = 'white'; // 텍스트 색상을 흰색으로
  darkMode.style.borderColor = 'lightblue'; // 다크 모드 컨테이너에 파란색 테두리 추가
  lightMode.style.borderColor = 'transparent'; // 라이트 모드 컨테이너 테두리 제거
  darkModeButton.style.backgroundColor = '#526D82'; // 다크 모드 버튼 채우기
  lightModeButton.style.backgroundColor = 'transparent'; // 라이트 모드 버튼 배경 제거
  localStorage.setItem('theme', 'dark'); // 테마 설정 저장
  updateTheme('dark');
  });
// 다른 페이지에 설정 적용
function applyPreviousSettings() {
  // 글자 크기 설정 불러오기 및 적용
  const savedFontSize = localStorage.getItem('fontSize');
  if (savedFontSize) {
    updateFontSize(savedFontSize);
  }

  // 테마 설정 불러오기 및 적용
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    updateTheme(savedTheme);
  }
}

function updateFontSize(fontSize) {
  document.body.style.fontSize = `${fontSize}px`;
  document.querySelectorAll('*').forEach(element => {
    element.style.fontSize = `${fontSize}px`;
  });
}

function updateTheme(theme) {
  const sportsIcons = document.querySelectorAll('.sports img');
  if (theme === 'dark') {
    // 다크 모드 적용 로직
    body.classList.add('dark-mode-active');
    body.style.backgroundColor = 'black';
    body.style.color = 'white';

    document.querySelectorAll('.icon-soccer, .icon-basketball, .icon-dodgeball, .icon-kickball, .icon-athletecs, .icon-test').forEach(icon => {
      icon.classList.add('filter-white');
    });
    sportsIcons.forEach(icon => {
      icon.classList.add('filter-white'); // 아이콘을 흰색으로 변경
    });
    
  } else {
    // 라이트 모드 적용 로직
    body.classList.remove('dark-mode-active');
    body.style.backgroundColor = 'white';
    body.style.color = 'black';

    document.querySelectorAll('.icon-soccer, .icon-basketball, .icon-dodgeball, .icon-kickball, .icon-athletecs, .icon-test').forEach(icon => {
      icon.classList.remove('filter-white');
    });
  }
}
});


document.addEventListener("DOMContentLoaded", function() {
  // 현재 페이지의 URL을 확인하여 "theme.html"인 경우에만 스타일을 적용
  if (window.location.pathname.includes("theme.html")) {
      // "#nav-item4 .nav-icon" 요소를 선택하여 필터 스타일을 적용
      var navIcon = document.querySelector("#nav-item4 .nav-icon");
      if (navIcon) {
          navIcon.style.filter = "invert(70%) sepia(99%) saturate(5414%) hue-rotate(170deg) brightness(102%) contrast(97%)";
      }
  }
});
