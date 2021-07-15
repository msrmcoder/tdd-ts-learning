function loggerFunction() {
  return (str: string) => {
    console.log(str);
  }
}

const logger1 = loggerFunction();
logger1("My first log");


function createLoggerClass() {
  return class LoggerClass {
    private completeLog: string = "";

    log(str: string) {
      console.log(str);
      this.completeLog += str + "\n";
    }

    dumpLog(): string {
      return this.completeLog;
    }
  }
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log('Second log');
logger2.log('Third log');
const fullLog = logger2.dumpLog();
console.log(fullLog);