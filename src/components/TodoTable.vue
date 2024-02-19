<template>
    <table>
        <thead>
            <tr>
                <th v-for="lable in lables">{{ lable.lable }}</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="rows.length === 0">
                <td :colspan="lables.length + 1 " style="text-align: center;">No tasks yet.</td>
            </tr>

            <tr v-for="row in rows" :key="row.id">
                <td v-for="lable in lables" :key="lable.key">{{ row[lable.key] }}</td>

                <td>
                    <button type="button" @click="editTodo(row.id)">Update</button>
                    <button type="button" @click="deleteTodo(row.id)">Delete</button>
                </td>

            </tr>

        </tbody>
    </table>
</template>

<script setup>

const emit = defineEmits(['edit', 'delete']);

const {lables, rows} = defineProps({
    lables: {
        type: Array,
        required: true
    },
    rows: {
        type: Array,
        required: true
    }
});

const editTodo = (todoId) => emit('edit', todoId);
const deleteTodo = (todoId) => emit('delete', todoId);

</script>


<style scoped>
   table, thead, tr, th, td {
        border: 2px solid red;
    }
</style>
