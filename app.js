// --- Grab all the necessary elements from the HTML ---
const form = document.querySelector(".form");
const nameInput = document.querySelector(".name");
const priceInput = document.querySelector(".price");
const cycleInput = document.querySelector(".cycle");
const dateInput = document.querySelector(".date");
const categoryInput = document.querySelector(".category");
const sortInput = document.querySelector(".sort");
const list = document.querySelector(".list");
const amountDisplay = document.querySelector(".amount"); // Renamed to avoid conflict with a variable

// The key we'll use to save data in the browser's local storage
const STORAGE_KEY = 'mySubscriptions'; 

// --- Configuration: Colors for the category tags ---
// NOTE: I kept the 'Entertinment' typo to match your HTML's option value!
const categoryColors = {
    Entertinment: "bg-purple-100 text-purple-700",
    Work: "bg-blue-100 text-blue-700",
    skill: "bg-green-100 text-green-700",
    Sports: "bg-yellow-100 text-yellow-700",
    gym: "bg-red-100 text-red-700" 
};

// --- Data Store: Load existing subscriptions or start with an empty list ---
let subscriptions = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// --- Core Functions ---

// Simple helper function to push data to local storage
function saveSubscriptions() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(subscriptions));
}

// Handles the removal of a subscription by its index in the array
function removeSubscription(index) {
    // .splice() is perfect for removing an item at a specific spot
    subscriptions.splice(index, 1);
    saveSubscriptions();
    renderSubscriptions();
}

// Sorts the main array based on user selection, then re-draws the list
function sortSubscriptions(criteria) {
    switch (criteria) {
        case 'Name':
            // Simple alphabetical sort
            subscriptions.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'Price':
            // Numeric sort (low to high)
            subscriptions.sort((a, b) => a.price - b.price);
            break;
        case 'Renewal Date':
            // Date sort (earliest to latest)
            subscriptions.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        default:
            // No action needed for the "Sort by" default option
            break;
    }
    renderSubscriptions();
}

// The main function that draws the entire list and calculates the total
function renderSubscriptions(){
    list.innerHTML = ""; // Clear the list first!
    let totalMonthlySpend = 0; // Initialize our total for the calculation

    // Go through each subscription to build its card
    subscriptions.forEach((sub, index) => {
        // Calculate the true monthly cost
        const monthlyCost = sub.cycle === "Yearly" ? sub.price / 12 : sub.price;
        totalMonthlySpend += monthlyCost;

        // Date calculation for the 'Due Soon' warning
        const today = new Date();
        const renewalDate = new Date(sub.date); 
        const oneDay = 1000 * 60 * 60 * 24;
        const diffDays = Math.ceil((renewalDate.getTime() - today.getTime()) / oneDay);

        const dueSoon = diffDays <= 7 && diffDays >= 0;

        // Build the card element
        const card = document.createElement("div");
        
        // Use the ternary operator to apply the red border if it's due soon
        const cardClasses = `flex justify-between items-center border p-4 rounded-lg shadow-sm ${
            dueSoon ? "border-red-400 bg-red-50" : "bg-gray-50 border-gray-200"
        }`;
        card.className = cardClasses;

        // Use a template literal for easy HTML structure
        card.innerHTML =`
            <div>
                <p class="font-semibold text-gray-800 flex items-center gap-2">
                    ${sub.name}
                    <span class="px-5 py-2 rounded-full text-sm ${categoryColors[sub.category] || 'bg-gray-200 text-gray-800'}">${sub.category}</span>
                    ${dueSoon ? `<span class="text-red-600 font-bold- text-sm">Due soon</span>` : ""}
                </P>
                <p class="text-md font-bold mt-2">$${sub.price.toFixed(2)} / ${sub.cycle}</P>
                <p class="text-sm text-gray-600 mt-2">Renewal: ${sub.date}</p>
            </div>
            <button class="delete-btn bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition" data-index="${index}">Delete</button>
        `;
        list.appendChild(card);
    });

    // Update the total spend display at the bottom
    amountDisplay.textContent = `${totalMonthlySpend.toFixed(2)}`;

    // Set up the listeners for all the 'Delete' buttons we just created
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            // Grab the index from the button's data attribute
            const index = e.target.getAttribute('data-index');
            // Call our handler function
            removeSubscription(index);
        });
    });
}

// --- Event Listeners (The App's Control Center) ---

// 1. Handle adding a new subscription
form.addEventListener('submit',(e) => {
    e.preventDefault(); // Stop the page from reloading!

    // Collect the data into a neat object
    const newSub = { 
        name: nameInput.value, 
        // Use || 0 to safely handle empty or non-numeric input
        price: parseFloat(priceInput.value) || 0, 
        cycle: cycleInput.value,
        date: dateInput.value,
        category: categoryInput.value,
    };

    subscriptions.push(newSub);
    saveSubscriptions(); // Save the new data
    form.reset(); // Clear the form fields
    renderSubscriptions(); // Show the updated list
});

// 2. Handle sorting the list
sortInput.addEventListener('change', (e) => {
    sortSubscriptions(e.target.value);
});


// --- Initial Load ---
// Kick off the whole process by rendering any existing subscriptions when the page loads
renderSubscriptions();