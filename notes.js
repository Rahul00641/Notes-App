const chalk = require('chalk')
const fs = require('fs')

const file='Notes.json'

const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicate = notes.find((note)=>note.title===title)
    if(!duplicate){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    }
    else console.log(chalk.red.inverse('Title already available'))
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const removedNotes = notes.filter((note)=>{
        return !(note.title===title)
    })
    if(notes.length===removedNotes.length)
        console.log(chalk.bgRed.bold('No note available with Title =',title))
    else
        saveNotes(removedNotes)
}

const findNote = (findNote)=>{
    const notes = loadNotes()
    const Note = notes.find((note)=>findNote===note.title)
    if(!Note){
        console.log(chalk.bgRed('Not Found'))
    }
    else
        console.log(chalk.bold(Note.title)+'\n'+Note.body)
}

const loadNotes = ()=>{
    try{
    return JSON.parse(fs.readFileSync(file).toString())
    }
    catch(error){
        return []
    }
}

const saveNotes = (notes)=>{
    fs.writeFileSync(file,JSON.stringify(notes))
}
 
module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    findNote:findNote,
    loadNotes:loadNotes
}