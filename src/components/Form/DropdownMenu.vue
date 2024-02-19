<template>
    <div>
        <label :for="id">
            {{ lable }}
        </label>
        <br>
        <select :id="id" :value="modelValue" @input="updateValue">
            <option v-for="option in options" :value="option.value">{{ option.text }}</option>
        </select>
    </div>
</template>

<script setup>
defineProps({
    lable: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    modelValue: {
        type: String,
        default:''
    },
    options: {
        type: Array
    }
})

const emit = defineEmits(['update:modelValue']);  

function updateValue(event) {
    emit('update:modelValue', event.target.value)
}
</script>

<style>
    
</style>