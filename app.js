let task = document.querySelector('#task_input');
let submit = document.querySelector('#submit_btn');

// data storing in array
let data_display = ``;
let taskData = [];

// event listener for submit button
submit.addEventListener('click', () => {
    submit_data();
});

function submit_data(){
    if (task.value.trim() !== '') { // Check if the input is not empty 
        taskData.push(task.value);
        task.value = ''; // Clear input field after adding task this part was ai edited
        display_data();
    }
}

function display_data() {
    data_display = ``;
    for (let index = 0; index < taskData.length; index++) {
        data_display += `<div class="card">
                <h3>${taskData[index]}</h3>
                <i class="ri-delete-bin-5-line" onclick="delete_task(${index})"></i>
            </div>`;
    }
    document.querySelector('.cards').innerHTML = data_display;
}

function delete_task(id) {
    taskData.splice(id, 1); // Remove the task at the given index
    display_data(); // Refresh the task list
}
addEventListener('keyup',(event)=>{
//  console.log(event);
 if(event.key == 'Enter'){
    submit_data();
 }
})