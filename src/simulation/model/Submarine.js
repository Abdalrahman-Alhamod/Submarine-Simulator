import EventEmitter from '../controller/Utils/EventEmitter';
/**
 * Represents the submarine by combining constant parameters and variable state.
 * @class
 */
class Submarine extends EventEmitter {
    /**
     * Constructs an instance of the Submarine class.
     *
     * @param {SubmarineConstants} constants - The constant parameters defining the submarine's characteristics.
     * @param {SubmarineState} state - The variable state of the submarine.
     * @param {SubmarineType} type - The type of the submarine.
     */
    constructor(constants, state, type) {
        super();
        this.constants = constants;
        this.state = state;
        this.type = type;
    }
    /**
     * Retrieves the constant parameters of the submarine.
     * @returns {SubmarineConstants} The constant parameters of the submarine.
     */
    getConstants() {
        return this.constants;
    }
    /**
     * Sets the constant parameters of the submarine.
     * @param {SubmarineConstants} constants - The new constant parameters of the submarine.
     */
    setConstants(constants) {
        this.constants = constants;
    }
    /**
     * Retrieves the variable state of the submarine.
     * @returns {SubmarineState} The variable state of the submarine.
     */
    getState() {
        return this.state;
    }
    /**
     * Sets the variable state of the submarine.
     * @param {SubmarineState} state - The new variable state of the submarine.
     */
    setState(state) {
        this.state = state;
    }
    /**
     * Retrieves the type of the submarine.
     *
     * @returns {SubmarineType} The type of the submarine.
     */
    getType() {
        return this.type;
    }
}
export default Submarine;
