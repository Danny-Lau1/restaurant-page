function createVisitUsPage() {
    const visitPage = document.createElement("div")
    visitPage.id = "visit-page"

    const headLines = [
        "Daily Hours",
        "Location",
        "Contact"
    ]

    const hours = [
        "11am-3pm Lunch",
        "3-5pm Afternoon Delight",
        "5-9:30pm Dinner"
    ]

    const location = [
        "123 Fake Street",
        "Fake City, Fake State"
    ]

    const contact = [
        "dnnlau@gmail.com"
    ]

    const hoursRow = createVisitRow(headLines[0], hours)
    const locationRow = createVisitRow(headLines[1], location)
    const contactRow = createVisitRow(headLines[2], contact)

    visitPage.appendChild(hoursRow)
    visitPage.appendChild(locationRow)
    visitPage.appendChild(contactRow)

    return visitPage
}

function createVisitRow(headline, informationArray) {
    const row = document.createElement("div")
    row.className = "visit-row"
    const titleRow = document.createElement("h2")
    titleRow.textContent = headline
    row.appendChild(titleRow)

    informationArray.forEach(element => {
        const contactInfo = document.createElement("p")
        contactInfo.textContent = element
        row.appendChild(contactInfo)
    })

    return row
}

export { createVisitUsPage }