import { CommandBuilder } from '@blitz-bots/builder';

export default new CommandBuilder({ 
  name: "ping", 
  description: "Return Pong", 
  action: (message) => {  
    message.reply("Pong!"); 
  },
});
