import { LoggerFactory } from "./factory-class";

const logger = LoggerFactory.createLogger();

logger.info("Hello World");
logger.warn("Hello World");
logger.debug("Hello World");
logger.error("Hello World");