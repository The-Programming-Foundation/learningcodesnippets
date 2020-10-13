class Runtime {
  constructor() {
    if (this.constructor === Runtime) {
      throw new TypeError('Abstract class "Runtime" cannot be instantiated directly.');
    }
  }

  /**
   * Abstract method for running a code snippit
   * @param {string} code - string of a given code snippit or command 
   * @param {function} callback - supplied callback function that recieves result of the code snippit
   */
  runCode(code, callback) {
    throw new TypeError('runCode must be implemented with a string param \'code\' and a callback function \'callback\'');
  }
}