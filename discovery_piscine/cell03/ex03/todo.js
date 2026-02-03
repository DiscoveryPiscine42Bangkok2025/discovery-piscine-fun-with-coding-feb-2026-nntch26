
const ft_list = document.getElementById("ft_list");

let tasks = [];

function taskList(){
    ft_list.innerHTML = "";

    tasks.forEach(task => {
        const div = document.createElement('div')
        div.className="todo"
        div.textContent = task

        div.onclick = function () {
            if (confirm("Delete this TO DO?")) {
                
                div.remove();

                // ลบตำแหน่งนั้น
                const index = tasks.indexOf(task);
                tasks.splice(index, 1);

                saveCookie()
                taskList();
            }
        };

        ft_list.appendChild(div);
    });
    
    
}

   

function addTask(){
    const text = prompt("Enter new TO DO: ");

    if (!text || text.trim() === "") {
        return;
    }

    tasks.unshift(text) // หน้าสุด
    console.log("tasks", tasks)

    saveCookie()
    taskList();


}


function saveCookie() {
    document.cookie = "todo=" + JSON.stringify(tasks) + "; path=/";
}


function loadCookie() {
    const getcookie = document.cookie.split("todo=")[1];
    console.log("getcookie", getcookie)

    if (!getcookie) {
        return
    };

    tasks = JSON.parse(getcookie);
    console.log("tasks", tasks)
    taskList();
}

window.onload = loadCookie