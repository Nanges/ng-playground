#!/bin/bash

mkdir projects/$1/$2
mkdir projects/$1/$2/src
echo "export * from \"./public_api\"" > projects/$1/$2/src/index.ts
echo {} > projects/$1/$2/ng-package.json
echo Done!