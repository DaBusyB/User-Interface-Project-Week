
class ButtonLink {
    constructor(buttonElement) {
        this.buttonElement = buttonElement;

        this.tabData = this.buttonElement.dataset.button;

        this.tab = document.querySelectorAll(`.tab[data-tab="${this.tabData}"]`);

        this.tab = Array.from(this.tab).map((currTab) => new Tab(currTab));

        this.buttonElement.addEventListener("click", this.selectButton.bind(this));
    }

    selectButton() {
        const button = document.querySelectorAll(".button")
                               .forEach((eaButton) => eaButton.classList.remove((".active-button")));

        const tabs = document.querySelectorAll(".tab")
                             .forEach((eaTab) => eaTab.getElementsByClassName.display = "none")

        this.buttonElement.classList.add(".active-button");

        this.tab.forEach(tab => tab.selectTab());
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