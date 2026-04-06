let images = [
  "../images/produit1-1.jpg",
  "../images/produit1-2.jpg",
  "../images/produit1-3.jpg"
];

let index = 0;

function nextImage() {
  index = (index + 1) % images.length;
  document.getElementById("mainImage").src = images[index];
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