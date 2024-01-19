# urlescraper

Inspired by this [repo](https://github.com/Dinoosauro/node-tiktok-to-ytdlp/tree/main) and this [repo](https://github.com/Dinoosauro/tiktok-to-ytdlp).

How it works:
- go to urlebird.com
- in browser go to "inspect" page. `ctrl + shift + i`
- go to console pane
- place contents of `scrip.js` and wait for the script to scroll the page
- next place contents of script_txt.js to download a plain text file with urls of the videos
- in terminal run bash script download_and_write.sh

```
yt-dlp -a VideoLinks.txt -o "TikTok/%(id)s.%(ext)s"
```

## TODO:
- [x] improve link scraper
- [x] save txt with name of user and number of links
- [ ] yt-dlp download names of files only the ID
- [x] use wget instead of yt-dlp
- [x] error handling when not http status 200
- [x] create txt of failed urls to try again later
