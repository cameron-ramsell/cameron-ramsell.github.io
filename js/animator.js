const scrollAnimationManager = {};

scrollAnimationManager._updateElement = function(entry) {
    if(entry.isIntersecting)
        entry.target.classList.add("visible");
}

scrollAnimationManager._intersectCallback = function(entries) {
    entries.forEach(scrollAnimationManager._updateElement)
}

scrollAnimationManager.createObserver = function() {

    console.log("[ANIMATOR] Creating scroll observer");

    let observer = new IntersectionObserver(scrollAnimationManager._intersectCallback, {
        threshold: [ 0.3 ]
    });
    for(let element of document.querySelectorAll(".watch-visible")) {
        observer.observe(element);
    }

}

document.addEventListener("DOMContentLoaded", scrollAnimationManager.createObserver);