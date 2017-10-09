#!/usr/bin/env node

const notesManager = require('./notesManager.js');
var program = require('commander');

program
	.version('1.1.0')
	.usage('<note-name>')
	.action(function(noteName){
		console.log('[Display] : "%s"', noteName);
		notesManager.show(noteName);
	});

program
	.command('list')
	.alias('l')
	.description('Show available notes')
	.action(function(){
		console.log('[list] all notes :');
		notesManager.list();
	});

program
	.command('add <note-name>')
	.alias('a')
	.description('add new note or edit existing note')
	.action(function(noteName){
		console.log('[Add] : "%s"', noteName);
		notesManager.add(noteName);
	});

program
	.command('delete <note-name>')
	.alias('d')
	.description('delete note')
	.action(function(noteName){
		console.log('[delete] :', noteName);
		notesManager.delete(noteName);
	});

program.parse(process.argv);

if (!program.args.length){
	console.log([
		' Simple command line notes taking app with nodejs ',
		' Repository: https://github.com/Med-Salem/notes-cli',
		'',
		' For help run: $ notes --help'
	].join('\n'));
}
