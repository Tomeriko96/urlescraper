# urlescraper

Inspired by this [repo](https://github.com/Dinoosauro/node-tiktok-to-ytdlp/tree/main) and this [repo](https://github.com/Dinoosauro/tiktok-to-ytdlp).

For now two scripts:
- script to scroll to end
- script to fetch all links and download txt file
- bash command to use yt-dlp

```
yt-dlp -a VideoLinks.txt -o "TikTok/%(id)s.%(ext)s"
```

## TODO:
- [x] improve link scraper
- [x] save txt with name of user and number of links
- [ ] yt-dlp download names of files only the ID
