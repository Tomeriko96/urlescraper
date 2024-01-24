#!/bin/bash

if [ $# -eq 0 ]; then
 echo 'No arguments supplied' >&2
 exit 1
fi

input_file=$1
base_dir=$(dirname "$input_file")
base_name=$(basename -- "$input_file" ".txt")
output_dir="${base_dir}/${base_name}"

if [ -d "$output_dir" ]; then
 rm -rf "$output_dir"
fi

mkdir -p "$output_dir"

counter=1
while IFS= read -r url
do
 if [ -z "$url" ]; then
     continue
 fi
 html=$(curl -s "$url")
 video_src=$(echo "$html" | grep -oP '(?<=<video src=")[^"]*')
 output_file="${output_dir}/${counter}.mp4"
 wget_output=$(wget -S -O "$output_file" "$video_src" 2>&1)
 http_status=$(echo "$wget_output" | awk '/HTTP\// {print $2}')
 file_size=$(du -sb "$output_file" | cut -f1)
 if [ "$http_status" != "200" ] || [ $file_size -eq 0 ]; then
    failed_file="${base_dir}/${base_name}_failed.txt"
    echo "$url" >> "$failed_file"
    continue
 fi
 counter=$(expr $counter + 1)
done < "$input_file"

# Check if the end of the file has been reached
if [ "$url" = "" ]; then
 echo "Last URL not processed" >&2
 exit 1
fi

