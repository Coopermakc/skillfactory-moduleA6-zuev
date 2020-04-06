const buttons = $("button");
let progress = $(".progress-bar");

function addProgress(id) {
  width = parseInt(progress[0].style["width"]);
  if (width < 100) {
    width += id;
    progress[0].style["width"] = width + '%';
  } else {
    progress[0].style["width"] = 0 + '%';
  }

}

function init() {
 Array.from(buttons).forEach(function(btn) {
   btn.addEventListener("click", function(event) {
     addProgress(parseInt(btn.id));
   });
 });
 console.log('scrirt is loaded')
}

$(document).ready(init);
