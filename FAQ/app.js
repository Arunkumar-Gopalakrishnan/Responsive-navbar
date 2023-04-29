//using selectors inside the element

const questionSection = document.querySelectorAll(".question");
console.log(questionSection);
questionSection.forEach(function (element) {
  console.log(element);
  let buttonAccess = element.querySelector(".question-btn");
  console.log(buttonAccess);
  buttonAccess.addEventListener("click", function () {
    element.classList.toggle("show-text");
  });
});

// traversing the dom

// let accessingButton = document.querySelectorAll(".question-btn");
// console.log(accessingButton);
// accessingButton.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     console.log(e.currentTarget.parentElement.parentElement);
//     console.log(e.target);
//     let addClassList = e.currentTarget.parentElement.parentElement;
//     addClassList.classList.toggle("show-text");
//     console.log(addClassList);
//   });
// });
