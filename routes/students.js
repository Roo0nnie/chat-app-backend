var express = require("express");
var router = express.Router();

let studentsInfo = [
	{id: 1,firstName:"Juan", lastName:"Dela Cruz", code:"001", age: 25,gender: "male", course: "Manager",birthdate:"1990-01-01"},
	{id: 2,firstName:"Anna", lastName:"Salvador", code:"002", age: 21, gender: "female", course: "Junior Dev",birthdate:"1991-01-01"},
	{id: 3,firstName:"Mark", lastName:"Bautista", code:"003", age: 28, gender: "male", course: "Senior Fullstack Dev",birthdate:"1992-01-01"},
	{id: 4,firstName:"Micheal", lastName:"Garcia", code:"004", age: 31, gender: "male", course: "CEO",birthdate:"1993-01-01"},
    {id: 5,firstName:"Michelle", lastName:"Bautista", code:"005", age: 34, gender: "female", course: "CEO",birthdate:"1993-01-01"},
    {id: 6,firstName:"Nicole", lastName:"Dela Cruz", code:"006", age: 30, gender: "female", course: "CEO",birthdate:"1993-01-11"},
    {id: 7,firstName:"Jerold", lastName:"Cuico", code:"006", age: 30, gender: "male", course: "Fullstack Dev",birthdate:"1994-01-28"},
    {id: 8,firstName:"Joshua", lastName:"Tobongbanua", code:"006", age: 30, gender: "male", course: "Fullstack Dev",birthdate:"1995-01-04"},
    {id: 9,firstName:"Ralph", lastName:"Arcos", code:"006", age: 30, gender: "male", course: "Fullstack Dev",birthdate:"1996-04-01"},
    {id: 10,firstName:"Amie", lastName:"Mimo", code:"006", age: 30, gender: "female", course: "Fullstack Dev",birthdate:"1996-08-01"},
];

router.get("/", (req, res, next) => {
    res.send(studentsInfo);
});

router.get("/count/all", (req, res) => {
    res.status(200).send({total: studentsInfo.length});
});

router.get("/:id", (req, res) => {
    const { id } = req.params;
    let student = studentsInfo.find((item) => item.id === Number(id));
    res.status(200).send(student ?? "Record not found!");
});

router.get("/name/:keyword", (req, res) => {
    const { keyword } = req.params;
    let list = studentsInfo.filter((item) => 
    (item.firstName.toLowerCase().includes(keyword) || item.lastName.toLowerCase().includes(keyword)));
    res.status(200).send(list.length > 0 ? list : keyword  + " is not found!");
});

router.post('/:id', (req, res)=>{
    let student = {
        id: studentsInfo.length + 1,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        code:req.body.code,
        age:req.body.age,
        gender:req.body.gender,
        course:req.body.course,
        birthdate:req.body.birthdate,
    }
    studentsInfo.push(student);
    res.status(200).send(student);

});

router.put('/:id', (req, res) =>{
    let id = req.params;
    //const {firstName, lastName, code, age, gender, course, birthdate} = req.body;
    
    let student = studentsInfo.find((item) => item.id === Number(req.body.id));

    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.code = req.body.code;
    student.age = req.body.age;
    student.gender = req.body.gender;
    student.course = req.body.course;
    student.birthdate = req.body.birthdate;

    res.status(200).send(student);

});

router.delete('/:id', (req, res) =>{
    studentsInfo = studentsInfo.filter((item) => item.id !== Number(req.body.id));
    res.status(200).send({message: "Record " + req.body.id + " has been deleted."});

});

module.exports = router;