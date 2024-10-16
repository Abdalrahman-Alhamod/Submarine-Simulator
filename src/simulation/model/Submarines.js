import Submarine from "./Submarine";
import SubmarineConstants from "./SubmarineConstants";
import * as THREE from 'three';
import { SubmarineType } from "./SubmarineType";
import EventEmitter from "../controller/Utils/EventEmitter";
import SubmarineState from "./SubmarineState";
import { Events } from "../controller/Utils/Events";
/**
 * Class representing a collection of submarine instances.
 * Manages multiple submarine models and allows switching between them.
 * Extends EventEmitter to handle events related to submarine switching.
 *
 * @class
 */
class Subamrines extends EventEmitter {
    /**
    * Initializes an instance of the Submarines class.
    */
    constructor() {
        super();
        this.items = {};
        this.initItems();
    }
    /**
     * Initializes the collection of submarine instances with predefined submarines (Ohio and Typhoon).
     * Private method called during class instantiation.
     */
    initItems() {
        const ohioSubmarine = this.initOhio();
        this.items[SubmarineType.Ohio] = ohioSubmarine;
        const typhoonSUbmarine = this.initTyphoon();
        this.items[SubmarineType.Typhoon] = typhoonSUbmarine;
        this.current = this.items[SubmarineType.Typhoon];
    }
    /**
    * Switches the active submarine to the one specified.
    * Emits a 'SwitchSubmarine' event upon switching.
    *
    * @param {SubmarineType | string} submarine - The type or name of the submarine to switch to.
    */
    switchSubmarine(submarine) {
        this.current = this.items[submarine];
        this.trigger(Events.SwitchSubmarine);
    }
    /**
     * Retrieves the currently active submarine instance.
     *
     * @returns {Submarine} - The current submarine instance.
     */
    getCurrentSubmarine() {
        return this.current;
    }
    /**
    * Retrieves a submarine instance based on the specified type.
    *
    * @param {SubmarineType} type - The type of submarine to retrieve.
    * @returns {Submarine} - The submarine instance corresponding to the type.
    */
    getSubmarine(type) {
        return this.items[type];
    }
    /**
    * Initializes an Ohio class submarine instance with predefined constants and state.
    *
    * @returns {Submarine} - The initialized Ohio submarine instance.
    */
    initOhio() {
        // Ohio Constants
        const emptyMass = 16764000;
        const maxMass = 36528000;
        const length = 170;
        const width = 13;
        const volume = 32710.243902;
        const rotorDiameter = 4;
        const maxRotorRoundPerSecond = 10;
        const sternPlaneArea = 5;
        const rudderPlaneArea = 7;
        const fairwaterPlaneArea = 3;
        const dragCoefficient = 1.9;
        const thrustCoefficient = 0.8044923775964;
        const sternCoefficient = 0.8;
        const rudderCoefficient = 0.7;
        const fairetwaterCoefficient = 0.6;
        const centerOfBuoyancy = new THREE.Vector3(0, 0, 0);
        const radius = width / 2;
        const surfaceArea = 2 * Math.PI * radius * (radius + length);
        const ballastTankCapacity = maxMass - emptyMass;
        // Ohio Variables
        // Initial State : ON SEA SURFACE
        // Input Values
        const currentTotalWaterMass = 0;
        const halfCurrentTotalWaterMass = currentTotalWaterMass / 2;
        const currentWaterMassFrontTank = halfCurrentTotalWaterMass;
        const currentWaterMassBackTank = halfCurrentTotalWaterMass;
        const currentRotorRPS = 0;
        const sternAngle = 0;
        const rudderAngle = 0;
        const fairwaterAngle = 0;
        // Calculated Values (At the start nothing calculated yet)
        const submergedVolume = 0;
        const currentDepth = 0;
        const currentSpeed = new THREE.Vector3(0, 0, 0);
        const currentAcceleration = new THREE.Vector3(0, 0, 0);
        const currentPosition = new THREE.Vector3(0, 0, 0);
        const currentOrientation = new THREE.Quaternion();
        const angularVelocity = new THREE.Vector3(0, 0, 0);
        const angularAcceleration = new THREE.Vector3(0, 0, 0);
        const weight = 0;
        const buoyancy = 0;
        const drag = 0;
        const thrust = 0;
        const momentOfInertia = new THREE.Matrix3();
        const centerOfMass = new THREE.Vector3(0, 0, 0);
        // Initial State : In Sea
        /*
         const currentTotalWaterMass = ohioEmptyMass * 2;
         const submergedVolume = volume;
          const currentDepth = 150;
        */
        const ohioSubmarineConstants = new SubmarineConstants(emptyMass, maxMass, length, width, volume, rotorDiameter, maxRotorRoundPerSecond, sternPlaneArea, rudderPlaneArea, fairwaterPlaneArea, dragCoefficient, thrustCoefficient, sternCoefficient, rudderCoefficient, fairetwaterCoefficient, centerOfBuoyancy, surfaceArea, ballastTankCapacity);
        const ohioSubmarineState = new SubmarineState(currentTotalWaterMass, currentWaterMassFrontTank, currentWaterMassBackTank, currentRotorRPS, submergedVolume, currentDepth, currentSpeed, currentAcceleration, currentPosition, currentOrientation, angularVelocity, angularAcceleration, weight, buoyancy, drag, thrust, sternAngle, rudderAngle, fairwaterAngle, momentOfInertia, centerOfMass, ohioSubmarineConstants);
        const ohioSubmarine = new Submarine(ohioSubmarineConstants, ohioSubmarineState, SubmarineType.Ohio);
        return ohioSubmarine;
    }
    /**
    * Initializes a Typhoon class submarine instance with predefined constants and state.
    *
    * @returns {Submarine} - The initialized Typhoon submarine instance.
    */
    initTyphoon() {
        // Typhoon Constants
        const emptyMass = 23200000;
        const maxMass = 48000000;
        const length = 175;
        const width = 23;
        const volume = 31102.439025;
        const rotorDiameter = 7;
        const maxRotorRoundPerSecond = 10;
        const sternPlaneArea = 8;
        const rudderPlaneArea = 14;
        const fairwaterPlaneArea = 5;
        const dragCoefficient = 1.9;
        const thrustCoefficient = 0.317622429678;
        const sternCoefficient = 0.8;
        const rudderCoefficient = 0.98;
        const fairetwaterCoefficient = 0.5;
        const centerOfBuoyancy = new THREE.Vector3(0, 0, 0);
        const radius = width / 2;
        const surfaceArea = 2 * Math.PI * radius * (radius + length);
        const ballastTankCapacity = maxMass - emptyMass;
        // Typhoon Variables
        // Initial State : ON SEA SURFACE
        // Input Values
        const currentTotalWaterMass = 0;
        const halfCurrentTotalWaterMass = currentTotalWaterMass / 2;
        const currentWaterMassFrontTank = halfCurrentTotalWaterMass;
        const currentWaterMassBackTank = halfCurrentTotalWaterMass;
        const currentRotorRPS = 0;
        const sternAngle = 0;
        const rudderAngle = 0;
        const fairwaterAngle = 0;
        // Calculated Values (At the start nothing calculated yet)
        const submergedVolume = 0;
        const currentDepth = 0;
        const currentSpeed = new THREE.Vector3(0, 0, 0);
        const currentAcceleration = new THREE.Vector3(0, 0, 0);
        const currentPosition = new THREE.Vector3(0, 0, 0);
        const currentOrientation = new THREE.Quaternion();
        const angularVelocity = new THREE.Vector3(0, 0, 0);
        const angularAcceleration = new THREE.Vector3(0, 0, 0);
        const weight = 0;
        const buoyancy = 0;
        const drag = 0;
        const thrust = 0;
        const momentOfInertia = new THREE.Matrix3();
        const centerOfMass = new THREE.Vector3(0, 0, 0);
        // Initial State : In Sea
        /*
         const currentTotalWaterMass = ohioEmptyMass * 2;
         const submergedVolume = volume;
          const currentDepth = 150;
        */
        const typhoonSubmarineConstants = new SubmarineConstants(emptyMass, maxMass, length, width, volume, rotorDiameter, maxRotorRoundPerSecond, sternPlaneArea, rudderPlaneArea, fairwaterPlaneArea, dragCoefficient, thrustCoefficient, sternCoefficient, rudderCoefficient, fairetwaterCoefficient, centerOfBuoyancy, surfaceArea, ballastTankCapacity);
        const typhoonSubmarineState = new SubmarineState(currentTotalWaterMass, currentWaterMassFrontTank, currentWaterMassBackTank, currentRotorRPS, submergedVolume, currentDepth, currentSpeed, currentAcceleration, currentPosition, currentOrientation, angularVelocity, angularAcceleration, weight, buoyancy, drag, thrust, sternAngle, rudderAngle, fairwaterAngle, momentOfInertia, centerOfMass, typhoonSubmarineConstants);
        const ohioSubmarine = new Submarine(typhoonSubmarineConstants, typhoonSubmarineState, SubmarineType.Typhoon);
        return ohioSubmarine;
    }
}
export default Subamrines;
