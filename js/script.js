// ==========================================================================
// ==========================================================================
//  preloader
// ========================================================================== 
// ========================================================================== 


// typewriter
// ========================================================================== 

var text = " \\ 'är-tə-məs \\";
var typeWriter;
var index = 0;

typeWriter = setInterval(function() {
	document.querySelector("span.typed-logo").textContent += text[index];

	index += 1;

	if (index > text.length - 1) {
		clearInterval(typeWriter);
	}
}, 250);


// preloader animation
// ========================================================================== 

$(window).load(function() {
	// makes sure the whole site is loaded
	$("#status")
		.delay()
		.fadeOut("slow"); // will first fade out the loading animation
	$("#preloader")
		.delay(5250)
		.fadeOut("slow"); // will fade out the white DIV that covers the website.
});

// ==========================================================================
// ==========================================================================
//  artemis speaker
// ========================================================================== 
// ========================================================================== 

var synth = window.speechSynthesis;

function readOutTerm($termField) {
	var sentence = $termField.text();
	var language = $termField.parent().data("language");
	var statement = new SpeechSynthesisUtterance(sentence);
	statement.lang = language;

	synth.speak(statement);
}

$(".speaker").click(function(e) {
	readOutTerm($(e.currentTarget));
});

// ==========================================================================
// ==========================================================================
//  menu
// ========================================================================== 
// ==========================================================================

var app = function () {
	var body = void 0;
	var menu = void 0;
	var menuItems = void 0;

	var init = function init() {
		body = document.querySelector('body');
		menu = document.querySelector('.menu-icon');
		menuItems = document.querySelectorAll('.nav__list-item');

		applyListeners();
	};

	var applyListeners = function applyListeners() {
		menu.addEventListener('click', function () {return toggleClass(body, 'nav-active');});
	};

	var toggleClass = function toggleClass(element, stringClass) {
		if (element.classList.contains(stringClass))
			element.classList.remove(stringClass);else

				element.classList.add(stringClass);
	};

	init();
}();


// ==========================================================================
// ==========================================================================
//  password access
// ========================================================================== 
// ==========================================================================

(function() {
	//Display overlay on click
	$(".show-prompt-box").click(function(e) {
		e.preventDefault();
		$(".password-overlay, .prompt-box, .prompt-wrap").fadeIn();
	});

	//Fade out overlay and prompt-box
	$(".password-overlay, .close").click(function() {
		$(".password-overlay, .prompt-box").fadeOut();
		$(".code-error").removeClass("is-error");
		e.stopPropagation();
	});

	// password logic
	$(".prompt-box form").submit(function(e) {
		e.preventDefault();
		var codeWord = $(".pwd-js").val();

		if (codeWord.toLowerCase() == "m3mb3r@cc3$$") {
			location.href = "https://www.artemis.house/experience.html";
		} else {
		}
	});
})();


// ==========================================================================
// ==========================================================================
//  about overlay
// ========================================================================== 
// ==========================================================================
(function() {
	//Display overlay on click
	$(".show-prompt-box-about").click(function(e) {
		e.preventDefault();
		$(".about-overlay, .about-box, .about-wrap").fadeIn();
	});

	//Fade out overlay and prompt-box
	$(".about-overlay, .close").click(function() {
		$(".about-overlay, .about-box").fadeOut();
		$(".code-error").removeClass("is-error");
		e.stopPropagation();
	});

})();

















// ************************************
// NOT CONFIRMED
// ************************************


// experience panels
// ************************************





// experience PREVIEWS
// ************************************

