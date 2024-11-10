import { EventBuilder } from '@blitz-bots/builder';

const readyEvent = new EventBuilder({
  name: "Log Client Ready",
  event: "ready",
  description: "Logs when the client is online",
  action: () => {
    console.log("Client is online");
  },
});
