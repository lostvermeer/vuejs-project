import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore ('todos', () => {

    //state

    let todos = ref([]);

    //actions

    function loadTodos() {
        const todosStringForm = localStorage.getItem("todos");
        if(todosStringForm) {
            const storedTodos = JSON.parse(todosStringForm);
            todos.value = storedTodos;
            console.log(todos.value);
        }
    }

    function createTask(task) {
        todos.value.push({
            id: Date.now(),
            ...task,
            createdDate: new Date().toLocaleString(),
            updatedDate: new Date().toLocaleString()
        })
        localStorage.setItem('todos', JSON.stringify(todos.value))
    }

    function updateTask(updatedTask) {
        const index = todos.value.findIndex((todo) => todo.id === updatedTask.id )
        if(index !== -1) {
            todos.value[index] = {
                ...updatedTask,
                updatedDate: new Date().toLocaleString()
            }
            localStorage.setItem('todos', JSON.stringify(todos.value))
        }
    }

    function deleteTask(taskId) {
        todos.value = todos.value.filter((task) => task.id !== taskId)
        localStorage.setItem('todos', JSON.stringify(todos.value))
    }

    function clearAllStorage() {
        localStorage.clear();
    }

    const getTaskById = (id) => {
        return todos.value.find((task) => task.id === id)
    }

    //getters


    const getByRows = computed(() => todos.value);

    const getByLable = computed(() => ([
        {
            key: "title",
            lable: "Title"
        },
        {
            key: "description",
            lable: "Description"
        },
        {
            key: "status",
            lable: "Status"
        },
        {
            key: "createdDate",
            lable: "Created date"
        },
        {
            key: "updatedDate",
            lable: "Last Updated date"
        }
    ]));

    return { todos, loadTodos, clearAllStorage, createTask, updateTask, deleteTask, getTaskById , getByLable, getByRows}
});