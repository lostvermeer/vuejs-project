import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore ('todos', () => {

    let todos = ref([]);

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

    function loadTodos() {
        const todosStringForm = localStorage.getItem("todos");
        if(todosStringForm) {
            const storedTodos = JSON.parse(todosStringForm);
            todos = ref(storedTodos);
            console.log(todos.value);
        }
    }

    function clearAllStorage() {
        localStorage.clear();
    }


    return { todos, loadTodos, getByLable, getByRows, clearAllStorage }
});