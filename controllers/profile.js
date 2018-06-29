const handleProfileGet = (req, res, db) => {
    const { id } = req.params;
    let found = false;

    db.select('*').from('users').where({
        id: id
    }).then(user => {
        console.log(user);
        if (user.length) {
            res.json(user[0]);
        }
        else {
            res.status(404).json("Not found!");
        }
    })
};

module.exports = {
    handleProfileGet: handleProfileGet
}