#!/bin/bash

npx electron-packager . screen-app --overwrite --asar --platform=linux --arch=x64 --prune=true --out=builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Screen Sharing"

zip -r screen-linux.zip builds/screen-app-linux-x64
