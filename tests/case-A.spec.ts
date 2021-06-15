import * as chai from 'chai';
const { expect } = chai
import { describe, before, it } from 'mocha';
/** CASE A **/
/* 1) "SyntaxError: Named export 'Camera' not found. The requested module '@babylonjs/core/Cameras/camera.js'
	     is a CommonJS module, which may not support all module.exports as named exports.

	     CommonJS modules can always be imported via the default export, for example using:

	     import pkg from '@babylonjs/core/Cameras/camera.js';
	     const { Camera } = pkg;
 */
import { Camera } from '@babylonjs/core/Cameras/camera.js';

describe('Self sustained', () => {
	// Test to confirm that tests work.
	it('should equal a string with a string', () => {
		expect('789')
			.to.equal('789')
			.and.to.be.a('string')
	})
})

describe('The Camera', () => {
	it('should get logged to the console', () => {
		console.info(Camera)
	})
})