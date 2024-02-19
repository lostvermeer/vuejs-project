<template>
        <div>            
            <form @submit.prevent="performAction">
            <TitleInput lable="Title" id="title" v-model="task.title" placeholder="Title here..." required />
            <DecscriptionInput lable="Description" id="description" v-model="task.description" placeholder="Title here..." required />
            <DropdownMenu lable="Status" id="status" v-model="task.status" :options="statusOptions" />
            <button type="submit" @submit="$emit('closeModal')">Submit</button>
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

</style>
