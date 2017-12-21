<template>
    <div>
        <navBar></navBar>
        <div class="container">
            <br>
            <div class="col-lg-3" v-for="(game, index)  in games">
                <div class="panel panel-primary">
                    <div class="panel-heading">Game
                        <span class="badge pull-right">{{ index }}</span>
                    </div>
                    <div class="panel-body">
                         <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style="text-align: center;">Stats</th>
                                        <th style="text-align: center;">Slapy</th>
                                        <th style="text-align: center;">Alex</th>
                                        <th style="text-align: center;">Inev</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">Kills</td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Slapy.Kills}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Alex.Kills}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Inev.Kills}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">Leaks</td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Slapy.Leaks}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Alex.Leaks}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Inev.Leaks}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">Infuse</td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Slapy.Infuse}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Alex.Infuse}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Inev.Infuse}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">Income</td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Slapy.Income}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Alex.Income}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Inev.Income}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">Gas</td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Slapy.Gas}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Alex.Gas}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Inev.Gas}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">Value</td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Slapy.Value}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Alex.Value}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Inev.Value}}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="text-align: center; padding-top: 14px;">FirstLeak</td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Slapy.FirstLeak}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Alex.FirstLeak}}
                                        </td>
                                        <td style="text-align: center; padding-top: 14px;">
                                            {{game.Inev.FirstLeak}}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    <div class="panel-footer">
                        <h4>
                            <button type="button" class="btn btn-danger" data-toggle="modal" data-target=".bd-example-modal-sm" @click="DELETE(game, game._id)">Delete</button>
                        </h4>
                    </div>
                </div>
            </div>

            <div class="modal fade bd-example-modal-sm" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="exampleModalLabel">Are you sure?</h1>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Are you sure you want to delete this game?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-danger" @click="deleteData(test_room, test_id)">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AddGame from './addGame.vue'
    import axios from 'axios'
    import firebase from 'firebase'
    import navBar from './navBar.vue'

    export default {
        data() {
            return {
                photo: '',
                userId: '',
                name: '',
                email: '',
                user: {},
                roomDetails: [],
                test_room: {},
                test_id: '',
                games: []
            }
        },
        created() {
            var vm = this
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    vm.user = user;
                    vm.name = vm.user.displayName;
                    vm.email = vm.user.email;
                    vm.photo = vm.user.photoURL;
                    vm.userId = vm.user.uid;
                }
            });

            axios.get('https://leaky-73c95.firebaseio.com/games' + vm.userId + '.json').then((response) => {
                this.games = response.data;
                console.log(response);
            }).catch((error) => {
                console.log(error);
            })
        },
        methods: {
            logOut() {
                firebase.auth().signOut();
            },
            DELETE(roomDetails1, id1) {
                $("#my-modal").modal('show');
                this.test_room = roomDetails1;
                this.test_id = id1;
            },
            deleteData(roomDetails, id) {
                axios.delete('https://leaky-73c95.firebaseio.com/games/' + id).then(
                    response => this.roomDetails.splice(index, 1)
                );
                window.location.reload();
            }
        },
        components: {
            AddGame,
            navBar
        },
    };
</script>