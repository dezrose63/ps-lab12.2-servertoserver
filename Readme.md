<img width="250" height="50" alt="image" src="https://github.com/user-attachments/assets/38f3794e-58c4-4b3d-a31e-4ef089121296" />

#  Per Scholas Software Engineer Bootcamp Lab 12.2

## Do you want to get ***free*** tech training from Per Scholas? 

## [Click Here to find out how!](https://perscholas.referralrock.com/l/7MIDHLPB/) 

********************************************************************************************************************************************************

![preview of server.js](image.png)

# Lab 12.2 - Server to Server Communication

# Scenario

The owner of “The Daily Grind” coffee shop was so impressed with your first server that they have a new request. They want to add a “Fun Fact of the Day” to a digital screen in their shop. To do this, they need an API endpoint on their server that fetches a random fun fact from an external public API and provides it in a simple format.

# Instructions

## Task 1: Project Setup

If you are starting a new project, create a directory, cd into it, and run npm init -y.
Install the necessary packages: express and axios.

npm install express axios

## Task 2: Create the Express Server

Create a file named server.js.
Inside this file, set up a basic Express server that listens on a port (e.g., 3000) and logs a message to the console on startup.

## Task 3: Create the API Route

In server.js, create a new GET route at the path /api/fun-fact.
This route will be responsible for fetching the data and sending it to the client.

## Task 4: Fetch from an External API

For this lab, we will use the Useless Facts API , which provides random facts and requires no API key. The endpoint for a random fact is https://uselessfacts.jsph.pl/api/v2/facts/random.
Inside your /api/fun-fact route handler, use axios to make a GET request to this URL.
Remember to use async/await and wrap your API call in a try...catch block to handle potential errors.

## Task 5: Handle and Respond with Data

If the axios request is successful, the response data from the Useless Facts API will look something like this:
```json
{
  "id": "d046f554-9430-4113-9528-56455147814b",
  "text": "A standard deck of cards is a calendar...",
  "source": "djtech.net",
  "source_url": "http://www.djtech.net/humor/useless_facts.htm",
  "language": "en",
  "permalink": "https://uselessfacts.jsph.pl/api/v2/facts/d046f554-9430-4113-9528-56455147814b"
}
```
Your API should not send this entire object to the client. Instead, extract only the text of the fact.
Send a JSON response back to the client in the following format:

```json
{
  "fact": "A standard deck of cards is a calendar..."
}
```
If the request fails (i.e., the catch block is executed), send an appropriate error response, such as a 500 status code and a JSON object like { "error": "Could not fetch fun fact" }.

# Submission Instructions

Ensure your server.js file is complete and your package.json includes the required dependencies.
Run your server with node server.js.
Test your API by visiting http://localhost:3000/api/fun-fact in your browser. You should see a new random fact in the specified JSON format each time you refresh.
Once complete, submit a link to your GitHub repository containing the project files.

******************************************************************************************************************************

# Reflection Questions

1. Why was it important to re-format the data from the Useless Facts API before sending it to your own client? 
    The external API might return extra fields you don’t need or use different names than your frontend expects.

2. What are the benefits of an API providing a clean, minimal response?
    Re-formatting lets you send a clean, consistent shape (e.g., { fact: "..." }) so your client code stays simple. A clean, minimal response is easier to debug, reuse, and change later without breaking the frontend.

3. In the catch block, why is it better to send a generic error message to the client instead of the actual error object from axios?
    The axios error object can contain internal details (stack traces, URLs, headers) that you don’t want to expose for security reasons. A generic message (e.g., "Something went wrong. Please try again.") keeps responses safe and user-friendly, while you still log the real error on the server for debugging.

4. How might you modify this application to get a fact in a different language if the external API supported it (e.g., with a query parameter like ?language=de)?
    - Accept a language option (from the client or a route/query param).
    - Pass it to the external API’s URL, e.g.:
    - const lang = req.query.language || "en";
    - const url = `https://uselessfacts.api/random?language=${lang}`;
    - Keep the rest of the logic the same, just returning the translated fact to your client.