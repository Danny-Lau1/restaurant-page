function createSentences() {

    const imageContainerDiv = document.createElement("div")
    imageContainerDiv.id = "image-container"

    const textOverLayDiv = document.createElement("div")
    textOverLayDiv.id = "text-overlay"

    const sentences = [
        "Experience the taste of China right here in your neighborhood.",
        "Dim-Yum! is an authentic southern Chinese restaurant serving traditional dim sum with the freshest ingredients.",
        "Our mission is spread our love of homecooked meals with true Chinese taste and hospitality."
    ];

    sentences.forEach(sentence => {
        const sentenceParagraph = document.createElement("p")
        sentenceParagraph.textContent = sentence
        textOverLayDiv.appendChild(sentenceParagraph)
    })

    imageContainerDiv.appendChild(textOverLayDiv)

    return imageContainerDiv
}

export { createSentences }
