const todoList = ['Go to the Store', 'Feed the Dog'];
let input = prompt('What do you need to do?')

while(input !== 'quit' && input !== 'q') {
    if(input === 'new') {
        const add = prompt('What would you like to add?');
        todoList.push(add);
        console.log(`${add} was added to the list`);
        console.log(todoList);    
    } else if(input === 'list') {
        for(let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
    } else if(input === 'delete') {
        const index = parseInt(prompt('Which index # to delete?'));
        if(Number.isNaN(index) === false && index >= 0 && index < todoList.length) {
            const deleted = todoList.splice(index, 1);
            console.log(`OK, ${deleted} was removed from list.`);
            console.log(todoList);
        } else {
            console.log(`Unknown index`);
        }
    }
    input = prompt('What would you like to do?')
}
console.log('OK. Quitting the App!');