import fish from './img/fish.jpg'
import mapo_tofu from './img/mapo-tofu.jpg'
import peking_duck from './img/peking-duck.jpg'
import rice from './img/rice.jpg'
import soup_dumpling from './img/soup-dumplings.jpg'
import spicy_noodle from './img/spicy-noodle.jpg'


function createMenu() {
    const foodContainerDiv = document.createElement("div")
    foodContainerDiv.id = "food-container"

    for (let i = 0; i < 3; i++) {
        const foodRowDiv = document.createElement("div")
        foodRowDiv.className = "food-rows"

        const foodContents = createFoodCard(i)

        foodContents.forEach(dish => {
            foodRowDiv.appendChild(dish)
        })

        foodContainerDiv.appendChild(foodRowDiv)
    }
    return foodContainerDiv
}

function createFoodCard(index) {
    const foodDescriptions = [
        "Traditional Southern Fish",
        "Spicy Mapo Tofu",
        "Peking Duck",
        "Fried Rice",
        "Soup Dumplings",
        "Spicy Beef Noodles"
    ]


    const foodImageSources = [
        fish,
        mapo_tofu,
        peking_duck,
        rice,
        soup_dumpling,
        spicy_noodle
    ]


    let dishes = []

    for (let j = 0; j < 2; j++) {
        const foodCard = document.createElement("div")
        foodCard.className = "food-card"

        const foodImage = document.createElement("img")
        foodImage.src = foodImageSources[index * 2 + j]

        foodCard.appendChild(foodImage)

        const foodDescriptor = document.createElement("p")
        foodDescriptor.textContent = foodDescriptions[index * 2 + j]

        foodCard.appendChild(foodDescriptor)
        dishes.push(foodCard)
    }
    return dishes
}

export { createMenu }