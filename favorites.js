// home.html로 이동
document.addEventListener('DOMContentLoaded', function() {

    var favoritesLink = document.getElementById('nav-item1');

    favoritesLink.addEventListener('click', function(event) {
      window.location.href = 'home.html';
    });
  });
//


window.onload = function() {
    loadElementFromLocalStorage();
  };
  
  function loadElementFromLocalStorage() {
    var savedHTML = localStorage.getItem('savedElement');
    if (savedHTML) {
      var container = document.createElement('div');
      container.innerHTML = savedHTML;
      
      var livescoreSection = document.querySelector('.livescore');
      if (livescoreSection) {
        // 저장된 요소를 livescore 섹션 안에 추가
        livescoreSection.appendChild(container.firstElementChild);
      }
    }
  }

  // 클릭시 즐겨찾기(별) 이미지 바꾸기 % 로컬스토리지에 저장
  function toggleFavorite(imgElement) {
    var value = imgElement.getAttribute('value');
    var elementId = imgElement.parentElement.id; // livescore-element의 id 가져오기
    if (value === 'Unfavorites') {
      // 즐겨찾기 추가
      imgElement.src = './src/star.png';
      imgElement.setAttribute('value', 'favorites');
      localStorage.setItem(elementId, 'favorites'); // 로컬 스토리지에 저장
      // 해당 livescore-element를 같이 저장
      var element = document.getElementById(elementId);
      if (element) {
        var htmlString = element.outerHTML;
        localStorage.setItem('savedElement', htmlString);
      }
    } else {
      // 즐겨찾기 취소
      imgElement.src = './src/non-star.png';
      imgElement.setAttribute('value', 'Unfavorites');
      localStorage.removeItem(elementId); // 로컬 스토리지에서 제거
      // 저장된 livescore-element요소도 제거
      localStorage.removeItem('savedElement');
    }
  }

  