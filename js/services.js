
// class Tab {
//     constructor(domElement) {
//         this.domElement = domElement;

//         this.title = this.domElement.querySelector("h2").textContent;
//     }

//     showNewTab() {
//         this.domElement.classList.toggle(".tab-open");
//     }
// }

// class Button extends Tab {
//     constructor(domElement) {
//         super(domElement);

//         this.domElement = domElement

//         this.domElement.addEventlistener("click", )

//     }
// }

// let servicesTab = document.querySelectorAll(".services-tabs .tab-show");
// let tabButton = document.querySelectorAll('button');

// servicesTab.forEach(function(currentSvcTab) {
//     return new Tab(currentSvcTab)
// });

// servicesBtn.forEach(function(currentSvcBtom) {
//     return new Tab(currentSvcBtn)
// });

const tabTitle = document.querySelectorAll('h2');
const buttons = document.querySelectorAll("button");

[...buttons].forEach((button) => {
    button.addEventListener("click", (event) => {
        //console.log(button.textContent)
        
        showTab = document.querySelector(".tab-show");

        [...tabTitle].forEach((title) => {
            let targetTab = title.parentNode.parentNode.parentNode;
            title.textContent === button.textContent &&
            targetTab.classList.toggle("tab-show")
        }); 
    });
});

