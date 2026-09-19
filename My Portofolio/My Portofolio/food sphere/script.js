// =====================================================
// FOODSPHERE JAVASCRIPT
// =====================================================


// =====================================================
// FOOD DATABASE
// =====================================================

const foods = {

    biryani: {

        name: "Biryani",

        emoji: "🍛",

        description:
            "A flavorful rice dish loved across India and beyond.",

        fact:
            "Biryani is a fragrant rice dish prepared with aromatic spices and usually meat, vegetables, or both. Different regions have their own special versions.",

        calories: "450 kcal",

        protein: "20 g",

        carbohydrates: "55 g",

        fat: "18 g",

        fiber: "3 g",

        ingredients: [
            "Basmati rice",
            "Chicken or vegetables",
            "Onion",
            "Tomato",
            "Ginger",
            "Garlic",
            "Yogurt",
            "Mint",
            "Coriander",
            "Biryani spices"
        ]

    },


    samosa: {

        name: "Samosa",

        emoji: "🥟",

        description:
            "Crispy, spicy and one of India's favorite snacks.",

        fact:
            "Samosa is a popular snack usually filled with spiced potatoes and peas and wrapped in a crispy pastry.",

        calories: "250 kcal",

        protein: "5 g",

        carbohydrates: "30 g",

        fat: "12 g",

        fiber: "3 g",

        ingredients: [
            "Potatoes",
            "Green peas",
            "Flour",
            "Onion",
            "Green chili",
            "Ginger",
            "Cumin",
            "Coriander",
            "Spices"
        ]

    },


    dosa: {

        name: "Dosa",

        emoji: "🥞",

        description:
            "A crispy South Indian classic made from fermented batter.",

        fact:
            "Dosa is traditionally made from fermented rice and lentils and is commonly served with chutney and sambar.",

        calories: "168 kcal",

        protein: "4 g",

        carbohydrates: "28 g",

        fat: "4 g",

        fiber: "2 g",

        ingredients: [
            "Rice",
            "Urad dal",
            "Water",
            "Salt",
            "Oil"
        ]

    },


    pizza: {

        name: "Pizza",

        emoji: "🍕",

        description:
            "A worldwide favorite with countless styles and toppings.",

        fact:
            "Pizza is strongly associated with Italian cuisine, especially the city of Naples.",

        calories: "285 kcal",

        protein: "12 g",

        carbohydrates: "36 g",

        fat: "10 g",

        fiber: "2 g",

        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella cheese",
            "Olive oil",
            "Herbs"
        ]

    },


    burger: {

        name: "Burger",

        emoji: "🍔",

        description:
            "A popular sandwich made with a bun, patty and toppings.",

        fact:
            "Burgers are one of the most widely recognized fast-food dishes in the world.",

        calories: "350 kcal",

        protein: "17 g",

        carbohydrates: "30 g",

        fat: "20 g",

        fiber: "2 g",

        ingredients: [
            "Burger bun",
            "Patty",
            "Lettuce",
            "Tomato",
            "Onion",
            "Cheese",
            "Sauce"
        ]

    },


    idli: {

        name: "Idli",

        emoji: "🍥",

        description:
            "Soft steamed cakes made from fermented rice and lentils.",

        fact:
            "Idli is a popular South Indian breakfast food and is traditionally steamed.",

        calories: "60 kcal",

        protein: "2 g",

        carbohydrates: "12 g",

        fat: "1 g",

        fiber: "1 g",

        ingredients: [
            "Rice",
            "Urad dal",
            "Water",
            "Salt"
        ]

    }

};


// =====================================================
// GET FOOD FROM URL
// =====================================================

function getFoodFromURL() {

    const urlParams =
        new URLSearchParams(window.location.search);

    const foodName =
        urlParams.get("food");

    if (!foodName) {
        return null;
    }

    return foodName.toLowerCase().trim();

}


// =====================================================
// DISPLAY FOOD
// =====================================================

