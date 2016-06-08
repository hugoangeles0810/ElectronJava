// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


// For develop
var path = require("path")
JAR_PATH = path.join(process.cwd(), "ElectronUtil.jar");

// For production
/*JAR_PATH = path.join(process.cwd(), "resources", "app", "ElectronUtil.jar");*/
