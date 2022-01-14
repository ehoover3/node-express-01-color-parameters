require("dotenv").config(); // Get environment variables
const express = require("express"); // Require needed node modules
const app = express(); // Initialize application by calling the function returned by the express module

// ROUTES

// White Page
app.get("/", function (req, res) {
  res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
            <button>
            <a href="/red">Red</a>
        </button>
        <button>
            <a href="/green">Green</a>
        </button>
        <button>
            <a href="/blue">Blue</a>
        </button>
        </body>
    `);
});

// Color Page
app.get("/:color", function (req, res) {
  let myColor = req.params.color;
  res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)} Page</h1>
            <button>
                <a href="/red">Red</a>
            </button>
            <button>
                <a href="/green">Green</a>
            </button>
            <button>
                <a href="/blue">Blue</a>
            </button>
        </body>
    `);
});

app.listen(process.env.PORT); // Listen to a port number defined by a local environment variable
