const logger = require("../Logger");

const sender = new logger.LogBase("CeiraClient", 666);

logger.logInfo(sender, "ceira", false);
logger.logWarn(sender, "ceira purinha hein", true);
logger.logError(sender, "isso daqui ja e ceira demais", true);