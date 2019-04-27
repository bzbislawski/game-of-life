<template>
    <div class="hello">
        <h1>Game of life</h1>
        <button name="cycle" @click="cycle">Next cycle</button>
        <table>
            <tr v-for="chunk in itemsToDisplay">
                <td v-for="item in chunk" v-bind:class="{alive: item.alive}" @click="toggleLife(item.id)">
                    <span v-if="item != null && item.alive"></span>
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
                itemsToDisplay: [],
                rowLength: 10,
                isCycleRunning: false,
            }
        },
        mounted() {
            for (let i = 1; i <= this.rowLength * this.rowLength; i++) {
                let neighbour0 = ((i - 1) % this.rowLength === 0) || i < this.rowLength + 1 ? null : i - this.rowLength - 1;
                let neighbour1 = (i - this.rowLength > 0) ? i - this.rowLength :  null;
                let neighbour2 = (i % this.rowLength === 0) || i <= this.rowLength - 1 ? null : i - this.rowLength + 1;
                let neighbour3 = (i % this.rowLength === 0) ? null : i + 1;
                let neighbour4 = (i + this.rowLength > this.rowLength * this.rowLength) || (i % this.rowLength === 0) ? null : i + this.rowLength + 1;
                let neighbour5 = (i + this.rowLength <= this.rowLength * this.rowLength) ? i + this.rowLength : null;
                let neighbour6 = (i + this.rowLength > this.rowLength * this.rowLength) || ((i - 1) % this.rowLength === 0) ? null : i + this.rowLength - 1;
                let neighbour7 = ((i - 1) % this.rowLength === 0) ? null : i - 1;
                let alive = false;

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
                    "alive": alive,
                });
            }

            let array = JSON.parse(JSON.stringify(this.items));
            while (array.length > 0)
                this.itemsToDisplay.push(array.splice(0, this.rowLength));


        },
        methods: {
            cycle() {
                let afterCycleItems = [];

                this.items.forEach((item) => {

                    let nextCycleAlive = false;

                    let n0Alive = this.items[item.neighbour0-1] !== undefined && this.items[item.neighbour0-1].alive ? 1 : 0;
                    let n1Alive = this.items[item.neighbour1-1] !== undefined && this.items[item.neighbour1-1].alive ? 1 : 0;
                    let n2Alive = this.items[item.neighbour2-1] !== undefined && this.items[item.neighbour2-1].alive ? 1 : 0;
                    let n3Alive = this.items[item.neighbour3-1] !== undefined && this.items[item.neighbour3-1].alive ? 1 : 0;
                    let n4Alive = this.items[item.neighbour4-1] !== undefined && this.items[item.neighbour4-1].alive ? 1 : 0;
                    let n5Alive = this.items[item.neighbour5-1] !== undefined && this.items[item.neighbour5-1].alive ? 1 : 0;
                    let n6Alive = this.items[item.neighbour6-1] !== undefined && this.items[item.neighbour6-1].alive ? 1 : 0;
                    let n7Alive = this.items[item.neighbour7-1] !== undefined && this.items[item.neighbour7-1].alive ? 1 : 0;
                    let aliveNeighbours = (n0Alive + n1Alive + n2Alive + n3Alive + n4Alive + n5Alive + n6Alive + n7Alive);

                    if (item.alive === false) {
                        nextCycleAlive = aliveNeighbours === 3;
                    }
                    if (item.alive === true) {
                        nextCycleAlive = aliveNeighbours === 3 || aliveNeighbours === 2;
                    }

                    afterCycleItems.push({
                        "id": item.id,
                        "neighbour0": item.neighbour0,
                        "neighbour1": item.neighbour1,
                        "neighbour2": item.neighbour2,
                        "neighbour3": item.neighbour3,
                        "neighbour4": item.neighbour4,
                        "neighbour5": item.neighbour5,
                        "neighbour6": item.neighbour6,
                        "neighbour7": item.neighbour7,
                        "alive": nextCycleAlive,
                    })
                });


                this.items = [];
                this.itemsToDisplay = [];
                this.items = afterCycleItems;
                let array = JSON.parse(JSON.stringify(this.items));
                while (array.length > 0)
                    this.itemsToDisplay.push(array.splice(0, this.rowLength));



                // setInterval(() => {
                //     let item = this.items[Math.floor(Math.random() * this.items.length)];
                //     item.alive = !item.alive;
                // }, 2000);
            },
            toggleLife(itemId) {
                let foundIndex = this.items.findIndex(x => x.id === itemId);
                this.items[foundIndex].alive = !this.items[foundIndex].alive;

                this.itemsToDisplay.forEach(array => {
                    array.forEach(element => {
                        if (element.id === itemId) {
                            element.alive = !element.alive;
                        }
                    })
                })
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
    .alive {
        background-color: darkred;
    }
</style>
