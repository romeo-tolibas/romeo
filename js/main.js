

// var slider_img = document.querySelector('.slider-img');
// var images = ['dog.jpg', 'dog1.jpg'];
// var i = 0;

// function prev(){
// 	if(i <= 0) i = images.length;	
// 	i--;
// 	return setImg();			 
// }

// function next(){
// 	if(i >= images.length-1) i = -1;
// 	i++;
// 	return setImg();			 
// }

// function setImg(){
// 	return slider_img.setAttribute('src', "images/"+images[i]);
	
// }

var slider_img = document.querySelector('.slider-img');
var slider_desc = document.querySelector('.slider-desc');

var slides = [
  {
    img: 'dog.jpg',
    title: 'Pet Grooming',
    price: '800',
    details: 'Full grooming service with bath and haircut.',
    link: 'payment.html'
  },
  {
    img: 'dog1.jpg',
    title: 'Pet Haircut',
    price: '400',
    details: 'Haircut for your pet.',
    link: 'payment.html'
  },
  {
    img: 'dog2.jpg',
    title: 'Pet Ear Cleaning',
    price: '300',
    details: 'Ear cleaning for your pet.',
    link: 'payment.html'
  },
  {    
    img: 'dog3.jfif',
    title: 'Pet Nail Trimming',
    price: '300',
    details: 'Nail trimming for your pet.',
    link: 'payment.html'
  }
];

var i = 0;

setImg();

function prev(){
  if(i <= 0) i = slides.length;
  i--;
  setImg();
}

function next(){
  if(i >= slides.length - 1) i = -1;
  i++;
  setImg();
}

function setImg(){
  slider_img.src = "images/" + slides[i].img;


  slider_desc.innerHTML = `
    ${slides[i].title}<br><br>
    Price: ${slides[i].price}<br>
    Details: ${slides[i].details}<br><br>
    <a href="${slides[i].link}" class="pay-btn">For Payment & Booking</a>
  `;
}
