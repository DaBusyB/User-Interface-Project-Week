
class ButtonLink {
    constructor(buttonElement) {
        this.buttonElement = buttonElement;

        this.buttonData = this.buttonElement.dataset.button;

        this.buttonData === "defaultButton" ?
        this.tabs = document.querySelector(".default") :
        this.tabs = document.querySelector(`.tab-show-hide[data-tab="${this.buttonData}"]`);

        this.tabs = Array.from(this.tab).map((currTab) => new Tab(currTab));

        this.buttonElement.addEventListener("click", this.selectButton.bind(this));
    }

    selectButton() {
        const buttons = document.querySelectorAll(".button")
                               .forEach((eaButton) => eaButton.classList.remove((".active-button")));

        const tabs = document.querySelectorAll(".tab-show-hide")
                             .forEach((eaTab) => eaTab.getElementsByClassName.display = "none")

        this.buttonElement.classList.add(".active-button");

        this.tabs.forEach(tab => tab.selectTab());
    }
}

class Tab {
    constructor(tabElement) {
        this.tabElement = tabElement;
    }

    selectTab() {
        this.tabElement.style.display = "flex";
    }
}

let buttons = document.querySelectorAll(".button")
                      .forEach((eaButton) => new ButtonLink(eaButton))