var sliderImages= Array.from(document.querySelectorAll('.slider-container img'));

var slidesCount= sliderImages.length;

var currentSlide=1;

var slideNumberElement=document.getElementById('slide-number');

var nextButton=document.getElementById('next');
var prevButton=document.getElementById('prev');


nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

var paginationElement=document.createElement('ul');
paginationElement.setAttribute('id','pagination-ul');

for(var i=1;i<=slidesCount;i++){

    var paginationItem=document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));

    paginationElement.appendChild(paginationItem);
}

document.getElementById('indicators').appendChild(paginationElement);


var paginationCreateUl=document.getElementById('pagination-ul');

var paginationBullets=Array.from(document.querySelectorAll('#pagination-ul li'));

for(var i=0;i<paginationBullets.length;i++){

    paginationBullets[i].onclick=function(){
        currentSlide=parseInt(this.getAttribute('data-index'));
        theCheckar();
    }
}


theCheckar();


function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        return false;
    }
    else{
        currentSlide++;
        theCheckar();
    }
}
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        return false;
    }
    else{
        currentSlide--;
        theCheckar();
    }
}
function theCheckar(){
    slideNumberElement.textContent='slide # '+(currentSlide)+' of '+(slidesCount);

    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('active');
    paginationCreateUl.children[currentSlide-1].classList.add('active');

    if(currentSlide == 1){
        prevButton.classList.add('disabled');
    }
    else{
        prevButton.classList.remove('disabled');
    }

    if(currentSlide==slidesCount){
        nextButton.classList.add('disabled');
    }
    else{
        nextButton.classList.remove('disabled');
    }
}
function removeAllActive(){
    sliderImages.forEach(function(img){
        img.classList.remove('active');
    });

    paginationBullets.forEach(function(bullet){
        bullet.classList.remove('active')
    });
}