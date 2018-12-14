window.onload = function(event){

  var slider1 = new Slider({
    sliderClassname: '.slider-1',
    btnPrev: '.prev',
    btnNext: '.next',
  });

  var slider2 = new Slider({
    sliderClassname: '.slider-2',
    btnPrev: '.prev',
    btnNext: '.next',
    autoPlay: true,
    speed: 2500,
  });

  var slider2 = new Slider({
    sliderClassname: '.slider-1',
    btnPrev: '.prev',
    btnNext: '.next',
  });
  
  slider1;
  slider2;
}

function Slider({
  sliderClassname, 
  btnPrev, 
  btnNext, 
  autoPlay, 
  speed
}) { 
  const _ = this;
  _.activeClass = 'is-active';
  _.autoPlay = autoPlay || false;
  _.speed = speed || 1000;

  console.log(_.speed);

  _.images = document.querySelectorAll(`${sliderClassname} .images img`);
  _.btnPrev = document.querySelector(`${sliderClassname} .buttons ${btnPrev}`);
  _.btnNext = document.querySelector(`${sliderClassname} .buttons ${btnNext}`);

  let i = 0;

  _.prevSlide = () => {
    _.images[i].classList.remove(_.activeClass);
    i!==0 ? i-- : i = _.images.length - 1;
    _.images[i].classList.add(_.activeClass);
  }

  _.btnPrev.onclick = _.prevSlide;
  
  _.nextSlide = () => {
    _.images[i].classList.remove(_.activeClass);
    i !== _.images.length - 1 ? i++ : i = 0;
    _.images[i].classList.add(_.activeClass);
  }

  _.btnNext.onclick = _.nextSlide;

  _.autoPlayStart = () => {
    _.btnPrev.style.display = 'none';
    _.btnNext.style.display = 'none';

    setInterval(_.nextSlide, _.speed);
  }

  _.autoPlay ? _.autoPlayStart() : null;
}
