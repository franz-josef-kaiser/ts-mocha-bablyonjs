import * as chai from 'chai';
const { expect } = chai
import { describe, before, it } from 'mocha';
/** CASE B **/
/* 2) "SyntaxError: Cannot use import statement outside a module" */
import camera from '@babylonjs/core/Cameras/camera.js';
const { Camera } = camera;


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