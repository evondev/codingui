export default function (dom) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.querySelector(dom));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.querySelector(dom));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
}
