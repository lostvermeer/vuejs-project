<template>
    <table id="tasks">
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
                    <button type="button" @click="editTodo(row.id)" 
                    >Update</button>
                    <button id="delete" type="button" @click="deleteTodo(row.id)" 
                    >Delete</button>
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
#tasks {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

    td, th {
    border: 1px solid #ddd;
    padding: 8px;
    }

    tr:nth-child(odd){background-color: #f2f2f2df;}

    tr:hover {background-color: #dddddd72;}

    th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #04AA6D;
    color: white;
    }
}
#delete{
    background-color: rgb(167, 36, 36);
  }
</style>
