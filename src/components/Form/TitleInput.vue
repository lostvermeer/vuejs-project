<template>
    <div>
        <label :for="id">
            {{ lable }}
        </label>
        <br>
        <input 
        :id="id"
        :placeholder="placeholder"
        :required="required"
        :value="modelValue"
        @input="updateValue"
        />
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
    placeholder: {
        type: String
    },
    required: {
        type: Boolean
    }
})

const emit = defineEmits(['update:modelValue']);  

function updateValue(event) {
    emit('update:modelValue', event.target.value)
}
</script>

<style>
    
</style>