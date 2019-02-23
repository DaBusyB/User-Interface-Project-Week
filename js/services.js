class ButtonLink {
    constructor(buttonElement) {
        this.buttonElement = buttonElement;

        this.buttonData = this.buttonElement.dataset.button;
       
        if(this.buttonData === "defaultButton") {
            this.tabs = document.querySelector(".active-button")
        } else {
            this.tabs = document.querySelector(`.tab-show-hide[data-tab="${this.buttonData}"]`);
        }

        this.tabs = new Tab(this.tabs);

        this.buttonElement.addEventListener("click", this.selectButton.bind(this));
    }

    selectButton() { 
        // this.tabs = document.querySelectorAll(`.tab-show-hide[data-tab="${this.buttonData}"]`)

        // let tab = document.querySelectorAll(".tab-show-hide")
        //                     .forEach((eaTab) => {
        //                     eaTab.style.display = "none";
        //                     eaTab.classList.remove("default");
        //                     this.tabs.classList.add("default")
        //                     });

        const tabs = document.querySelectorAll(".tab-show-hide")
                             .forEach((eaTab) => eaTab.style.display = "none");

        this.tabs.selectTab();                    
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