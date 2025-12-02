import Help from "../command/help.js";
import Start from "../command/start.js";

// event listner
const event_listner = {
    // command start
    ...Start,
    //command Help
    ...Help
};

// command list
const LIST_COMMAND = {
    START: {
        pattern: "/start",
        handler: event_listner.START
    },
    HELP: {
        pattern: "/help",
        handler: event_listner.HELP
    },
};


export default async (ctx) => {
    const text = ctx.message.text;

    for (const [key, { pattern, handler }] of Object.entries(LIST_COMMAND)) {
        if (pattern == text) return handler(ctx);
    };

};