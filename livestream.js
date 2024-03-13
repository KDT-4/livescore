document.addEventListener('DOMContentLoaded', function() {

    var chatInput = document.getElementById('chatInput');
    var sendButton = document.getElementById('sendButton');
    var chatsContainer = document.getElementById('chatContainer');

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

    backLink.addEventListener('click', function() {
        window.history.back();
    });

    sendButton.addEventListener('click', function() {
      sendChat();
    });

    chatInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        sendChat();
      }
  });

  window.onload = loadChat;

    function loadChat() {
          livechat.forEach(chat => {
          var newChat = document.createElement('div');
          newChat.classList.add('chat');
  
          var chatIcon = document.createElement('img');
          chatIcon.src = 'src/profile.png';
          chatIcon.classList.add('chat-icon');
  
          var chatContent = document.createElement('div');
          chatContent.classList.add('chat-text');
          chatContent.textContent = chat.content;

          newChat.appendChild(chatIcon);
          newChat.appendChild(chatContent);
  
          chatsContainer.appendChild(newChat);
      });

      chatsContainer.scrollTop = chatsContainer.scrollHeight;
    }

    function sendChat() {
      let chatText = chatInput.value.trim();

      if (chatText.length > 300) {
        chatText = chatText.substring(0, 300);
      }

        if (chatText !== '') {
            chatInput.value = '';

            var newChat = document.createElement('div');
            newChat.classList.add('chat');

            var chatIcon = document.createElement('img');
            chatIcon.src = 'src/profile.png';
            chatIcon.classList.add('chat-icon');

            var chatContent = document.createElement('div');
            chatContent.classList.add('chat-text');
            chatContent.textContent = chatText;

            newChat.appendChild(chatIcon);
            newChat.appendChild(chatContent);

            chatsContainer.appendChild(newChat);

            chatsContainer.scrollTop = chatsContainer.scrollHeight;
        }
    }
});
