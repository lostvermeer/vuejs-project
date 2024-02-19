<template>
    <div>
        <label :for="id">
            {{ lable }}
        </label>
        <br>
        <textarea :id="id" :value="modelValue" @input="updateValue" rows="4"></textarea>
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
    }
})

const emit = defineEmits(['update:modelValue']);  

function updateValue(event) {
    emit('update:modelValue', event.target.value)
}
</script>

<style>
    
</style>