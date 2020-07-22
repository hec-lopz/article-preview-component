const share_action = document.querySelectorAll(".share-icon");
share_action[0].addEventListener("click", shareBox);
share_action[1].addEventListener("click", shareBox);

function shareBox() {
  const user_box = document.querySelector(".user--active");
  if (user_box.classList.contains("move-in")) {
    user_box.classList.remove("move-in");
    user_box.classList.add("move-out");
  } else {
    user_box.classList.remove("move-out");
    user_box.classList.add("move-in");
  }
  console.log("click");
}
