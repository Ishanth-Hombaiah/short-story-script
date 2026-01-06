#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import readline from "node:readline";

// Parsing 
const short_stories = JSON.parse(await readFile("stories.json", "utf8"));
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const command = process.argv[2];

// Date set-up
const today = new Date(); 
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

if (command == "daily") {
    const story = short_stories[Math.floor(Math.random() * short_stories.length)];
    const day = days[Math.floor(Math.random() * days.length)];
    console.log("Today is ${day},  {days[today.getDay()]}.");
    console.log("The daily selection is ${story.title} by ${story.author}.");
} else {
    console.log("Apologies, this is an unfamiliar command.")
}

