import Users from "../models/users.js";

const CreateUsers = async ({ id, language }) => {
    const findUser = await FindUsers({ id });
    if (!findUser) Users.create({ id, language });
};

const FindUsers = ({ id }) => {
    return Users.findOne({ where: { id } })
};

const UpdateUsers = ({ id }) => {
    return Users.update({ language: "fa" }, { where: { id } });
};


// Users.findAll({ where: { boys }, limite: 30})
// Users.update( S{language: "fa"} , { where: { id } )

export { CreateUsers, UpdateUsers };