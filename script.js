const taskInput = document.getElementById("gName");
const secondTaskInput = document.getElementById("gSubmit");
const btnSubmit = document.getElementById("addButton");
const tableElement = document.getElementById("tableLine");




btnSubmit.addEventListener("click", (e) => {
   

    let tableRow = document.createElement("tr");
    let tdElement = document.createElement("td");
    let tdElementTwo = document.createElement("td");

    const newTask = taskInput.value;
    const taskInputTwo = secondTaskInput.value;

    

    tdElement.innerText = newTask;
    tdElementTwo.innerText = taskInputTwo;

    tableRow.appendChild(tdElement);
    tableRow.appendChild(tdElementTwo);
    tableElement.appendChild(tableRow);

    totalHoursElement.innerText = `Your total hours together is ${totalHours += taskInputTwo}`;

});
