<template>
    <div class="hello">
        <h1>Game of life</h1>
        <button name="cycle">Next cycle</button>
        <table>
            <tr v-for="row in 10">
                <td v-for="life in 10">

                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },
}
</script>

<style scoped>
    table {
        margin-left:auto;
        margin-right:auto;
    }
    td {
        width: 50px;
        height: 50px;
        border: solid 1px;

    }
</style>
