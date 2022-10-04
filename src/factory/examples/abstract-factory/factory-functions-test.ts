import { createLogger } from "./factory-function";

const logger = createLogger();

logger.info("Hello World");
logger.warn("Hello World");
logger.debug("Hello World");
logger.error("Hello World");
