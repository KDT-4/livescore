document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('font-slider');
    const elementsToResize = document.querySelectorAll('.slider-label, .screen-styles, .service-center, .use-terms');
    const body = document.body;
    const lightModeButton = document.querySelector('.light-mode-button');
    const darkModeButton = document.querySelector('.dark-mode-button');
    const lightMode = document.querySelector('.light-mode');
    const darkMode = document.querySelector('.dark-mode');
    const boxes = document.querySelectorAll('.box'); // 모든 박스 선택

    const homeLink = document.getElementById('home_link');
    if (home_link) { // homeLink가 실제로 존재하는지 확인
        homeLink.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 이벤트 방지
            window.location.href = 'index.html'; // 홈 페이지로 이동
        });
    }
  
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
  