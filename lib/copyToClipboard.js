export default function (str) {
  const el = document.createElement("textarea");
  el.value = str.trim();
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  const template = `
	<div class="sweet-noti">
  <i class="fa fa-check-circle sweet-noti__icon"></i>
        <div class="sweet-noti__content">
          <h3 class="sweet-noti__title">Thông báo</h3>
          <p class="sweet-noti__message">Copy code thành công</p>
        </div>
      </div>`;
  document.getElementById("__next").insertAdjacentHTML("afterbegin", template);
  setTimeout(function () {
    const prevItem = document.body.querySelector(".sweet-noti");
    if (prevItem) {
      prevItem.parentNode.removeChild(prevItem);
    }
  }, 2100);
}
