class ButtonLink {
    constructor(buttonElement) {
        this.buttonElement = buttonElement;

        this.buttonData = this.buttonElement.dataset.button;
        console.log(this.buttonData)
        


        this.buttonElement.addEventListener("click", this.selectButton.bind(this));
    }

    selectButton() { 
        //let tabData = document.querySelector(".tab-show-hide")
        //console.log(tabData)

        let tabs = document.querySelectorAll(".tab-show-hide")
                            .forEach((eaTab) => {
                            eaTab.style.display = "none";
                            eaTab.classList.remove("default");
                            tabData.classList.add(".default");
                            });

    }
}


let buttons = document.querySelectorAll(".button")
                      .forEach((eaButton) => new ButtonLink(eaButton))




// class ButtonLink {
//     constructor(buttonElement) {
//         this.buttonElement = buttonElement;

//         this.buttonData = this.buttonElement.dataset.button;

//         this.buttonData === "defaultButton" ?
//         this.tabs = document.querySelector(".default") :
//         this.tabs = document.querySelector(`.tab-show-hide[data-tab="${this.buttonData}"]`);

//         // this.tabs = new Tab();

//         this.buttonElement.addEventListener("click", this.selectButton.bind(this));
//     }

//     selectButton() {
//         const button = document.querySelectorAll(".button")
//                                .forEach((eaButton) => eaButton.classList.remove((".active-button")));

//         const tab = document.querySelectorAll(".tab-show-hide")
//                              .forEach((eaTab) => eaTab.style.display = "none");
                                 
//         this.buttonElement.classList.add(".active-button");

        
       
//     }
// }

// // class Tab {
// //     constructor(tabElement) {
// //         this.tabElement = tabElement;
// //     }

// //     selectTab() {
// //         this.tabElement.style.display = "flex";
// //     }
// // }

// let buttons = document.querySelectorAll(".button")
//                       .forEach((eaButton) => new ButtonLink(eaButton))