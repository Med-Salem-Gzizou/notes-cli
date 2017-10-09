
/**
*  all notes stored in json file
*/

const fs = require('fs');
var prompt = require('prompt-sync')();

const filename = "notes.json";
const notesFilePath = require('os').homedir() + "/" + filename;

var NOTES = {};
try {
	NOTES = JSON.parse( fs.readFileSync(notesFilePath, 'utf8') );
}catch (err){ console.log("Error", err.message) }

module.exports.show = function(note){
	if( NOTES[note] ){
		console.log("--------------------------------------");
		console.log( NOTES[note] );
		console.log("--------------------------------------");
	}else{
		console.log("[  error ]", note + " not found.");
	}
};

module.exports.add  = function(note){
	console.log("--------------------------------------");
	if ( NOTES[note] ) console.log( NOTES[note] );
	else NOTES[note] = "";

	let line;
	while(line = prompt('>') ) NOTES[note] += line + "\n";
	saveJsonFile(NOTES, notesFilePath);
};

module.exports.delete = function(note){
	NOTES[note] = undefined;
	saveJsonFile(NOTES, notesFilePath);
};

module.exports.list = function(){
	for (var note in NOTES) console.log(note);
};

function saveJsonFile(jsonObject, filePath){
	var jsonString = JSON.stringify(jsonObject, null, space=2);
	fs.writeFile(filePath, jsonString, 'utf8', (err) => {
		if(err) console.log(err.message);
	});
}
