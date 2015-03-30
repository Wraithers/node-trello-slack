#!/usr/bin/env node

var Bot = require('./trello-slack.js'),
	bot = new Bot({
		pollFrequency: 1000 * 60 //every minute
			,
		start: true,
		trello: {
			boards: [
				{
					id: '...',
					channel: '#dev'
        		}
        		, {
					id: '...',
					channel: '#devops'
      		}
    		],
			key: '...',
			token: '...'
		},
		slack: {
			domain: '...',
			token: '...',
			webhook: '...',
			channel: '#updates'
		}
	});
