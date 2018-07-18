mkdir $1
mkdir ./$1/routes
mkdir ./$1/models
touch ./$1/index.js
touch ./$1/package.json
touch ./$1/server.js
cat ./packageFile/package.json >> ./$1/package.json
cat ./packageFile/app.js >> ./$1/index.js
cat ./packageFile/server.js >> ./$1/server.js
current_dir=$PWD;cd ./$1;npm install ;cd $current_dir;