const todos = ['Wake Up', 'Have a Bath', 'Eat Breakfast', 'Go for Jogging', 'Go to Work']

todos.splice(2, 1)
todos.push('Buy Coffee')
todos.shift()

console.log(`You have ${todos.length} things to do Today!`)

todos.forEach(function (todos, index) {
    const num = index + 1
    console.log(`${num}. ${todos}`)
})

for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
}