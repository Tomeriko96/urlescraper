// Select all the anchor tags within the page
var links = document.querySelectorAll('a');

// Initialize an empty array to store the links
var videoLinks = [];

// Loop through the links and add their href attributes to the array if they contain "video"
for (var i = 0; i < links.length; i++) {
 if (links[i].href.includes('video')) {
     videoLinks.push(links[i].href);
 }
}

// Create a blob from the video links joined with newlines
var blob = new Blob([videoLinks.join('\n')], {type: 'text/plain'});

// Create a temporary anchor element
var tempAnchor = document.createElement('a');

// Set the href of the anchor element to the URL of the blob
tempAnchor.href = URL.createObjectURL(blob);

// Set the download attribute of the anchor element to the desired filename
tempAnchor.download = 'VideoLinks.txt';

// Append the anchor element to the body
document.body.appendChild(tempAnchor);

// Simulate a click on the anchor element to start the download
tempAnchor.click();

// Remove the anchor element from the body
document.body.removeChild(tempAnchor);

