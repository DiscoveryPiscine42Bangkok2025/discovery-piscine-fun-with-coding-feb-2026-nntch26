
$(document).ready(function () {

    const $list = $("#ft_list");
    let tasks = [];

    function taskList() {

        $list.empty(); 

        tasks.forEach(task => {

            const $div = $("<div>")
                .addClass("todo")
                .text(task)

                .click(function () {

                    if (confirm("Delete this TO DO?")) {

                        const index = tasks.indexOf(task);
                        tasks.splice(index, 1);

                        saveCookie();
                        taskList();
                    }
                });

            $list.append($div);
        });
    }



    $("#btn").click(function () {

        const text = prompt("Enter new TO DO:");

        if (!text || text.trim() === "") return;

        tasks.unshift(text);

        saveCookie();
        taskList();
    });


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

    loadCookie();
})