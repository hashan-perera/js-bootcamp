const notes = [{}, {
    title: 'my next trip',
    body: 'i would like to go to spain'
}, {
    title: 'habbits to work on',
    body: 'exercise, eating a bit better'
}, {
    title: 'office modification',
    body: 'get a new seat'
}
]

// console.log(notes.pop())
// notes.push('Note 4')

// console.log(notes.shift())
// notes.unshift('Note 5')
// notes.splice(1,0,'New Item')

// notes[2] = 'New Note 3'

// notes.forEach(function (item, index) {
//     console.log(`${index} ${item}`)
// })

// console.log(notes.length)
// console.log(notes)

// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = notes.length-1; count >= 0; count--) {
//     console.log(notes[count])
// }

const index = notes.findIndex(function (note, index) {
    console.log(note)
    return note.title === 'habbits to work on'
})

console.log(index)