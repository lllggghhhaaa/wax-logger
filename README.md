### Como instalar
`npm i wax-logger`
#### Usando
```js
const logger = require("wax-logger");

const sender = new logger.LogBase("CeiraClient", 666);

// sender: LogBase, message: String, save: Boolean
// save: salva em um arquivo
logger.logInfo(sender, "ceira", false);
logger.logWarn(sender, "ceira purinha hein", true);
logger.logError(sender, "isso daqui ja e ceira demais", true);
```