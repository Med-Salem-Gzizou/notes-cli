#!/usr/bin/env node

const notesManager = require('./notesManager.js');
var argv = require('minimist')(process.argv.slice(2));


if (argv.h || argv.help) {
	console.log([
		'usage:',
		'notes [note-name]',
		'notes [option] [note-name]',
		'',
		'option:',
		'  -s --show     Show, Display note',
		'  -a --add      Add or Edit note',
		'  -d --delete   Delete note',
		'  -l --list     Show available list',
		'  -h --help     Print this list and exit.'
	].join('\n'));
	process.exit();
}

var notes = null;

if (notes = argv.d || argv.delete){
	if ( typeof notes === "object" ){
		notes.forEach( (note) => { notesManager.delete(note) });
	}else {
		notesManager.delete(notes);
	}
}

if (notes = argv.s || argv.show){
	if ( typeof notes === "object" ){
		notes.forEach( (note) => { notesManager.show(note) });
	}else {
		notesManager.show(notes);
	}
}

if (notes = argv.a || argv.add){
	if ( typeof notes === "object" ){
		notes.forEach( (note) => { notesManager.add(note) });
	}else {
		notesManager.add(notes);
	}
}

if (argv.l || argv.list) notesManager.list();

if (argv._.length) argv._.forEach( (note) => { notesManager.add(note) } );
