<template>
    <section class="mainPageSection">

        <nav>
            <h2>Todo tasks</h2>
        </nav>
        <div class="addItemButton">
            <button type="button" id="addTaskButton" @click="toggleModal">Add Task</button>
        </div>



        <div style="padding-top: 10px;">
            <TodoTable
                :rows="rows"
                :lables="lables"
                @edit="openEditModal"
                @delete="deleteTodo"
            />
        </div>




    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import TodoTable from '../components/TodoTable.vue';
import { useStore } from '../store/todo';


const activeModal = ref(false)
const taskId = ref(null)

const store = useStore();


const lables = computed(() => store.getByLable)
const rows = computed(() => store.getByRows) 

function toggleModal() {
    activeModal.value = !activeModal.value;
    if (!activeModal.value) {
        taskId.value = null;
    }
}

const openEditModal = () => {alert("edit")};

const deleteTodo = () => {alert("delete")};

onMounted(() => {
    store.loadTodos();
});

</script>


<style scoped>
    
</style>