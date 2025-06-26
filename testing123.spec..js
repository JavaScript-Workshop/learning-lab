//tests learning from fs academy

//greeting function
describe("greeting", () => {
  it("is a function", () => {
    expect(typeof greeting).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = greeting();
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns a personalized greeting if a name is given", () => {
    let returnedValue = greeting("Mary");
    expect(returnedValue).toEqual("Hello Mary!");
  });

  it("returns a non personalized greeting if there is no name provided", () => {
    let returnedValue = greeting();
    expect(returnedValue).toEqual("Hello!");
  });
});

//

//max of three function
describe("maxOfThree", () => {
  it("is a function", () => {
    expect(typeof maxOfThree).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = maxOfThree(4, 5, 6);
    expect(returnedValue).toEqual("number");
  });

  it("returns the first number if it is the largest", () => {
    let returnedValue = maxOfThree(20, 50, 100);
    expect(returnedValue).toEqual(100);
  });

  it("returns the second number if it is the largest", () => {
    let returnedValue = maxOfThree(10, 60, 2);
    expect(returnedValue).toEqual(60);
  });

  it("returns the third number if it is the largest", () => {
    let returnedValue = maxOfThree(200, 4, 80);
    expect(returnedValue).toEqual(200);
  });
});

//

//doYouPlayTheTheremin function
describe("doYouPlayTheTheremin", () => {
  it("is a function", () => {
    expect(typeof doYouPlayTheTheremin).toEqual("function");
  });

  it("returns a boolean", () => {
    let returnedValue = doYouPlayTheTheremin("Micheal");
    expect(typeof returnedValue).toEqual("boolean");
  });

  it("returns true if the first letter of the name starts with a S", () => {
    let returnedValue = doYouPlayTheTheremin("Silvia");
    expect(returnedValue).toEqual(true);
  });

  it("returns true if the first letter of the name starts with a s", () => {
    let returnedValue = doYouPlayTheTheremin("silvia");
    expect(returnedValue).toEqual(true);
  });

  it("returns false given any other name input", () => {
    let returnedValue = doYouPlayTheTheremin("Jasmine");
    expect(returnedValue).toEqual(false);
  });
});

//

//last character function
describe("lastCharacter", () => {
  it("is a function", () => {
    expect(typeof lastCharacter).toEqual("function");
  });

  it("returns a boolean", () => {
    let returnedValue = lastCharacter("coding", "learning");
    expect(returnedValue).toEqual("boolean");
  });

  it("returns true if both string end with the same character", () => {
    let returnedValue = lastCharacter("proactive", "brave");
    expect(returnedValue).toEqual(true);
  });

  it("returns false if the strings end with different characters", () => {
    let returnedValue = lastCharacter("consistency", "progress");
    expect(returnedValue).toEqual(false);
  });
});

//onlyOdds function

describe("onlyOdds", () => {
  it("is a function", () => {
    expect(typeof onlyOdds).toEqual("function");
  });

  it("returns a number", () => {
    let returnedValue = onlyOdds(6);
    expect(typeof returnedValue).toEqual("number");
  });

  it("returns the sum of all the odds numbers between the provided argument and 0", () => {
    let returnedValue = onlyOdds(6);
    expect(returnedValue).toEqual(1 + 3 + 5);
  });

  it("returns 0 if inputted argument is less than 1", () => {
    let returnedValue = onlyOdds(-5);
    expect(returnedValue).toEqual(0);
  });
});

//crazyCaps function

describe("crazyCaps", () => {
  it("is a function", () => {
    expect(typeof crazyCaps).toEqual("function");
  });

  it("returns a string", () => {
    let returnedValue = crazyCaps("any value");
    expect(typeof returnedValue).toEqual("string");
  });

  it("returns a string with every other letter lower case and than capital", () => {
    let returnedValue = crazyCaps("did this work");
    expect(returnedValue).toEqual("dId ThIs WoRk");
  });
});

//bacteria time function
describe("bacteriaTime", () => {
  it("is a function", () => {
    expect(typeof bacteriaTime).toEqual("function");
  });

  it("returns the number of minutes required to reach the target", () => {
    let returnedValue = bacteriaTime(1, 8);
    expect(returnedValue).toEqual(60);
  });

  it("returns the number of minutes required to reach a large target", () => {
    let returnedValue = bacteriaTime(3, 6000);
    expect(returnedValue).toEqual("targetNum must be larger than currentNum");
  });
});

//get average function
describe("getAverage", () => {
  it("is a function", () => {
    expect(typeof getAverage).toEqual("function");
  });
});
