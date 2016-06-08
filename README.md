# ElectronJava
Pequeño demo donde se invoca un jar desde Electrón pulsando un boton

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

# Clone this repository
git clone https://github.com/hugoangeles0810/ElectronJava
# Go into the repository
cd ElectronJava
# Install dependencies and run the app
npm install && npm start

# To packaging
comment or uncomment as appropriate

```javascript
// For develop
var path = require("path")
JAR_PATH = path.join(process.cwd(), "ElectronUtil.jar");

// For production
/*JAR_PATH = path.join(process.cwd(), "resources", "app", "ElectronUtil.jar");*/
```

later execute:
npm run build
