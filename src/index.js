import { createSentences } from "./homepage.js"
import { createMenu } from "./menu.js"

const content = document.getElementById("content")
const homePage = createSentences()
const menu = createMenu()

content.appendChild(homePage)
//content.appendChild(menu)

const navButtons = document.querySelectorAll("button")


// putting an event listener on each nav button, and matching the page's id with the correct module
navButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const pageId = event.target.id
        console.log(pageId)
        content.innerHTML = ""
        if (pageId == "menu") {
            content.appendChild(menu)
        }

        else if (pageId == "home") {
            content.appendChild(homePage)
        }

    })
})


