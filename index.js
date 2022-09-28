const headerPanel = document.querySelector("header");
const mainPanel = document.querySelector("main");
const navButton = document.querySelector(".top-panel #nav-button");

const navItems = document.querySelectorAll("nav .nav-item");

var navIsOpen = false;

navButton.addEventListener("click", () => {
	
	headerPanel.style.display = "unset";
	headerPanel.style.visibility = "unset";
	
	mainPanel.style.marginLeft = "60vw";
	
	navButton.style.display = "none";
	navButton.style.visibility = "hidden";
	
	navIsOpen = true;
});

navItems.forEach(item => item.addEventListener("click", closeNav));


function closeNav() {	
	if (navIsOpen) {
		headerPanel.style.display = "none";
		headerPanel.style.visibility = "hidden";
		
		mainPanel.style.marginLeft = "0";
		
		navButton.style.display = "unset";
		navButton.style.visibility = "unset";		
		
		navIsOpen = false;
	}
}