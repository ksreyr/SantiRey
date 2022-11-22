var typed = new Typed(".typed", {
	strings: [" Im Software Developer", " Im Sound Engineer", " Im Photographer"],
	typeSpeed: 70,
	backSpeed: 90,
	loop: true,
	smartBackspace: true,
});

var scroll =
	window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
var elementsToShow = document.querySelectorAll(".show-on-scroll");

function loop() {
	elementsToShow.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add("is-visible");
		} else {
			element.classList.remove("is-visible");
		}
	});
	scroll(loop);
}
loop();
//
//JQERY CODE
// Detect request animation frame

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	// special bonus for those using jQuery
	if (typeof jQuery === "function" && el instanceof jQuery) {
		el = el[0];
	}
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 && rect.bottom >= 0) ||
		(rect.bottom >=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <=
				(window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <=
				(window.innerHeight || document.documentElement.clientHeight))
	);
}
