let images = [];

let index = 0;

function showImage() {
  const img = document.getElementById("mainImage");
  img.src = images[index];
}


function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  document.getElementById("mainImage").src = images[index];
}

function changePrice(price, element) {
  document.getElementById("price").innerText = price + "€";

  document.querySelectorAll(".sizes button").forEach(btn => {
    btn.classList.remove("active");
  });

  element.classList.add("active");
}