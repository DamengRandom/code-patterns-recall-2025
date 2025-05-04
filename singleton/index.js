class SingletonLogger {
  constructor() {
    this.logs = [];

    if (SingletonLogger.instance == null) {
      this.logs = [];
      SingletonLogger.instance = this;
    }

    return SingletonLogger.instance; // this is singleton pattern (Ensure multiple files are using the same instance !!!!!!!!!!!!!)
  }

  log(message) {
    this.logs.push(message);
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} logs has been written ~`);
  }
}

const singletonLogger = new SingletonLogger();

Object.freeze(singletonLogger);

export default singletonLogger; // export class instance instead of class
