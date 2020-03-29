
First Class commands: 

Set-ExecutionPolicy Bypass -Scope Process
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
choco
choco /?
cinst nodejs-lts
Get-ExecutionPolicy
cinst nodejs-lts
node -v
npm -v
md backend
cd .\backend\
npm init -y
npm install express
node .\index.js
cd ..
npx create-react-app frontend
cd .\frontend\
npm start
node .\index.js


Second class commands:

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


Third class commands:

npm install react-icons
npm install react-router-dom
npm install axios


Fouth class commands

npm install -g expo-cli
npm install -g expo-cli (2 times, first time i got node-gyp erro saying tha I don't have python)
expo init mobile
cd mobile
yarn start (error: not installed)
npm start
npm install @react-navigation/native
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/stack
expo install expo-constants
expo install expo-mail-composer
npm install axios
npm install intl