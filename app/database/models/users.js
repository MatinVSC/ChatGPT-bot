import { BIGINT, STRING } from "sequelize";
import db from "../connect.js";

const Users = db.define("users", {
    id: {
        type: BIGINT,
        allowNull: false,
        primaryKey: true,

    },
    language: {
        type: STRING(2),
        allowNull: false,
    },
});

export default Users;