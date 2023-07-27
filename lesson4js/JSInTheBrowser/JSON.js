'{"greeting":"Hello"}'
const jsonStr = '{"greeting":"Hello"}';
JSON.parse(jsonStr); // {greeting: "Hello"}
const aPlainObj = JSON.parse(jsonStr);
aPlainObj.greeting='hi';
aPlainObj
const data = {
    firstName: "John",
    lastName: "Doe",
    greeting: "Hello"
}
JSON.stringify(data); // "{"firstName":"John","lastName":"Doe","greeting":"Hello"}"