import { createLoggerClass, loggerFunction } from "../src/advance/4.mixins";

describe('Mixins', function() {
  
  it('loggerFunction returns a function that invoked with argument', function() {
    const logger = loggerFunction();
    const result = logger("Test");
    expect(result).toBe(undefined);
  });

  it('createLoggerClass', () => {
    const LoggerClass = createLoggerClass();
    const logger = new LoggerClass();
    logger.log('line one');
    logger.log('line two');
    const fullLog = logger.dumpLog();
    console.log(fullLog);
    expect(fullLog).toBe(`line one\nline two\n`);
  });

});