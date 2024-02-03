// Define an array of possible button IDs
var buttonIds = ['#load_more', '#hash_load_more', '#search_load_more'];

// Initialize the button variable
var loadMoreButton;

// Iterate through the possible button IDs
for (var i = 0; i < buttonIds.length; i++) {
    // Try to select the button with the current ID
    var potentialButton = document.querySelector(buttonIds[i]);

    // If the button was found, store it in the loadMoreButton variable and break the loop
    if (potentialButton) {
        loadMoreButton = potentialButton;
        break;
    }
}

// If no button was found, throw an error
if (!loadMoreButton) {
    throw new Error('No Load More button found.');
}

// Define a function to handle clicking the "Load More" button
function clickLoadMore() {
    if (loadMoreButton) {
        // Scroll to the bottom of the page
        window.scrollTo(0, document.body.scrollHeight);

        // Click the "Load More" button
        loadMoreButton.click();

        // Set a timeout to check if the button still exists after the page updates
        setTimeout(function() {
            if (!document.querySelector(buttonIds.join(', '))) {
                console.log('No more videos to load.');
            } else {
                // If the button still exists, click it again after a delay
                setTimeout(clickLoadMore, 3500); // Adjust this delay as needed
            }
        }, 3500); // Adjust this delay as needed
    }
}

// Start clicking the "Load More" button
clickLoadMore();
