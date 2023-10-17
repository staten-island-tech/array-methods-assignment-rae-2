const cheeses = [
    {
        typeofcheese: " ! MOZZARELLA",
        texture: "moist, elastic texture",
        hard: false,
        color: "pale yellow",
        recipes: ["pizza", "caprese salad", "cheese and fresh herb quiche"],
    },
    {
        typeofcheese: " ! CHEDDAR",
        texture: "ranges from mild and buttery to sharp and biting",
        hard: true,
        color: "orange, can be paler",
        recipes: ["mac and cheese", "cornbread", "dips"],
    },
    {
        typeofcheese: " ! NEUFCHATEL",
        texture: "grainy, soft when mature",
        hard: false,
        color: "soft white",
        recipes: ["neufchatel cheesecake", "linguine and asparagus with creamy sauce", "margarita cheesecake"],
    },
    {
        typeofcheese: " ! PANEER",
        texture: "crumbly, spongy and soft",
        hard: false,
        color: "white",
        recipes: ["paneer pulao", "paneer tikka", "paneer lababdar"],
    },
    {
        typeofcheese: " ! PARMESAN",
        texture: "crumbly",
        hard: true,
        color: "pale yellow",
        recipes: ["caesar salad", "one-pot lemon garlic shrimp pasta", "creamy chicken penne pasta"],
    },
];

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//index starts at 0
//console.log(numbers[numbers.length - 1]);
//foreach is a for loop
//arrow function ()=> auto returns output, this keyword points global
//numbers.forEach((number, index) => console.log(number, index));
//students.forEach((student) => console.log(student.firstName));

cheeses.forEach((cheese)=>{
    console.log(cheese.typeofcheese);
    cheese.recipes.forEach((recipes)=>{
        console.log(recipes);
    });
});
const hard = cheeses.filter((cheese)=> cheese.hard == true);
console.log(hard);
