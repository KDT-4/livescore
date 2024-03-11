console.log("ddddkkkkkkkkkk")

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

document.addEventListener('DOMContentLoaded', function() {
    var nullElements = document.querySelectorAll('.livescore-elemenet span');
    
    nullElements.forEach(function(element) {
      if (element.textContent.trim() === "null") { // null바꾸기
        // element.remove();
        element.textContent = "";
      }
    });
  });

//   sdgfsdsdaadsfasdklnlabaewkjnweauooe
