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

    answerLink.addEventListener('click', function() {
      window.location.href = 'answer.html';
    });

    directLink.addEventListener('click', function() {
        window.location.href = 'direct.html';
    });

    termsLink.addEventListener('click', function() {
      window.location.href = 'terms.html';
    });
    
    // 초기 글자 크기 설정
    const initialFontSize = 100; // 예: 100%
    body.style.fontSize = `${initialFontSize}%`;
    elementsToResize.forEach(element => {
      element.style.fontSize = `${initialFontSize}%`;
    });

    // 글자 크기 조절
    slider.addEventListener('input', () => {
      const fontSize = slider.value;
      body.style.fontSize = `${fontSize}%`;
      elementsToResize.forEach(element => {
        element.style.fontSize = `${fontSize}%`;
      });
    });
  
    // 라이트 모드 버튼 클릭 이벤트
  lightModeButton.addEventListener('click', () => {
    body.classList.remove('dark-mode-active'); // 다크 모드 클래스 제거
    body.style.backgroundColor = 'white'; // 배경을 흰색으로
    body.style.color = 'black'; // 텍스트 색상을 검정색으로
    lightMode.style.borderColor = 'lightblue'; // 라이트 모드 컨테이너에 파란색 테두리 추가
    darkMode.style.borderColor = 'transparent'; // 다크 모드 컨테이너 테두리 제거
    lightModeButton.style.backgroundColor = 'gray'; // 라이트 모드 버튼 채우기
    darkModeButton.style.backgroundColor = 'transparent'; // 다크 모드 버튼 배경 제거
  });

  // 다크 모드 버튼 클릭 이벤트
  darkModeButton.addEventListener('click', () => {
    body.classList.add('dark-mode-active'); // 다크 모드 클래스 추가
    body.style.backgroundColor = 'black'; // 배경을 검정색으로
    body.style.color = 'white'; // 텍스트 색상을 흰색으로
    darkMode.style.borderColor = 'lightblue'; // 다크 모드 컨테이너에 파란색 테두리 추가
    lightMode.style.borderColor = 'transparent'; // 라이트 모드 컨테이너 테두리 제거
    darkModeButton.style.backgroundColor = 'gray'; // 다크 모드 버튼 채우기
    lightModeButton.style.backgroundColor = 'transparent'; // 라이트 모드 버튼 배경 제거
  });
  });
  