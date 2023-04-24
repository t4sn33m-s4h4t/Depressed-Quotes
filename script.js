function showRandomImage() {
  var imageFolder = "./images/"
  var randomImage = Math.floor(Math.random() * 1404) + 1;
  var randomImageUrl = imageFolder +"image"+ randomImage+".jpg";
  var img = document.getElementById("random-image");
  img.src = randomImageUrl;
  img.style.display = "block";
}
