import * as THREE from 'three';
import { Events } from '../controller/Utils/Events';
/**
 * Renderer class for managing the WebGL rendering of the 3D scene.
 * Uses Three.js for rendering and interaction.
 *
 * @class
 */
class Renderer {
    /**
     * Creates an instance of Renderer.
     * Initializes the renderer with the provided simulator.
     *
     * @param {Simulator} simulator - The simulator instance containing scene, canvas, and sizes.
     * @constructor
     */
    constructor(simulator) {
        this.simulator = simulator;
        this.canvas = this.simulator.canvas;
        this.sizes = this.simulator.sizes;
        this.scene = this.simulator.scene;
        this.camera = this.simulator.camera.getInstance();
        this.setInstance();
        // Add resize event listener
        window.addEventListener(Events.Resize, () => this.resize());
    }
    /**
     * Initializes the WebGL renderer instance.
     * Sets up various renderer properties and configurations.
     *
     * @private
     */
    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });
        this.instance.toneMapping = THREE.CineonToneMapping;
        this.instance.toneMappingExposure = 1.75;
        this.instance.shadowMap.enabled = true;
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
    }
    /**
     * Adjusts the renderer size and pixel ratio when the window is resized.
     *
     * @public
     */
    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
    }
    /**
     * Renders the scene from the perspective of the camera.
     *
     * @public
     */
    update() {
        this.instance.render(this.scene, this.camera);
    }
    /**
     * Disposes of the WebGLRenderer instance and cleans up event listeners.
     * Ensures that all GPU resources are properly released to avoid memory leaks.
     *
     * @public
     */
    dispose() {
        this.instance.dispose();
        window.removeEventListener(Events.Resize, () => this.resize());
    }
}
export default Renderer;
