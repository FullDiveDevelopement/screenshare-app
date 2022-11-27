#!/bin/bash

npx electron-packager . screen-app --overwrite --asar --platform=win32 --arch=x64 --prune=true --out=builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName="Screen Sharing"

zip -r screen-windows.zip builds/screen-app-win32-x64
