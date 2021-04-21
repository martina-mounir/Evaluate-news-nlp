### Evaluate a news article with Natural Language Processing

## Project Overview

We will be building web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. When a user submits a URL, the web page dispalys sentiment analysis returned from meaningcloud API, based on the contents of the article.

I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

## Tools:

1. HTML

2. JavaScript

3. Webpack

4. Node

5. Express

6. meaningcloud API

7. Workbox

8. Jest

9. Any text-editor of your choice

10. CSS


## Installation

1. First, you will need to go to [https://www.meaningcloud.com/](https://www.meaningcloud.com/). Signing up will get you a free API Key 

2. Clone the repo
   git clone <repo>
   
3. Install NPM packages (I am using npm 6.14.12)
   npm install
   
4. Fill the .env file with your API key like this:
   API_KEY = 'ENTER YOUR API';
   
5. Run production server to build dist folder
   npm run build-prod
   
6. Run development server to test webpack server installation
   npm run build-dev
   
7. Start listening to server at port 8082
  npm start

8. Run Jest tests
  npm run test

