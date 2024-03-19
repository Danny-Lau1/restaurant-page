import chinese_family from './img/chinese-family.jpeg'

function createAboutPage() {
    const aboutDiv = document.createElement("div")
    aboutDiv.id = "about-page"

    const aboutContainerDiv = document.createElement("div")
    aboutContainerDiv.id = "about-container"

    const aboutImage = document.createElement("img")
    aboutImage.src = chinese_family

    const aboutDescription = document.createElement("p")
    aboutDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, at cumque. Doloribus dolor totam corrupti quaerat quibusdam sint exercitationem magnam quisquam ab porro cumque perspiciatis similique voluptas, mollitia labore provident."

    aboutDiv.appendChild(aboutContainerDiv)
    aboutContainerDiv.appendChild(aboutImage)
    aboutContainerDiv.appendChild(aboutDescription)

    return aboutDiv
}

export { createAboutPage }