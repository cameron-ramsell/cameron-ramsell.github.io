
const portfolioManager = {};

portfolioManager._parentElement = null;
portfolioManager._headerElement = null;

portfolioManager._activeTab = "all";

portfolioManager.setDOMElement = function(parentElement, headerElement) {

	this._parentElement = parentElement;
	this._headerElement = headerElement;

	this._registerEvents();

}

portfolioManager.setTab = function(name) {

	this._setActiveElement(name);
	this._activeTab = name;

	this._parentElement.querySelectorAll(".pf-elem")
			.forEach((elem) => {
		
		if(elem.dataset.type === name || name === "all")
			elem.dataset.active = true;
		else
			elem.dataset.active = false;

	});

};

portfolioManager._registerEvents = function() {

	let container = this._headerElement.querySelector(".right");
	let tabButtons = container.querySelectorAll("span");

	tabButtons.forEach(d => {

		let name = d.dataset.tab;
		d.addEventListener("click", (e) => this.setTab(name));

	});

}

portfolioManager._setActiveElement = function(name) {
	
	let container = this._headerElement.querySelector(".right");
	let tabButtons = container.querySelectorAll("span");
	
	tabButtons.forEach(d => d.className = "");

	let selectedElement = Array.from(tabButtons)
				.find(d => d.dataset.tab === name);

	selectedElement.className = "selected";

};

(() => {

	portfolioManager.setDOMElement(document.getElementById("pfContainer"),
									document.getElementById("pfHeader"));

	console.log("[PORTFOLIO] Starting portfolio manager...");

})();