#!/usr/bin/env node

var config = require('config-heroku');

var test1 = process.env.HEROKU_CONFIG;

console.log(typeof (test1));
console.log(test1);

var test2 = test1.boardLinks[0].id1;

console.log(test2);

var Bot = require('n-trello-slack'),
	bot = new Bot({
		pollFrequency: 1000 * 60 //every minute
			,
		start: true,
		trello: {
			boards: [
				{
					id: '7lo9Rm73',
					channel: '#bnf'
        		},
				{
					id: 'lxviQlfu',
					channel: '#jr-monthlytracker'
        		},
				{
					id: 'yMItwCDu',
					channel: '#jr-social'
				},
				{
					id: 'eBUjTy1m',
					channel: '#vh-social'
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