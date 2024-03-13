var favoriteIcon = document.querySelector('.favorite-icon');

favoriteIcon.addEventListener('click', function() {
    var starIcon = favoriteIcon.querySelector('.star-icon');

    if (starIcon.src.includes('src/star1.png')) {
        starIcon.src = 'src/star2.png';
    } else {
        starIcon.src = 'src/star1.png';
    }
});

function selectMenu(menu, event) {
  var menuButtons = document.querySelectorAll('.menu-btn');

  menuButtons.forEach(function(btn) {
    btn.classList.remove('selected');
  });

  event.target.classList.add('selected');

  var menuContents = document.querySelectorAll('.menu-content');
  menuContents.forEach(function(content) {
    content.style.display = 'none';
  });

  document.getElementById(menu + 'Content').style.display = 'flex';

  if (menu === 'comments') {
    document.getElementById('typingArea').style.display = 'flex';
    document.querySelector('.second-container').style.height = '377px';
    document.querySelector('.menu-content').style.maxHeight = '290px';
} else {
    document.getElementById('typingArea').style.display = 'none';
    document.querySelector('.second-container').style.height = '465px';
    document.querySelector('.menu-content').style.maxHeight = '370px';
}
}

document.addEventListener('DOMContentLoaded', function() {
    var livestreamBtn = document.getElementById('livestreamBtn');

    var commentInput = document.getElementById('commentInput');
    var sendButton = document.getElementById('sendButton');
    var commentsContainer = document.getElementById('commentContainer');

    var homeLink = document.getElementById('nav-item1');
    var favoritesLink = document.getElementById('nav-item2');
    var bracketLink = document.getElementById('nav-item3');
    var settingsLink = document.getElementById('nav-item4');
    var backLink = document.getElementById('backButton');
    
    homeLink.addEventListener('click', function(event) {
        window.location.href = 'index.html';
    });

    favoritesLink.addEventListener('click', function(event) {
        window.location.href = 'favorites.html';
    });
    
    bracketLink.addEventListener('click', function(event) {
        window.location.href = 'league_table/league_index.html';
    });
    
    settingsLink.addEventListener('click', function(event) {
        window.location.href = 'theme.html';
    });

    livestreamBtn.addEventListener('click', function() {
        window.location.href = 'livestream.html';
    });

    sendButton.addEventListener('click', function() {
        sendComment();
    });

    backLink.addEventListener('click', function() {
        window.history.back();
    });

    commentInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendComment();
        }
    });

    window.onload = loadComment;

    function loadComment() {
        var now = new Date();
        comment.forEach(comment => {
            var newComment = document.createElement('div');
            newComment.classList.add('comment');
    
            var commentIcon = document.createElement('img');
            commentIcon.src = 'src/profile.png';
            commentIcon.classList.add('comment-icon');
    
            var commentContent = document.createElement('div');
            commentContent.classList.add('comment-text');
            commentContent.textContent = comment.content;
    
            var commentTimestamp = document.createElement('div');
            commentTimestamp.classList.add('comment-timestamp');
            commentTimestamp.textContent = getFormattedTimestamp(new Date(comment.time), now);
    
            newComment.appendChild(commentIcon);
            newComment.appendChild(commentContent);
            newComment.appendChild(commentTimestamp);
    
            commentsContainer.appendChild(newComment);
        });

        commentsContainer.scrollTop = commentsContainer.scrollHeight;
    }

    function sendComment() {
        let commentText = commentInput.value.trim();
        
        if (commentText.length > 300) {
            commentText = commentText.substring(0, 300);
        }

        if (commentText !== '') {
            commentInput.value = '';

            var newComment = document.createElement('div');
            newComment.classList.add('comment');

            var commentIcon = document.createElement('img');
            commentIcon.src = 'src/profile.png';
            commentIcon.classList.add('comment-icon');

            var commentContent = document.createElement('div');
            commentContent.classList.add('comment-text');
            commentContent.textContent = commentText;

            var commentTimestamp = document.createElement('div');
            commentTimestamp.classList.add('comment-timestamp');
            commentTimestamp.textContent = getFormattedTimestamp(new Date(), new Date());

            newComment.appendChild(commentIcon);
            newComment.appendChild(commentContent);
            newComment.appendChild(commentTimestamp);

            commentsContainer.appendChild(newComment);

            commentsContainer.scrollTop = commentsContainer.scrollHeight;
        }
    }

    function getFormattedTimestamp(commentTime, currentTime) {
        var diffMilliseconds = currentTime - commentTime;
        var diffSeconds = Math.floor(diffMilliseconds / 1000);
        var diffMinutes = Math.floor(diffSeconds / 60);
        var diffHours = Math.floor(diffMinutes / 60);
        var diffDays = Math.floor(diffHours / 24);
        var diffWeeks = Math.floor(diffDays / 7);
        var diffYears = Math.floor(diffDays / 365);
    
        if (diffSeconds < 60) {
            return "방금";
        } else if (diffMinutes < 60) {
            return `${diffMinutes}분 전`;
        } else if (diffHours < 24) {
            return `${diffHours}시간 전`;
        } else if (diffDays < 7) {
            return `${diffDays}일 전`;
        } else if (diffWeeks < 52) {
            return `${diffWeeks}주 전`;
        } else {
            return `${diffYears}년 전`;
        }
    }
});
