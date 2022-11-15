let command = prompt('Enter one of the commands in Todo List');
const toDoList = ['create a game', 'code an app', 'make an art work', 'go back to painting'];
const commands = ['new', 'list', 'delete', 'quit'];
let isValid = false;

for (let validCommand of commands) {
    if (command === validCommand) {
        isValid = true;
    }
}

while (!command) {
    command = prompt('Command not found, Please Enter a valid one!!')
}

while (command) {
    for (let validCommand of commands) {
        if (command === validCommand) {
            isValid = true;
        }
    }

    if (isValid) {
        if (command === 'new') {
            const toDo = prompt('Write your new Todo in here:');
            toDoList.push(toDo);
            console.log(`Todo: "${toDo}" added correctly to the list`);
            command = prompt('Enter one of the commands in Todo List');
        }
        else if (command === 'list') {
            console.log('*************');
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`Item N°${i}: ${toDoList[i]}`);
            }
            console.log('*************');
            command = prompt('Enter one of the commands in Todo List');
        }
        else if (command === 'delete') {
            let index = prompt('inter the index of the item you want to delete from the list');
            toDoList.splice(index, 1);
            console.log(`Item at index ${index} was successfully removed!`);
            console.log('*************');
            console.log(`ToDo list after deleting:`);
            for (let i = 0; i < toDoList.length; i++) {
                console.log(`Item N°${i}: ${toDoList[i]}`);
            }
            console.log('*************');
            command = prompt('Enter one of the commands in Todo List');
        }
        else if (command === 'quit') {
            alert('Quiting ...! See you!!');
            break;
        }
    } else {
        command = prompt('Command not found, Please Enter a valid one or type quit for quiting!!');
    }

}









