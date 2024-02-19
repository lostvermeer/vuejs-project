<template>   
    <div class="modal-inner">              
        <form @submit.prevent="performAction">
            <div>
            <div class="div"><TitleInput lable="Title" id="title" v-model="task.title" placeholder="Title here..." required /></div>    
            <div class="div"><DecscriptionInput lable="Description" id="description" v-model="task.description" placeholder="Title here..." required /></div>    
            <div class="div"><DropdownMenu lable="Status" id="status" v-model="task.status" :options="statusOptions" /></div>    
                
            </div>
        <button id="submitButton" type="submit" @submit="$emit('closeModal')">Submit</button>
        </form> 
    </div>        
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from '../store/todo'
import TitleInput from './Form/TitleInput.vue'
import DecscriptionInput from './Form/DecscriptionInput.vue'
import DropdownMenu from './Form/DropdownMenu.vue'


const emit = defineEmits(['closeModal']);

const {taskId} = defineProps({
    taskId: {
        type: Number,
        default: null 
    }
});


const store = useStore();

const task = ref({
    title: '',
    description: '',
    status: "Open"
})

const statusOptions = [
    {text: "Open", value: "Open"},
    {text: "In Progress", value: "In-progress"},
    {text: "Complete", value: "Complete"}
];


function performAction () {
    if (taskId) {
        updateTask()
    } else {
        addTask()
    }
}

function addTask () {
    store.createTask({...task.value, id: Date.now()})
    resetTask()
    emit('closeModal')
}

function updateTask () {
    store.updateTask({...task.value})
    resetTask()
    emit('closeModal')
}

function resetTask () {
    task.value = {};
}

onMounted(() => {
    if(taskId) {
        const fetchTask = store.getTaskById(taskId)
        task.value = {...fetchTask}
    }
})

</script>


<style scoped>
#submitButton {
    background-color: #04AA6D;
    margin-left: 90px;
}

.modal-inner {
 
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    

    .div {
        justify-items: left;
    }
}
</style>
