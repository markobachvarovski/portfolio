const seeMoreBtn = document.querySelector(".see-more-btn");
const hiddenFields = document.getElementsByClassName("see-more-hidden");
const body = document.querySelector("body");

export default function seeMoreButtonListener() {
  console.log("FROM LISTENER");

  // hiddenFields[0].style.display = "none";

  // body.addEventListener("load", (e) => {
  //   hiddenFields[0].style.display = "none";
  // });

  seeMoreBtn.addEventListener("click", (e) => {
    console.log("clicked from listener");

    if (seeMoreBtn.innerHTML === "See more") {
      hiddenFields[0].style.display = "flex";
      seeMoreBtn.innerHTML = "See less";
    } else {
      hiddenFields[0].style.display = "none";
      seeMoreBtn.innerHTML = "See more";
    }
  });
}
