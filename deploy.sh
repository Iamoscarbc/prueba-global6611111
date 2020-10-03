#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/iamoscarbc/prueba-global66.git master:gh-pages

cd -