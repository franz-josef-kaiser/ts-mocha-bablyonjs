import * as chai from 'chai';
const { expect } = chai
import { describe, before, it } from 'mocha';
/** CASE D **/
/* 2) "SyntaxError: Cannot use import statement outside a module" */
// @ts-ignore
import _ from './../ponyfills/commonjs/commonjs.cjs';
const { Camera } = _;


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