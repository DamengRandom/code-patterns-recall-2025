// import SingletonInstance from "./index";
import singletonLogger from "./index";

// const singletonInstance = new SingletonInstance();

function secondSingleConsumer() {
  // singletonInstance.printLogCount();
  // singletonInstance.log("Second single consumer");
  // singletonInstance.printLogCount();

  singletonLogger.printLogCount();
  singletonLogger.log("Second single consumer");
  singletonLogger.printLogCount();
}

export default secondSingleConsumer;

// So now, the count value will be able to be accumulated because we only use one instance of the class which is singletonLogger !!!!!!!!!!!!!