function displayFood() {

    const foodId = getFoodFromURL();

    console.log("Food requested:", foodId);


    // -----------------------------------------------
    // No food was selected
    // -----------------------------------------------

    if (!foodId || !foods[foodId]) {

        document.getElementById("foodName").textContent =
            "Food not found";

        document.getElementById("foodDescription").textContent =
            "Please go back and select a food.";

        document.getElementById("foodFact").textContent =
            "No food was selected.";

        return;
    }


    // -----------------------------------------------
    // Get correct food
    // -----------------------------------------------

    const food = foods[foodId];


    // -----------------------------------------------
    // Food name
    // -----------------------------------------------

    document.getElementById("foodName").textContent =
        food.name;


    // -----------------------------------------------
    // Food emoji
    // -----------------------------------------------

    document.getElementById("foodEmoji").textContent =
        food.emoji;


    // -----------------------------------------------
    // Description
    // -----------------------------------------------

    document.getElementById("foodDescription").textContent =
        food.description;


    // -----------------------------------------------
    // Interesting fact
    // -----------------------------------------------

    document.getElementById("foodFact").textContent =
        food.fact;


    // -----------------------------------------------
    // Nutrition
    // -----------------------------------------------

    document.getElementById("calories").textContent =
        food.calories;

    document.getElementById("protein").textContent =
        food.protein;

    document.getElementById("carbohydrates").textContent =
        food.carbohydrates;

    document.getElementById("fat").textContent =
        food.fat;

    document.getElementById("fiber").textContent =
        food.fiber;


    // -----------------------------------------------
    // Ingredients
    // -----------------------------------------------

    const ingredientsList =
        document.getElementById("ingredients");

    ingredientsList.innerHTML = "";


    food.ingredients.forEach(function (ingredient) {

        const li =
            document.createElement("li");

        li.textContent = ingredient;

        ingredientsList.appendChild(li);

    });


    // -----------------------------------------------
    // Browser title
    // -----------------------------------------------

    document.title =
        food.name + " - FoodSphere";

}


// =====================================================
// SEARCH FOOD
// =====================================================

function searchFood() {

    const input =
        document.getElementById("searchInput");

    const message =
        document.getElementById("searchMessage");


    const searchText =
        input.value.toLowerCase().trim();


    // -----------------------------------------------
    // Empty search
    // -----------------------------------------------

    if (searchText === "") {

        message.textContent =
            "Please enter a food name.";

        return;
    }


    // -----------------------------------------------
    // Find food
    // -----------------------------------------------

    let foundFood = null;


    for (const foodId in foods) {

        const food =
            foods[foodId];

        const name =
            food.name.toLowerCase();


        if (
            name === searchText ||
            name.includes(searchText)
        ) {

            foundFood = foodId;

            break;
        }

    }


    // -----------------------------------------------
    // Food not found
    // -----------------------------------------------

    if (!foundFood) {

        message.textContent =
            "Food not found. Try Biryani, Samosa, Dosa, Pizza, Burger or Idli.";

        return;
    }


    // -----------------------------------------------
    // Open CORRECT food page
    // -----------------------------------------------

    window.location.href =
        "food.html?food=" + foundFood;

}


// =====================================================
// PAGE INITIALIZATION
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // -------------------------------------------
        // Are we on food.html?
        // -------------------------------------------

        if (
            window.location.pathname
                .toLowerCase()
                .endsWith("food.html")
        ) {

            displayFood();

        }


        // -------------------------------------------
        // Search button
        // -------------------------------------------

        const searchButton =
            document.getElementById("searchButton");


        if (searchButton) {

            searchButton.addEventListener(
                "click",
                searchFood
            );

        }


        // -------------------------------------------
        // Enter key in search box
        // -------------------------------------------

        const searchInput =
            document.getElementById("searchInput");


        if (searchInput) {

            searchInput.addEventListener(
                "keydown",
                function (event) {

                    if (event.key === "Enter") {

                        searchFood();

                    }

                }
            );

        }

    }
);