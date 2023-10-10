const students = [
    {
        firstName: "i detest",
        lastName: "shao wei lin",
        graduated: false,
        DOB: 2333,
        siblings: ["eeeee"],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        firstName: "shaowei",
        lastName: "lin is horrible",
        graduated: false,
        DOB: 23,
        siblings: ["yahaha"],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        firstName: "shaowei",
        lastName: "isbad",
        graduated: true,
        DOB: 3323,
        siblings: ["wwwwddd"],
        age: function () {
            return year - this.DOB;
        },
    },
    {
        firstName: "weewee",
        lastName: "suks",
        graduated: true,
        DOB: 7773,
        siblings: ["ymemem"],
        age: function () {
            return year - this.DOB;
        },
    },
];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//index starts at 0
//console.log(numbers[numbers.length - 1]);
//foreach is a for loop
//arrow function ()=> auto returns output, this keyword points global
//numbers.forEach((number, index) => console.log(number, index));
//students.forEach((student) => console.log(student.firstName));

const current = students.filter((student)=> student.graduated !== true);
console.log(current);
