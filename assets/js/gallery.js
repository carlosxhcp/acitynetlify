var images = document.getElementsByTagName("img");

for (var i = 0; i < images.length; i++) {
  images[i].onmouseover = function() {
    this.style.cursor = "hand";
    this.style.borderColor = "gray";
  };
  images[i].onmouseout = function() {
    this.style.cursor = "pointer";
    this.style.borderColor = "black";
  };
}

function changeImageOnClick(event) {
  // debugger;
  var targetElement = event.srcElement;
  // debugger;
  if (targetElement.tagName === "IMG") {
    mainImage.src = targetElement.getAttribute("src");
  }
}
