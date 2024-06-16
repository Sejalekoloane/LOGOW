document
  .getElementById("submit-name-button")
  .addEventListener("click", function () {
    var nameInput = document
      .getElementById("name-input")
      .value.trim()
      .toLowerCase();
    var errorMessage = document.getElementById("error-message");
    var mainContent = document.getElementById("main-content");
    var nameFormContainer = document.getElementById("name-form-container");
    var sorryMessage = document.getElementById("sorry-message");

    if (nameInput === "") {
      errorMessage.classList.remove("hidden");
    } else {
      errorMessage.classList.add("hidden");
      nameFormContainer.classList.add("hidden");

      if (nameInput === "tummy lekoloane") {
        mainContent.classList.remove("hidden");

        // Insert the birthday message here
        var messageList = document.getElementById("messages-list");
        var listItem = document.createElement("li");
        listItem.textContent =
          "Happy birthday bro! Wishing you all the best in the year ahead and always. I'm so grateful to have a brother like you, I'd choose to be your little sister again in another lifetime. May each day bring you closer to your dreams, and may the Almighty grant you the desires of your heart.I truly cherish our bond and the memories we've created together... I love and appreciate you so much.❤️ Dikhekhe dikhekhe ngwana samma 😂🎶";
        messageList.appendChild(listItem);
      } else {
        sorryMessage.classList.remove("hidden");
      }
    }
  });

document
  .getElementById("surprise-button")
  .addEventListener("click", function () {
    var message = document.getElementById("surprise-message");
    if (message.classList.contains("hidden")) {
      message.classList.remove("hidden");
    } else {
      message.classList.add("hidden");
    }
  });
