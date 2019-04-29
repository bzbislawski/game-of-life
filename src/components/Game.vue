<template>
    <div>
        <h1>Game of life</h1>
        <button name="cycle" @click="cycle">Start cycle</button>
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
            }
        },
        mounted() {
            for (let i = 1; i <= this.rowLength * this.rowLength; i++) {
                let neighbours = [];
                neighbours[0] = ((i - 1) % this.rowLength === 0) || i < this.rowLength + 1 ? null : i - this.rowLength - 1;
                neighbours[1] = (i - this.rowLength > 0) ? i - this.rowLength : null;
                neighbours[2] = (i % this.rowLength === 0) || i <= this.rowLength - 1 ? null : i - this.rowLength + 1;
                neighbours[3] = (i % this.rowLength === 0) ? null : i + 1;
                neighbours[4] = (i + this.rowLength > this.rowLength * this.rowLength) || (i % this.rowLength === 0) ? null : i + this.rowLength + 1;
                neighbours[5] = (i + this.rowLength <= this.rowLength * this.rowLength) ? i + this.rowLength : null;
                neighbours[6] = (i + this.rowLength > this.rowLength * this.rowLength) || ((i - 1) % this.rowLength === 0) ? null : i + this.rowLength - 1;
                neighbours[7] = ((i - 1) % this.rowLength === 0) ? null : i - 1;

                this.items.push({
                    "id": i,
                    "neighbours": neighbours,
                    "alive": false,
                });
            }

            this.populateBoard();
        },
        methods: {
            cycle() {

                setInterval(() => {
                    let afterCycleItems = [];
                    this.items.forEach((item) => {

                        let nextCycleAlive = false;

                        let aliveNeighbours = item.neighbours.filter(neighbour => {
                            return neighbour !== null && this.items[neighbour - 1].alive;
                        }).length;


                        if (item.alive === false) {
                            nextCycleAlive = aliveNeighbours === 3;
                        }
                        if (item.alive === true) {
                            nextCycleAlive = aliveNeighbours === 3 || aliveNeighbours === 2;
                        }

                        afterCycleItems.push({
                            "id": item.id,
                            "neighbours": item.neighbours,
                            "alive": nextCycleAlive,
                        })
                    });

                    this.items = afterCycleItems;
                    this.populateBoard();

                }, 500);
            },
            toggleLife(itemId) {
                let foundIndex = this.items.findIndex(x => x.id === itemId);
                this.items[foundIndex].alive = !this.items[foundIndex].alive;

                this.populateBoard();
            },
            populateBoard() {
                this.itemsToDisplay = [];
                let array = JSON.parse(JSON.stringify(this.items));
                while (array.length > 0)
                    this.itemsToDisplay.push(array.splice(0, this.rowLength));
            }
        }
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
