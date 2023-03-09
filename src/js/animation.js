const INCREASE_NUMBER_ANIMATION_SPEED = 100;
const advantagesContainer = document.querySelector('.advantages__container')

function increaseNumberAnimationStep (i, element, endNumber, step, sign) {
	if (i <= endNumber) {
		if (i === endNumber) {
			element.innerText = i.toFixed(0) + sign;
		} else {
			element.innerText = i.toFixed(1);
			setTimeout(function() {
				increaseNumberAnimationStep(i, element, endNumber, step, sign);
			}, INCREASE_NUMBER_ANIMATION_SPEED)
		}
		i = i + step;
	}
	return 0;
}

function initIncreaseNumberAnimation() {
	let percents = document.querySelector('.advantages__percents');
	let sales = document.querySelector('.advantages__sales');
	let customars = document.querySelector('.advantages__customar');
	const plus = 'М+';
	const percent = '%'
		increaseNumberAnimationStep(0, percents, 100, 5, percent);
		increaseNumberAnimationStep(0, sales, 2, 0.11, plus);
		increaseNumberAnimationStep(0, customars, 1.9, 0.11, plus);
}


const mutationConfig = { attributes: true};

let onMutate = function(mutationsList) {
	mutationsList.forEach(() => {
		if (advantagesContainer.classList.contains('_active')) {
			initIncreaseNumberAnimation();
		}
	});
};

let observer = new MutationObserver(onMutate);
observer.observe(advantagesContainer, mutationConfig);

