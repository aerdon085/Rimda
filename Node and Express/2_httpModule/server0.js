const http = require("http");

const server = http.createServer((req, res)=>{
    // if "localhost:5000/"
    if (req.url === "/") {
        res.end("Welcome to our home page");
    }

    // if "localhost:5000/about"
    if (req.url === "/about") {
        res.end("Here is our history");
    }

    // default display
    res.end(`
        <h1>Oops, something went wrong!</h1>
        <a href="youtube.com">Watch yabai vids!</a>
        `
    );
});

server.listen(5000); // the argument is the id of some sort "url: localhost:5000"