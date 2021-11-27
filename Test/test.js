const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Susan"},
    {id: 3, name: "Anna"}
];
const articles = [
    {userId: 1, articles: ["one", "two", "three"]},
    {userId: 1, articles: ["four", "five"]},
    {userId: 1, articles: ["six", "seven", "eight", "nine"]}
];

function getUser(name) {
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=>user.name === name);

        if (user) {
            return resolve(user);
        } else {
            reject(`No such user with name ${name}`);
        }
    });
}

function getArticles(userId) {
    return new Promise((resolve, reject)=>{
        const userArticles = articles.find((user)=>user.userId === userId)

        if (userArticles) {
            return resolve(userArticles.articles);
        } else {
            reject("Wrong ID");
        }
    });
}

getUser("John")
.then((user)=>console.log(`${user.id} found!`))
.then((user)=>getArticles(user.userId))
.then((articles)=>console.log(articles))
.catch(()=>console.log("Failed."))
.finally(()=>console.log("Goodbye!"));