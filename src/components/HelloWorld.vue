<template>
    <div class="hello">
        <h1>Game of life</h1>
        <button name="cycle" @click="cycle">Next cycle</button>
        <table>
            <tr v-for="chunk in items">
                <td v-for="item in chunk">
                    <span v-if="item.alive">x</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                items: [],
            }
        },
        mounted() {
            this.items = [
                {"id": 1, "left": null, "right": 2, "alive": false},
                {"id": 2, "left": 1, "right": 3, "alive": false},
                {"id": 3, "left": 2, "right": 4, "alive": false},
                {"id": 4, "left": 3, "right": 5, "alive": false},
                {"id": 5, "left": 4, "right": null, "alive": false},
            ];

            let arrays = [];
            while (this.items.length > 0)
                arrays.push(this.items.splice(0, 10));

            this.items = arrays;

        },
        methods: {
            cycle() {
                setInterval(() => {
                    let item = this.items[Math.floor(Math.random() * this.items.length)];
                    item.alive = !item.alive;
                }, 2000);
            },
        }
    }

    function Life(
        id,
        neighbour0,
        neighbour1,
    ) {
        this.id = id;
        this.neighbour0 = neighbour0;
        this.neighbour1 = neighbour1;

    }
</script>

<style scoped>
    table {
        margin-left: auto;
        margin-right: auto;
    }

    td {
        width: 50px;
        height: 50px;
        border: solid 1px;

    }
</style>
