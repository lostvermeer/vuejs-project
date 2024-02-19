<template>
    <div class="home">

        <nav class="header">
            <h2>Todo tasks</h2>
        </nav>
        <div>
            <button type="button" id="addTaskButton" @click="toggleModal">Add Task</button>
        </div>
        <div>
            <button type="button" id="sort" @click="sortByDate">Sort by Date</button>
        </div>



        <div id="divTable" style="padding-top: 10px;">
            <TodoTable
                :rows="rows"
                :lables="lables"
                @edit="openEditModal"
                @delete="deleteTodo"
            />
        </div>
        <BaseModal :activeModal="activeModal" @closeModal="toggleModal">
            <Modal @closeModal="toggleModal" v-model:taskId="taskId"/>
        </BaseModal>    

    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import TodoTable from '../components/TodoTable.vue';
import Modal from '../components/Modal.vue';
import BaseModal from '../components/BaseModal.vue';
import { useStore } from '../store/todo';


const activeModal = ref(null)
const taskId = ref(null)

const store = useStore();

let rows = computed(() => store.getByRows) 
const lables = computed(() => store.getByLable)

const toggleModal = () => {
    activeModal.value = !activeModal.value;
    if (!activeModal.value) {
        taskId.value = null;
    }
}

const sortByDate = () => {
    rows = store.sortByDate();
}

const openEditModal = (id) => {
    taskId.value = id
    toggleModal()
};

const deleteTodo = (id) => store.deleteTask(id);

onMounted(() => {
    store.loadTodos();
});

</script>


<style lang="scss" scoped>
.home {
  
  height: 100vh;
  

  .header {
    justify-content: center;
  }

  #divTable{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
#addTaskButton {
    background-color: #04AA6D;
}
</style>