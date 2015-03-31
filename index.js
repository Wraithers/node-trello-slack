#!/usr/bin/env node

var config = require('config-heroku');

var envVariable = process.env.HEROKU_CONFIG;
var parsedVariable = JSON.parse(envVariable);

if (parsedVariable.hasOwnProperty('id4')) {
	console.log(parsedVariable.id4);
}

var Bot = require('n-trello-slack'),
	bot = new Bot({
		pollFrequency: 1000 * 60, //every minute
		start: true,
		trello: {
			boards: [
				{
					id: parsedVariable.id1,
					channel: parsedVariable.channel1
        		},
				{
					id: parsedVariable.id2,
					channel: parsedVariable.channel2
        		},
				{
					id: parsedVariable.id3,
					channel: parsedVariable.channel3
				},
				{
					id: parsedVariable.id4,
					channel: parsedVariable.channel4
				},
				{
					id: parsedVariable.id5,
					channel: parsedVariable.channel5
				}
    		],
			key: 'b97f22ec035a407a41b24eb6a9c14f08',
			token: 'c2f29f46a7f67fab0e7b9f6723175320a82b7283c9caf92dd6a0ce7e01f315b2'
		},
		slack: {
			domain: '22feet',
			token: 'test12345',
			webhook: 'https://hooks.slack.com/services/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',
			channel: '#updates'
		}
	});