document.addEventListener('DOMContentLoaded', () => {


    const chatBox = document.getElementById('chat-box');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');


    sendButton.addEventListener('click', () => {

        const message = messageInput.value.trim();
        if (message !== '') {

            appendMessage('You', message);
            messageInput.value = '';
        }
    });

    function appendMessage(sender, message) {


        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<string>${sender}</string> ${message}`;
        chatBox.appendChild(messageElement);

chatBox.scrollTop = chatBox.scrollHeight;
    }




})