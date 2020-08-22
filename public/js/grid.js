window.addEventListener("load", function () {
  const items = document.querySelectorAll(".grid__item");
  let x = 0;
  let y = 0;
  const gap = 0;
  const itemPerRow = 7;
  const container = document.body.clientWidth - gap * 6;
  const itemWidth = Math.ceil(container / itemPerRow);
  items.forEach((el) => (el.style.width = itemWidth + "px"));

  for (let index = 0; index < items.length; index++) {
    const element = items[index];
    element.style.left = x + "px";
    element.style.top = y + "px";
    if (index > 0 && index < itemPerRow) {
      x = x + items[index - 1].offsetWidth + gap;
      element.style.left = x + "px";
      element.style.top = y + "px";
    } else if (index >= itemPerRow) {
      x = items[index - itemPerRow].offsetLeft;
      y =
        items[index - itemPerRow].offsetHeight +
        items[index - itemPerRow].offsetTop;
      element.style.left = x + "px";
      element.style.top = y + gap + "px";
    }
  }
});
