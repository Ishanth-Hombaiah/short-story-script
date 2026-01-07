#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";

// Parsing 
const short_stories = JSON.parse(await readFile("stories.json"));
const state = JSON.parse(await readFile("state.json"))

// Date set-up
const today = new Date(); 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

if (state.used.length === short_stories.length) {
    console.log("There are no stories remaining.");
    process.exit(0);
}

const unused = short_stories.filter(s => !state.used.includes(s.id));
const story = unused[Math.floor(Math.random() * unused.length)];
state.used.push(story.id);
await writeFile("state.json", JSON.stringify(state));

const weekday = days[today.getDay()];
const date = today.toDateString().slice(4);

console.log(`Today's date is ${date}, a ${weekday}.`);
console.log(`The daily selection is ${story.title} by ${story.author}.`);
