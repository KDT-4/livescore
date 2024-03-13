document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('backButton');

    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const chatsContainer = document.getElementById('chatContainer');

    backButton.addEventListener('click', function() {
      window.location.href = 'livescore.html';
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
          const newChat = document.createElement('div');
          newChat.classList.add('chat');
  
          const chatIcon = document.createElement('img');
          chatIcon.src = 'src/profile.png';
          chatIcon.classList.add('chat-icon');
  
          const chatContent = document.createElement('div');
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

            const newChat = document.createElement('div');
            newChat.classList.add('chat');

            const chatIcon = document.createElement('img');
            chatIcon.src = 'src/profile.png';
            chatIcon.classList.add('chat-icon');

            const chatContent = document.createElement('div');
            chatContent.classList.add('chat-text');
            chatContent.textContent = chatText;

            newChat.appendChild(chatIcon);
            newChat.appendChild(chatContent);

            chatsContainer.appendChild(newChat);

            chatsContainer.scrollTop = chatsContainer.scrollHeight;
        }
    }
});
