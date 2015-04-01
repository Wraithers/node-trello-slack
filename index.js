#!/usr/bin/env node

var config = require('config-heroku');

var envVariable = process.env.HEROKU_CONFIG;
var parsedVariable = JSON.parse(envVariable);

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
				},
				{
					id: parsedVariable.id6,
					channel: parsedVariable.channel6
				},
				{
					id: parsedVariable.id7,
					channel: parsedVariable.channel7
				},
				{
					id: parsedVariable.id7,
					channel: parsedVariable.channel7
				},
				{
					id: parsedVariable.id8,
					channel: parsedVariable.channel8
				},
				{
					id: parsedVariable.id9,
					channel: parsedVariable.channel9
				},
				{
					id: parsedVariable.id10,
					channel: parsedVariable.channel20
				},
				{
					id: parsedVariable.id11,
					channel: parsedVariable.channel11
				},
				{
					id: parsedVariable.id12,
					channel: parsedVariable.channel12
				},
				{
					id: parsedVariable.id13,
					channel: parsedVariable.channel13
				},
				{
					id: parsedVariable.id14,
					channel: parsedVariable.channel14
				},
				{
					id: parsedVariable.id15,
					channel: parsedVariable.channel15
				},
				{
					id: parsedVariable.id16,
					channel: parsedVariable.channel16
				},
				{
					id: parsedVariable.id17,
					channel: parsedVariable.channel17
				},
				{
					id: parsedVariable.id18,
					channel: parsedVariable.channel18
				},
				{
					id: parsedVariable.id19,
					channel: parsedVariable.channel19
				},
				{
					id: parsedVariable.id20,
					channel: parsedVariable.channel20
				}
    		],
			key: parsedVariable.trelloKey,
			token: parsedVariable.trelloToken
		},
		slack: {
			webhook: parsedVariable.slackWebhook,
			channel: '#updates'
		}
	});