// Select the "Load More" button
var loadMoreButton = document.querySelector('#load_more');

// Define a function to handle clicking the "Load More" button
function clickLoadMore() {
  if (loadMoreButton) {
      // Scroll to the bottom of the page
      window.scrollTo(0, document.body.scrollHeight);

      // Click the "Load More" button
      loadMoreButton.click();

      // Set a timeout to check if the button still exists after the page updates
      setTimeout(function() {
          if (!document.querySelector('#load_more')) {
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

