var lst = ["corn", "soe", "wolf"]

for (var i = 0; i < lst.length; i++) {
  const gif_source = "./pics/" + lst[i] + ".gif"
  const img_source = "./pics/" + lst[i] + ".png"
  const elem = document.getElementById(lst[i]);
  elem.addEventListener("mouseenter", () => {
    elem.src = gif_source;
    elem.style.boxShadow = "4px 4px 15px rgba(0, 0, 0, 0.5)";
  });

  // When the mouse leaves the image, change the image source back to the original
  elem.addEventListener("mouseleave", () => {
    elem.src = img_source;
    elem.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.5)";
  });

}

