cd .vitepress/dist

git init
git remote set-url origin git@github.com:chromatone/web-synths.git
git add . --force
git commit -m 'deploy'

git push -f origin HEAD:gh-pages

cd -