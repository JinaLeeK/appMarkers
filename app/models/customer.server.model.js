'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	firstname: {
		type: String,
		default: '',
		trim: true
	},
	surname: {
		type: String,
		default: '',
		trim: true
	},
	suburb: {
		type: String,
		default: '',
		trim: true
	},
	country: {
		type: String,
		default: '',
		trim: true
	},
	industry: {
		type: String,
		default: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		trim: true
	},
	phone: {
		type: String,
		default: '',
		trim: true
	},
	referred: {
		type: Boolean,
		default: '',
		trim: true
	},
	channel: {
		type: String,
		default: '',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
});

mongoose.model('Customer', CustomerSchema);
