import { Markup } from "telegraf";
import { chunk } from "../utils/index.js";

class Buttons {
    // constructor(parameters) { };

    // change locales
    ChangeLocales(userLocal) {
        const locales = [
            { text: "🇮🇷 فارسی", match: "fa" },
            { text: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 english", match: "en" },
            { text: "🇮🇳 هندی", match: "in" }
        ];
        return Markup.inlineKeyboard(
            chunk(
                locales.map(item =>
                    Markup.button.callback(item.text + (item.match == userLocal ? " ✅" : ""), `CHANGELOCALES_${item.match}`)),
                2
            )
        );

    };


};

export default Buttons;