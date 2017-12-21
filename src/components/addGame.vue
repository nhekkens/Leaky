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

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style="text-align: center;">Player</th>
                                        <th style="text-align: center;">Kills</th>
                                        <th style="text-align: center;">Leaks</th>
                                        <th style="text-align: center;">Infuse</th>
                                        <th style="text-align: center;">Income</th>
                                        <th style="text-align: center;">Gas</th>
                                        <th style="text-align: center;">Value</th>
                                        <th style="width: 90px; text-align: center;">First Leak</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">Slapy</td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Slapy.Kills">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Slapy.Leaks">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Slapy.Infuse">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Slapy.Income">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Slapy.Gas">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Slapy.Value">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group" style="text-align: center; margin-top:6px;">
                                                <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger" value="1" v-bind:true-value="1" v-bind:false-value="0" data-on="Leaker" data-off="Winner" v-model="Game.Slapy.FirstLeak">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">Alex</td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Alex.Kills">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Alex.Leaks">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Alex.Infuse">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Alex.Income">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Alex.Gas">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Alex.Value">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group" style="text-align: center; margin-top:6px;">
                                                <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger" value="1" v-bind:true-value="1" v-bind:false-value="0" data-on="Leaker" data-off="Winner" v-model="Game.Alex.FirstLeak">
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">Inev</td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Inev.Kills">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Inev.Leaks">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Inev.Infuse">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Inev.Income">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Inev.Gas">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group">
                                                <input type="number" class="form-control" v-model="Game.Inev.Value">
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group" style="text-align: center; margin-top:6px;">
                                                <input type="checkbox" checked data-toggle="toggle" data-onstyle="success" data-offstyle="danger" value="1" v-bind:true-value="1" v-bind:false-value="0" data-on="Leaker" data-off="Winner" v-model="Game.Inev.FirstLeak">
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                           
                            <button type="submit" class="btn btn-primary" @click="addToAPI">Save</button>
                        </form>
                    </div>
                    <div class="modal-footer"></div>
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
                Slapy: {
                    Kills: 0,
                    Leaks: 0,
                    Infuse: 0,
                    Income: 0,
                    Gas: 0,
                    Value: 0,
                    FirstLeak: 0
                },
                Alex: {
                    Kills: 0,
                    Leaks: 0,
                    Infuse: 0,
                    Income: 0,
                    Gas: 0,
                    Value: 0,
                    FirstLeak: 0
                },
                Inev: {
                    Kills: 0,
                    Leaks: 0,
                    Infuse: 0,
                    Income: 0,
                    Gas: 0,
                    Value: 0,
                    FirstLeak: 1
                }
            }
        }
    },
    methods: {

        addToAPI() {

            let newGame = this.Game;

            console.log(newGame);

            axios.post('https://leaky-73c95.firebaseio.com/games', newGame).then((response) => {
                console.log(response);
                // window.location.reload();
            }).catch((error) => {
                console.log(error);
            })
        }
    }
}
</script>

<style>
    .form-group {
        margin: 0;
    }

    .toggle.btn {
        min-width: 80px;
    }
</style>
