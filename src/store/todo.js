import { defineStore } from "pinia";

export const useStore = defineStore ('todos', () => {

    const todos = ref([{name: "Jonny"}, {surname: "Bill"}]);

    function loadTodos() {
        const storedTodos = localStorage.getItem("todos")
    }

});