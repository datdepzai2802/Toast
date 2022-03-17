var $ = document.querySelector.bind(document);

let suc = $(".btn_toast.success");
let war = $(".btn_toast.warning");
let ero = $(".btn_toast.error");

suc.addEventListener("click", function () {
  slideShow("success_toast");
});

war.addEventListener("click", function () {
  slideShow("warning_toast");
});

ero.addEventListener("click", function () {
  slideShow("error_toast");
});

function slideShow(status) {
  // <div class="toast success_toast">
  //         <i class="fa-solid fa-circle-check"></i>
  //         <h3>Love you Success</h3>
  //     </div>
  //     <div class="toast warning_toast">
  //         <i class="fa-solid fa-circle-exclamation"></i>
  //         <h3>Love you Warning</h3>
  //     </div>
  //     <div class="toast error_toast">
  //         <i class="fa-solid fa-triangle-exclamation"></i>
  //         <h3>Love you Error</h3>
  //     </div>
  let contentElement = `<i class="fa-solid fa-circle-exclamation"></i>
                            <h3>Love you Warning</h3>`;
  switch (status) {
    case "success_toast":
      contentElement = `<i class="fa-solid fa-circle-exclamation"></i>
                        <h3>Love you Warning</h3>`;
      break;
    case "warning_toast":
      contentElement = `<i class="fa-solid fa-circle-check"></i>
                        <h3>Love you Success</h3>`;
      break;
    case "error_toast":
      contentElement = `<i class="fa-solid fa-triangle-exclamation"></i>
                        <h3>Love you Error</h3>`;
      break;
  }

  var toast = document.createElement("div");
  toast.classList.add("toast");
  toast.classList.add(status);
  toast.innerHTML = `${contentElement}`;

  var boxToast = document.querySelector(".box_toast");
  console.dir(boxToast);
  boxToast.appendChild(toast);

  setTimeout(() => {
      toast.style.animation = 'none_toast ease-in-out 1s forwards'
  }, 2000);
  setTimeout(() => {
      toast.remove()
  }, 9000);
}
