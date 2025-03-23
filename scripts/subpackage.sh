#!/bin/bash

rm -rf projects/$1/$2 
mkdir projects/$1/$2
mkdir projects/$1/$2/src
touch projects/$1/$2/src/public_api.ts
echo "export * from \"./public_api\"" > projects/$1/$2/src/index.ts
echo {} > projects/$1/$2/ng-package.json
echo Done!