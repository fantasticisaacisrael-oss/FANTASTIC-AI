function sendMessage() {
  const input = document.getElementById("message");
  const chat = document.getElementById("chat");

  const message = input.value.trim();

  if (message === "") {
    alert("Please type a message!");
    return;
  }

  const userMessage = document.createElement("p");
  userMessage.textContent = "You: " + message;
  chat.appendChild(userMessage);

  const aiMessage = document.createElement("p");
  aiMessage.textContent =
    "FANTASTIC AI: Thank you! Real AI connection is coming soon.";
  chat.appendChild(aiMessage);

  input.value = "";
}
