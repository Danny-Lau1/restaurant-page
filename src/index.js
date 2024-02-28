import { createSentences } from "./homepage.js"
import { createMenu } from "./menu.js"
import { createAboutPage } from "./about.js"
import { createVisitUsPage } from "./visit-us.js"

const content = document.getElementById("content")
const homePage = createSentences()
const menuPage = createMenu()
const aboutPage = createAboutPage()
const visitPage = createVisitUsPage()

// initial homepage render
content.appendChild(homePage)


const navButtons = document.querySelectorAll("button")


// putting an event listener on each nav button, and matching the page's id with the correct module
navButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const pageId = event.target.id
        console.log(pageId)
        content.innerHTML = ""
        if (pageId == "menu") {
            content.appendChild(menuPage)
        }

        else if (pageId == "home") {
            content.appendChild(homePage)
        }

        else if (pageId == "about") {
            content.appendChild(aboutPage)
        }
        else if (pageId == "visit") {
            content.appendChild(visitPage)
        }
    })
})


