<template>
    <div class="hello">
        <h1>Game of life</h1>
        <button name="cycle" @click="cycle">Next cycle</button>
        <table>
            <tr v-for="chunk in items">
                <td v-for="item in chunk">
                    <span >{{item}}</span>
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
                rowLength: 10}
        },
        mounted() {
            for (let i = 1; i <= this.rowLength * this.rowLength; i++) {
                let neighbour0 = ((i - 1) % this.rowLength === 0) || i < this.rowLength + 1 ? null : i - this.rowLength - 1;
                let neighbour1 = (i - this.rowLength > 0) ? i - this.rowLength :  null;
                let neighbour2 = (i % this.rowLength === 0) || i <= this.rowLength - 1 ? null : i - this.rowLength + 1;
                let neighbour3 = (i % this.rowLength === 0) ? null : i + 1;
                let neighbour4 = (i + this.rowLength > this.rowLength * this.rowLength) || (i % this.rowLength === 0) ? null : i + this.rowLength - 1;
                let neighbour5 = (i + this.rowLength <= this.rowLength * this.rowLength) ? i + this.rowLength : null;
                let neighbour6 = (i + this.rowLength > this.rowLength * this.rowLength) || ((i - 1) % this.rowLength === 0) ? null : i + this.rowLength - 1;
                let neighbour7 = ((i - 1) % this.rowLength === 0) ? null : i - 1;
                this.items.push({
                    "id": i,
                    "neighbour0": neighbour0,
                    "neighbour1": neighbour1,
                    "neighbour2": neighbour2,
                    "neighbour3": neighbour3,
                    "neighbour4": neighbour4,
                    "neighbour5": neighbour5,
                    "neighbour6": neighbour6,
                    "neighbour7": neighbour7,
                });
            }

            let arrays = [];
            while (this.items.length > 0)
                arrays.push(this.items.splice(0, this.rowLength));

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
