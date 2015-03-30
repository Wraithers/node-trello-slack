# Trello Events

Poll the Trello API every N milliseconds for activity on your boards. Emits events for each action taken on the specified boards.

```js
var Trello = require('trello-events');
var trello = new Trello({
	pollFrequency: 1000*60
	,minId: 0
	,start: true
	,trello: {
		boards: ['Nz5nyqZg','...']
		,key: 'your-trello-api-key'
		,token: 'your-trello-api-token'
	}
});
```

- `pollFrequency`: frequency in milliseconds that the Trello api is polled
- `minId`: The minimum id value at which to start emitting events (more on this later)
- `start`: whether or not to start polling the api immediately (default: false)
- `trello.boards`: array of trello board id's to watch (get them from the URL)
- `trello.key`: [Get your developer (public) key here](https://trello.com/1/appKey/generate)
- `trello.token`: Generate your token. `<PUBLIC_KEY>` is the value from the previous step
    - Short term: `https://trello.com/1/connect?name=trello-events&response_type=token&key=<PUBLIC_KEY>`
    - No expiration: `https://trello.com/1/connect?name=trello-events&response_type=token&expiration=never&key=<PUBLIC_KEY>`

## Events Emitted

- `trelloError`, if the trello api throws an error
- `maxId`, when new activity has been processed from the API. Sends the new max activity id; enabling you to persist it (implementation details up to you). When you later re-instantiate an instance of Trello Events, pass this value as the `minId` configuration option to ignore any activity pre-dating that id.

In addition, events are emitted for each action type listed in the trello api docs (as filtering options): [addAttachmentToCard, addChecklistToCard, addMemberToBoard, etc](https://trello.com/docs/api/board/index.html#get-1-boards-board-id-actions).

For example, to subscribe to `updateCard` events:

```js
trello.on('updateCard', function(event, boardId){...});
```
