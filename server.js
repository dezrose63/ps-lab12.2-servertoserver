const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

// Optional: simple root route so you know the server is running
app.get("/", (req, res) => {
  res.send("Welcome to The Daily Grind API ☕");
});

// Task 3 & 4: /api/fun-fact route that calls the external API
app.get("/api/fun-fact", async (req, res) => {
  try {
    // Call the Useless Facts API
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

    // Extract only the text of the fact
    const factText = response.data.text;

    // Task 5: Send back simplified JSON
    res.json({ fact: factText });
  } catch (error) {
    console.error("Error fetching fun fact:", error.message);

    // Error response as required
    res.status(500).json({ error: "Could not fetch fun fact" });
  }
});

// Task 2: Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
