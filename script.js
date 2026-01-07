#!/usr/bin/env node
import { readFile } from "node:fs/promises";

// Parsing 
const short_stories = JSON.parse(await readFile("stories.json", "utf8"));
const command = process.argv[2];

// Date set-up
const today = new Date(); 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

if (state.used.length === short_stories.length) {
    console.log("There are no stories remaining.");
    process.exit(0);
}

do { story = short_stories[Math.floor(Math.random() * short_stories.length)]; } 
while (state.used.includes(story.id));

state.used.push(story.id);
await writeFile("state.json", JSON.stringify(state));

const story = short_stories[Math.floor(Math.random() * short_stories.length)];
const weekday = days[today.getDay()];
const date = today.toDateString().slice(4);

console.log(`Today's date is ${date}, a ${weekday}.`);
console.log(`The daily selection is ${story.title} by ${story.author}.`);
