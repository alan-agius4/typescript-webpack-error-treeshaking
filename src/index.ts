import { HelloWorldUsed } from "./vendor";

const helloWorld = (new HelloWorldUsed()).sayHello();

export { HelloWorldUnused, HelloWorldUsed } from "./vendor";