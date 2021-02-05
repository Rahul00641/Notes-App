const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command:'remove',
    describe:'Remove the note',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command:'add',
    describe:'Add the note',
    builder:{
        title : {
            describe:'title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Body of Note',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'list',
    describe:'List all notes',
    handler:()=>{
        console.log(notes.loadNotes())
    }
})

yargs.command({
    command:'read',
    describe:'Read the note',
    builder:{
        title:{
            describe:'title',
            demandOption:true,
            type:'string'
        }
    },
    handler:()=>{
        notes.findNote(argv.title)
    }
})

yargs.parse()