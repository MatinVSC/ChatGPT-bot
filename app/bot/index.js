import { session, Telegraf } from "telegraf";
// import { message } from "telegraf/filters";
import TelegrafI18n from "i18n-telegraf";
//session
import { MySQL } from "@telegraf/session/mysql";
// middleware
import Command from "./middleware/command.js";
import Action from "./middleware/action.js";
// import Chatgpt from "./middleware/chatgpt.js";
// limiter
import { limit } from "@grammyjs/ratelimiter";


const bot = new Telegraf(process.env.TOKEN);

const Startbot = () => {

    bot.use(
        limit({
            timeFrame: 1000,
            limit: 1,
            onLimitExceeded: async (ctx) => {
                await ctx.reply("اسپم نکن بچه !!");
            },
        })
    );

    const i18n = new TelegrafI18n({
        directory: "locales",
        sessionName: "session",
        useSession: true,
    });

    const store = MySQL({
        host: "localhost",
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASS,
    });

    bot.use(session({ store, defaultSession: (ctx) => ({ __language_code: ctx.from.language_code }) }));

    bot.use(i18n.middleware());

    // middleware command
    bot.command(/.*/, Command);

    // middleware action
    bot.on("callback_query", Action);

    // middleware chatgpt api
    // bot.on(message("text"), Chatgpt);

    bot.launch();
};

export { Startbot, bot };