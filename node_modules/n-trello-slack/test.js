var Bot = require('./trello-slack.js')
	,bot = new Bot({
		pollFrequency: 1000*60*1 //every 1 minutes
		,trello: {
			boards: [
				{ id: '9G5XPyaO', channel: '#adam' }             // ud/cornell reunion app
			]
			,key: 'f55b5b84e72942db4170a7585404b2bc'
			,token: '8000dc2ed1dbc2dd807da84772d177247147e1b06f7765de79d77e6c1f3c6037'
		}
		,slack: {
			domain: 'countermarch'
			,token: 'iMox7hCGEsQPdXqnAd8fhGFT'
			,channel: '#adam'
		}
	});

console.log('waiting for trello activity...')
