# urlescraper

`urlescraper` is a tool inspired by the repositories [node-tiktok-to-ytdlp](https://github.com/Dinoosauro/node-tiktok-to-ytdlp/tree/main) and [tiktok-to-ytdlp](https://github.com/Dinoosauro/tiktok-to-ytdlp) that allows you to scrape video links from urlebird.com, a TikTok alternative, and download the videos to your local machine.

## How It Works

- Navigate to urlebird.com page of a user and open the "Inspect" page in your browser using `Ctrl + Shift + I`.
- Go to the console pane and paste the contents of scrollToBottom.js. Wait for the script to scroll the page until the end.
- Next, paste the contents of downloadVideoLinks.js into the console. This script will download a plain text file containing the URLs of the videos.
- Run the bash script downloadVideosFromUrls.sh in your terminal.


## Known Limitations

While urlescraper is a robust tool for scraping and downloading video links, it does come with a few known limitations and potential bugs:

- Intermittent Download Failures: Some video links may fail to download due to various factors such as network instability, server-side issues, or even temporary issues with Urlebird.com itself. In such cases, the tool currently logs these failed links into a failed.txt file for manual retry.
- Scrolling Issues: Some pages may cause a looping effect when scrolling, preventing the tool from reaching the last video and potentially resulting in duplicate video links being found. This could be due to the way the scrolling mechanism interacts with the website's layout or loading mechanisms.


## Note
Please ensure you are abiding by the terms and conditions of Urlebird.com and the legality of web scraping in your jurisdiction. Also, please scrape with moderate speed to avoid causing unnecessary server load on the target site.

## Contributing

Contributions to `urlescraper` are welcome! If you encounter any bugs, have feature requests, or would like to contribute code improvements, please open an issue or submit a pull request on the GitHub repository.
