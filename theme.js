document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('font-slider');
    const body = document.body;
    const lightModeButton = document.querySelector('.light-mode-button');
    const darkModeButton = document.querySelector('.dark-mode-button');
    const lightMode = document.querySelector('.light-mode');
    const darkMode = document.querySelector('.dark-mode');
  
    // 글자 크기 조절
    slider.addEventListener('input', () => {
      const fontSize = slider.value;
      body.style.fontSize = `${fontSize}%`;
    });
  
    // 라이트 모드 버튼 클릭 이벤트
  lightModeButton.addEventListener('click', () => {
    body.style.backgroundColor = 'white'; // 배경을 흰색으로
    body.style.color = 'black'; // 텍스트 색상을 검정색으로
    lightMode.style.borderColor = 'lightblue'; // 라이트 모드 컨테이너에 파란색 테두리 추가
    darkMode.style.borderColor = 'transparent'; // 다크 모드 컨테이너 테두리 제거
    lightModeButton.style.backgroundColor = 'gray'; // 라이트 모드 버튼 채우기
    darkModeButton.style.backgroundColor = 'transparent'; // 다크 모드 버튼 배경 제거
  });

  // 다크 모드 버튼 클릭 이벤트
  darkModeButton.addEventListener('click', () => {
    body.style.backgroundColor = 'black'; // 배경을 검정색으로
    body.style.color = 'white'; // 텍스트 색상을 흰색으로
    darkMode.style.borderColor = 'lightblue'; // 다크 모드 컨테이너에 파란색 테두리 추가
    lightMode.style.borderColor = 'transparent'; // 라이트 모드 컨테이너 테두리 제거
    darkModeButton.style.backgroundColor = 'gray'; // 다크 모드 버튼 채우기
    lightModeButton.style.backgroundColor = 'transparent'; // 라이트 모드 버튼 배경 제거
  });
  });
  