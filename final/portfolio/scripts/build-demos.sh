#!/bin/sh
# Copies (or builds) each homework from ../../work into public/demos/
# so the portfolio can show them running. Re-run after changing a homework:
#   npm run demos
set -e

cd "$(dirname "$0")/.."
WORK=../../work
OUT=public/demos

rm -rf "$OUT"
mkdir -p "$OUT"

# Plain HTML/CSS/JS homework: copy the files as-is.
cp -R "$WORK/02-basic-layout" "$OUT/02-basic-layout"
cp -R "$WORK/03-responsive-grid" "$OUT/03-responsive-grid"
cp -R "$WORK/06-js-intro" "$OUT/06-js-intro"

# Express homework: only the public/ folder is the website.
# (Form submit won't work without the server.)
cp -R "$WORK/04-basic-form/public" "$OUT/04-basic-form"
cp -R "$WORK/07-js-form/public" "$OUT/07-js-form"

# 02 links its stylesheet as "/css/...", which breaks inside a subfolder.
sed -i.bak 's#href="/css/#href="css/#' "$OUT/02-basic-layout/homepage.html"
rm "$OUT/02-basic-layout/homepage.html.bak"

# React homework: build each app so it works under /demos/<name>/.
build_react() {
  (cd "$WORK/$1" && npm install --silent && npx vite build --base "/demos/$2/" --outDir "$OLDPWD/$OUT/$2" --emptyOutDir)
}
build_react 09-react-intro/inventory 09-react-intro
build_react 10-react-components/components 10-react-components

# Drop files the demos don't need.
find "$OUT" -name README.md -delete

echo "Demos ready in $OUT"
