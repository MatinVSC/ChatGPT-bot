import { Telegraf } from "telegraf";
import TelegrafI18n from "i18n-telegraf";
// middleware
import Command from "./middleware/command.js";

const bot = new Telegraf(process.env.TOKEN);

const Startbot = () => {

    const i18n = new TelegrafI18n({
        defaultLanguage: "fa",
        directory: "locales",
    });

    bot.use(i18n.middleware());

    // middleware command
    bot.command("/.*/", Command);

    bot.launch();
};

export { Startbot, bot };