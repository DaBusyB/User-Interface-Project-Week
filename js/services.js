
class TabShow {
    constructor(domElement) {
        this.domElement = domElement;

        this.title = this.domElement.querySelector("h2").textContent;
    }

    showNewTab() {
        this.domElement.classList.toggle(".tab-open");
    }
}

let tabs = document.querySelectorAll