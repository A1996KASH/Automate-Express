mkdir $1
touch ./$1/index.js
touch ./$1/package.json
cat ./packageFile/package.json >> ./$1/package.json
current_dir=$PWD;cd ./$1;npm install ;cd $current_dir;