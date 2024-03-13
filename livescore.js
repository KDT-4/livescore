const favoriteIcon = document.querySelector('.favorite-icon');

favoriteIcon.addEventListener('click', function() {
    const starIcon = favoriteIcon.querySelector('.star-icon');

    if (starIcon.src.includes('src/star.png')) {
        starIcon.src = 'src/star2.png';
    } else {
        starIcon.src = 'src/star.png';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const livestreamBtn = document.getElementById('livestreamBtn');

    livestreamBtn.addEventListener('click', function() {
        window.location.href = 'livestream.html';
    });
});

function selectMenu(menu) {
  var menuButtons = document.querySelectorAll('.menu-btn');

  menuButtons.forEach(function(btn) {
    btn.classList.remove('selected');
  });

  event.target.classList.add('selected');

  var menuContents = document.querySelectorAll('.menu-content');
  menuContents.forEach(function(content) {
    content.style.display = 'none';
  });

  document.getElementById(menu + 'Content').style.display = 'block';

  if (menu === 'comments') {
    document.getElementById('typingArea').style.display = 'flex';
} else {
    document.getElementById('typingArea').style.display = 'none';
}
}

document.addEventListener('DOMContentLoaded', function() {
    const commentInput = document.getElementById('commentInput');
    const sendButton = document.getElementById('sendButton');
    const commentsContainer = document.getElementById('commentContainer');

    sendButton.addEventListener('click', function() {
        sendComment();
    });

    commentInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendComment();
        }
    });

    function sendComment() {
        const commentText = commentInput.value.replace(/\n/g, '').trim();

        if (commentText !== '') {
            commentInput.value = '';

            const newComment = document.createElement('div');
            newComment.classList.add('comment');

            const commentIcon = document.createElement('img');
            commentIcon.src = 'src/profile.png';
            commentIcon.classList.add('comment-icon');

            const commentContent = document.createElement('div');
            commentContent.classList.add('comment-text');
            commentContent.textContent = commentText;

            const commentTimestamp = document.createElement('div');
            commentTimestamp.classList.add('comment-timestamp');
            commentTimestamp.textContent = getCurrentTimestamp();

            newComment.appendChild(commentIcon);
            newComment.appendChild(commentContent);
            newComment.appendChild(commentTimestamp);

            commentsContainer.appendChild(newComment);

            commentsContainer.scrollTop = commentsContainer.scrollHeight;
        }
    }

    function getCurrentTimestamp() {
        const now = new Date();
        return now.toLocaleString();
    }
});