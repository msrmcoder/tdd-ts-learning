describe('Modern Operator', () => {

  interface Person {
    name: string;
    age: number;
    email?: string;    // Optional property
    location?: {       // Optional object
      city: string;
      eircode?: string;// Optional property
    }
  }

  it('truthyness of undefined | null | "" | false | 0', () => {
    [undefined, null, "", false].forEach(element => {
      expect(element).toBeFalsy();
    });
    expect(null != false).toBeTrue();
    expect(null !== false).toBeTrue();
    expect(undefined != false).toBeTrue();
    expect(undefined !== false).toBeTrue();
  });

  function getData() {
    return {
      name: 'Sriram',
      location: {
        city: 'Dublin',
      },
      showNotification: () => {
        return 1;
      }
    };
  }

  it('1.1 without Optional Chaining ?. operator', () => {
    const data = getData();
    const city = data && data.location && data.location.city;
    expect(city).toBe('Dublin');
    const fnRetValue = data && data.showNotification && data.showNotification?.();
    expect(fnRetValue).toBe(1);
  });

  it('1.2 with Optional Chaining ?. operator', () => {
    const data = getData();
    const city = data?.location?.city;
    expect(city).toBe('Dublin');
    const fnRetValue = data?.showNotification?.();
    expect(fnRetValue).toBe(1);
  });

  function getServerConfig(port: number | undefined, keepAlive?: boolean) {
    return {
      server: {
        port: port,
        keepAlive: keepAlive
      }
    }
  }

  it('2.1 without Nullish Coalescing ?? operator', () => {
    let config = getServerConfig(8080);
    let port = config.server.port || 8888;
    console.log(`after config.server.port=8080, value is ${port}`);
    expect(port).toBeTruthy();
    expect(port).toBe(8080);

    config = getServerConfig(undefined);
    port = config.server.port || 8888;
    console.log(`after config.server.port=undefined, value is ${port}`);
    expect(port).toBeTruthy();
    expect(port).toBe(8888);

    config = getServerConfig(8080, undefined);
    let keepAlive: boolean = config.server.keepAlive || true;
    console.log(`after config.server.keepAlive=undefined, value is ${keepAlive}`);
    expect(keepAlive).toBeTrue();

    config = getServerConfig(8080, false); 
    keepAlive = config.server.keepAlive || true;
    console.log(`after config.server.keepAlive=false, value is ${keepAlive}`);
    // expect(keepAlive).toBeFalse(); // false expected but || operator returns true
    // so work around is fall back to ternary opeator
    keepAlive = (config.server.keepAlive !== undefined 
                  && config.server.keepAlive !== null)
                  ? config.server.keepAlive : true;
    expect(keepAlive).toBeFalse();
  });

  it('2.2 with Nullish Coalescing ?? operator', () => {
    let config = getServerConfig(8080);
    let port = config.server.port ?? 8888;
    console.log(`after config.server.port=8080, value is ${port}`);
    expect(port).toBeTruthy();
    expect(port).toBe(8080);

    config = getServerConfig(undefined);
    port = config.server.port ?? 8888;
    console.log(`after config.server.port=undefined, value is ${port}`);
    expect(port).toBeTruthy();
    expect(port).toBe(8888);

    config = getServerConfig(8080, undefined);
    let keepAlive: boolean = config.server.keepAlive ?? true;
    console.log(`after config.server.keepAlive=undefined, value is ${keepAlive}`);
    expect(keepAlive).toBeTrue();

    config = getServerConfig(8080, false); 
    keepAlive = config.server.keepAlive ?? true;
    console.log(`after config.server.keepAlive=false, value is ${keepAlive}`);
    expect(keepAlive).toBeFalse(); // due to ?? operator false returns correctly
    // so work around is fall back to ternary opeator
    keepAlive = (config.server.keepAlive !== undefined 
                  && config.server.keepAlive !== null)
                  ? config.server.keepAlive : true;
    expect(keepAlive).toBeFalse();
  });

});