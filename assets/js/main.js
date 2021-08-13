/*
	Brain Damage Songtext

	The lunatic is on the grass
	The lunatic is on the grass
	Remembering games and daisy chains and laughs
	Got to keep the loonies on the path

	The lunatic is in the hall
	The lunatics are in my hall
	The paper holds their folded faces to the floor
	And every day the paperboy brings more

	And if the dam breaks open many years too soon
	And if there is no room upon the hill
	And if your head explodes with dark forebodings too
	I'll see you on the dark side of the moon

	The lunatic is in my head
	The lunatic is in my head
	You raise the blade, you make the change
	You rearrange me 'til I'm sane
	You lock the door
	And throw away the key
	There's someone in my head but it's not me

	And if the cloud bursts, thunder in your ear
	You shout and no one seems to hear
	And if the band you're in starts playing different tunes
	I'll see you on the dark side of the moon
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
songText += 'Remembering games and daisy chains and laughs<br>';
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