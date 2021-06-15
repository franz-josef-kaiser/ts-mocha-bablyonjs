import { expect } from 'chai';
import Mocha from 'mocha';
const { describe, before, it } = Mocha;
/** CASE C **/
/* 3.a) "ReferenceError: require is not defined" */
/* 3.b) package.json > w `type:module`:
				"SyntaxError: Cannot use import statement outside a module" */
/* 3.b) package.json > w `type:commonjs`:
*       Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: ponyfill.mjs */
import * as Camera from './../ponyfills/import-module-exports.mjs';


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