const share_action = document.querySelector(".share-icon");
share_action.addEventListener("click", shareBox);

function shareBox() {
  const user_box = document.querySelector(".user");
  if (user_box.classList.contains("user--active")) {
    user_box.classList.remove("user--active");
    // user_box.setAttribute("style", "animation-name: move-in;");
  } else {
    user_box.classList.add("user--active");
    user_box.setAttribute("style", "");
  }
  console.log("click");
}
