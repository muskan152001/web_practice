const container = document.querySelector('.image-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const images = document.querySelectorAll('.image-container img');


let ImageIndex = 0;

function PreviousImage() {
  if (ImageIndex > 0) {
    ImageIndex--;
  } 
  else {
    ImageIndex = images.length -1 ;
  }

}


function NextImage() {
  if (ImageIndex < images.length - 1) {
    ImageIndex++;
  } else {
    ImageIndex = 0;
  }

}


prevButton.addEventListener('click', PreviousImage);
nextButton.addEventListener('click', NextImage);





