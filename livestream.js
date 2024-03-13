document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('backButton');

    backButton.addEventListener('click', function() {
      window.location.href = 'livescore.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const chatInput = document.getElementById('chatInput');
  const sendButton = document.getElementById('sendButton');
  const chatsContainer = document.getElementById('chatContainer');

  sendButton.addEventListener('click', function() {
      sendChat();
  });

  chatInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
          sendChat();
      }
  });

  function sendChat() {
      const chatText = chatInput.value.replace(/\n/g, '').trim();

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