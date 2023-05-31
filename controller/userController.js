
const student = require("../data/data")


const homepage = (req, res) => {
    res.send("Hello World!")
}

const getUser = (req, res) => {
    if (!req.body.age) {
        res.status(400);
        return res.json({ msg: "age must be required..." })
    }

    const user = {
        id: student.length + 1,
        first_name: req.body.fname,
        last_name: req.body.lname,
        email: req.body.email
    }
    student.push(user);
    res.json({ student })
}

const updateUser = (req, res) => {
    let id = req.params.id;
    let first_name = req.body.fname;
    let last_name = req.body.lname;
    let email = req.body.email;

    let index = student.findIndex((student) => {
        return (student.id == Number.parseInt(id))
    })

    if (index >= 0) {
        let user = student[index];
        user.first_name = req.body.fname
        user.last_name = req.body.lname
        user.email = req.body.email
        res.json(user)
    }
    else {
        res.status(404)
        res.end()
    }
}

const deleteUser = (req, res) => {
    let id = req.params.id;
    let index = student.findIndex((student) => {
        return (student.id == Number.parseInt(id))
    })

    if (index >= 0) {
        user = student[index];
        student.splice(index, 1)
        res.json(user)
    }
    else {
        res.status(404)
        res.end()
    }
}
module.exports = {
    homepage,
    getUser,
    updateUser,
    deleteUser
}