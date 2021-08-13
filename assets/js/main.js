/*
	songText += `<h1>Brain Damage Songtext</h1>`;
songText += ``;
	songText += `The lunatic is on the grass`;
	songText += `The lunatic is on the grass`;
	songText += `Remembering games and daisy chains and laughs`;
	songText += `Got to keep the loonies on the path`;
songText += ``;
	songText += `The lunatic is in the hall`;
	songText += `The lunatics are in my hall`;
	songText += `The paper holds their folded faces to the floor`;
	songText += `And every day the paperboy brings more`;
songText += ``;
	songText += `And if the dam breaks open many years too soon`;
	songText += `And if there is no room upon the hill`;
	songText += `And if ${you}r head explodes with dark forebodings too`;
	songText += `I'll see ${you} on the dark side of the moon`;
songText += ``;
	songText += `The lunatic is in my head`;
	songText += `The lunatic is in my head`;
	songText += `${you} raise the blade, ${you} make the change`;
	songText += `${you} rearrange me 'til I'm sane`;
	songText += `${you} lock the door`;
	songText += `And throw away the key`;
	songText += `There's someone in my head but it's not me`;
songText += ``;
	songText += `And if the cloud bursts, thunder in ${you}r ear`;
	songText += `${you} shout and no one seems to hear`;
	songText += `And if the band ${you}'re in starts playing different tunes`;
	songText += `I'll see ${you} on the dark side of the moon`;
*/


let title = "<h1>Brain Damage Songtext</h1>";

let and = "And";
let the = "The";
let you = "You";
let hall = "hall";
let paperboy = "paperboy";
let lunatic = "lunatic is";
let head = "in my head";
let door = `${you} lock the door`;

let darkSide = "I'll see you on the dark side of the moon";
let onTheGrass = `The ${lunatic} on the grass`;
let myHead = `The ${lunatic} in my head`;

let songText = [`${title}`];

songText += onTheGrass.concat("<br>");
songText += onTheGrass.concat("<br>");
songText += `Remembering games and daisy chains and laughs<br>`;
songText += `Got to keep the loonies on the path<br>`;
songText += "<br>";
songText += the.concat(" ", lunatic, " in the ", hall, "<br>");
songText += the.concat(" lunatics are in my ", hall, "<br>");
songText += the.concat(" paper holds their folded faces to the floor<br>");
songText += and.concat(" every day the ", paperboy, " brings more<br>");
songText += "<br>";
songText += `${and} if the dam breaks open many years too soon`.concat("<br>");
songText += `${and} if there is no room upon the hill`.concat("<br>");
songText += `${and} if your head explodes with dark forebodings too`.concat("<br>");
songText += darkSide.concat("<br>");
songText += "<br>";
songText += myHead.concat("<br>");
songText += myHead.concat("<br>");
songText += `${you} raise the blade, you make the change`.concat("<br>");
songText += `${you} rearrange me 'til I'm sane`.concat("<br>");
songText += door.concat("<br>");
songText += `${and} throw away the key`.concat("<br>");
songText += `${the}re's someone in my head but it's not me`.concat("<br>");
songText += "<br>";
songText += `${and} if the cloud bursts, thunder in ${you.toLowerCase()}r ear`.concat("<br>");
songText += `${you} shout and no one seems to hear`.concat("<br>");
songText += `${and} if the band you're in starts playing different tunes`.concat("<br>");
songText += darkSide;

document.write(songText);