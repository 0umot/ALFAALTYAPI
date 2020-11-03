const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('arroiz', () => reqEvent('arroiz')(client));
  client.on('message', reqEvent('message'));
};