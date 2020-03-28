Get-ExecutionPolicy
Set-ExecutionPolicy Bypass -Scope Process
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
choco
choco /?
clear
cinst nodejs-lts
exit
Get-ExecutionPolicy
cinst nodejs-lts
node
node -v
npm -v
d:
dir
cd .\galaxyS7\
cd ..
cd '.\Google Drive\'
dir
cd .\Estudos\
dir
md Node
cd .\Node\
dir
md SemanaOmniStack11
cd .\SemanaOmniStack11\
dir
md aulas
cd .\aulas\
dir
md backend
cd .\backend\
npm init -y
dir
npm -v
npm install express
pwd
dir
npm install express
node .\index.js
node
node index.js
node.exe .\index.js
exit
cd ..
npx create-reactive-app frontend
npx create-react-app frontend
npm start
cd .\frontend\
npm start
node .\index.js
npm install nodemon -D
npm start
npm install knex
npm install sqlite3
npx knex init
npm start
npx knex migrate:make create_ongs
npx knex migrate:latest
npx knex migrate:make create_incidents
npx knex migrate:latest
npm install cors