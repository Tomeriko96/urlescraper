// Select all the anchor tags within the page
var links = document.querySelectorAll('a');

// Initialize a Set to store the links
var videoLinks = new Set();

// Get the current URL
var url = window.location.href;

// Extract the username from the URL
var username = url.split('/')[4];

// Loop through the links and add their href attributes to the Set if they contain "video"
for (var i = 0; i < links.length; i++) {
  // Skip links that don't contain "video"
  if (!links[i].href.includes('video')) continue;

  // Skip the popular videos link
  if (links[i].href === 'https://urlebird.com/videos/popular/') continue;

  videoLinks.add(links[i].href);
}

// Create a blob from the video links joined with newlines
var blob = new Blob([Array.from(videoLinks).join('\n') + '\n'], {type: 'text/plain'});

// Create a temporary anchor element
var tempAnchor = document.createElement('a');

// Set the href of the anchor element to the URL of the blob
tempAnchor.href = URL.createObjectURL(blob);

// Set the download attribute of the anchor element to the desired filename
tempAnchor.download = username + '_' + videoLinks.size + '.txt';

// Append the anchor element to the body
document.body.appendChild(tempAnchor);

// Simulate a click on the anchor element to start the download
tempAnchor.click();

// Remove the anchor element from the body
document.body.removeChild(tempAnchor);

