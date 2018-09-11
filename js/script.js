//*****define values*****\\

//slider\\
let currentSlider = 0;
const SLIDER_ITEMS = document.querySelectorAll('.slider__item');
const AMOUNT_SLIDERS = SLIDER_ITEMS.length;
const MAX_SLIDER = AMOUNT_SLIDERS - 1;

//timer\\
let pause = false;
let timer;

//\\*****end of values*****//\\

//***** event listeners *****\\

//listen to onload to display 1 item \\
window.addEventListener('load', () => {
	//start changeSlider for first time\\
	changeSlider(currentSlider);
	//start timer first time\\
	startTimer()
});

//listen to onclick of next button\\
document.querySelector('.slider__nav--next').addEventListener('click', () => {
	forceSlide(1);
});

//listen to onclick of previous button\\
document.querySelector('.slider__nav--previous').addEventListener('click', () => {
	forceSlide(-1)
});

//listen to onclick of the pause button\\
document.querySelector('.slider__nav--pause').addEventListener('click', () => {
	pauseTimer();
})

//\\*****end listeners*****//\\

//***** functions *****\\

//change slider to command\\
changeSlider = command => {
currentSlider = command;
	//check if slider isn't above max.\\
	if (currentSlider > MAX_SLIDER) {
		currentSlider = 0;
	}

	//check if current slider isn't under min.\\
	if (currentSlider < 0) {
		currentSlider = MAX_SLIDER;
	}

	//turn all div's off\\
	for (let i = 0; i < AMOUNT_SLIDERS; i++) {
		SLIDER_ITEMS[i].style.display = "none";
	}

	//turn the current div on\\
	SLIDER_ITEMS[currentSlider].style.display = "block";
}

//button slide funciton\\
forceSlide = direction => {
	changeSlider(currentSlider += direction);
	//restart timer\\
	restartTimer();
}

//set timer function\\
startTimer = () => {
	timer = setInterval(() => {
		forceSlide(1);
	},
	5000
	);
	document.querySelector('.slider__nav--pause').removeAttribute("style");
 }

//pause timer function\\
pauseTimer = () => {
	//check if pause is active\\
	if (!pause) {
		document.querySelector('.slider__nav--pause').style.WebkitTransition = "2s";
		document.querySelector('.slider__image--pause').src = "img/play.svg";
		pause = true;
		clearInterval(timer);
	} else if (pause) {
		document.querySelector('.slider__image--pause').src = "img/pause.svg";
		pause = false;
		startTimer();
	}
}
//restart timer\\
restartTimer = () => {
	//check if pause is active\\
	if (!pause) {
		clearInterval(timer);
		startTimer();
	}
}

//\\*****end of function*****//\\ 
