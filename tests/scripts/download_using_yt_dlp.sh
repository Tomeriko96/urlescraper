#!/bin/bash

filename=$(basename -- "$1")
extension=".txt"
name="${filename%.*}"

mkdir -p "${name}"
yt-dlp -a $1 -o "${name}/%(id)s.%(ext)s"

