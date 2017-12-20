<template>
    <div>
       <li role="presentation" data-toggle="modal" data-target=".bd-example-modal-lg" ><a href="#">Add a Game</a></li>
        <!-- Large modal -->
        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close pull-right" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h1 class="modal-title">Add a Game</h1>
                    </div>
                    <div class="modal-body">
    
                        <form>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Full Name</label>
    
                                <input type="text" class="form-control" placeholder="e.g. John Smith" v-model="Game.full_name">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Checkout</label>
    
                                <input type="text" class="form-control" placeholder="e.g. August 22, 2017" v-model="Game.time">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">How Many People</label>
    
                                <select class="form-control" id="exampleFormControlSelect1" v-model="Game.people">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">How many kids</label>
    
                                <select class="form-control" id="exampleFormControlSelect1" v-model="Game.kids">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Game Type</label>
    
                                <input type="text" class="form-control" placeholder="Suit" v-model="Game.room_type">
                            </div>
                            <div class="form-group">
                                <label class="form-control-label" for="formGroupExampleInput">Game Number</label>
    
                                <select class="form-control" id="exampleFormControlSelect1"v-model="Game.room_number">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary" @click="addToAPI">Book</button>
                        </form>
                    </div>
                    <div class="modal-footer">
    
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {

            Game: {
                full_name: '',
                time: '',
                people: '',
                kids: '',
                room_type: '',
                room_number: ''

            }
        }
    },
    methods: {

        addToAPI() {

            let newGame = {
                full_name: this.Game.full_name,
                time: this.Game.time,
                people: this.Game.people,
                kids: this.Game.kids,
                room_type: this.Game.room_type,
                room_number: this.Game.room_number
            }
            console.log(newGame);

            axios.post('http://localhost:3000/games', newGame).then((response) => {
                console.log(response);
                window.location.reload();
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style>

</style>
