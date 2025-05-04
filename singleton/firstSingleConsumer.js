// import SingletonInstance from "./index";
import singletonLogger from "./index";

// const singletonInstance = new SingletonInstance();

function firstSingleConsumer() {
  // singletonInstance.printLogCount();
  // singletonInstance.log("First single consumer");
  // singletonInstance.printLogCount();

  singletonLogger.printLogCount();
  singletonLogger.log("First single consumer");
  singletonLogger.printLogCount();
}

export default firstSingleConsumer;
