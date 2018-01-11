const heroku_url_api = "https://mighty-plains-77473.herokuapp.com/api/rooms";
const heroku_url_api2 = "https://mighty-plains-77473.herokuapp.com/api/buildings";

/* Si j'ai envie, je peux aussi utiliser "/setLight/" + un entier ou "/setNoise/" + un entier
*/

const vm = new Vue({
    el: '#approom',
    data: {
        rooms: [],
    },
    mounted() {
        axios.get(heroku_url_api)
            .then(response => {this.rooms = response.data});
    },
    methods: {
        switchLight(room) {
            let post_url = heroku_url_api + "/" + room.id + "/switchLightl";
            axios.post(post_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
            },
        switchRinger(room) {
            let post_url = heroku_url_api + "/" + room.id + "/switchRingerl";
            axios.post(post_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
        },

        /* AKA Le bouton qui n'a jamais marché

        switchOFF: function (form) {
            var x = document.getElementById("mySelect")
            this.selectedRoom = x.options[form.selectedIndex].value;
            let post_url = heroku_url_api + "/" + selectedRoom.id + "/switchLightl";
            axios.post(post_url, {roomId: selectedRoom.id})
                .then(response => {this.rooms = response.data});
            },
*/
    }
});

const vm2 = new Vue({
    e2: '#appbuilding',
    data: {
        buildings: [],
    },
    mounted() {
        axios.get(heroku_url_api2)
            .then(response => {this.buildings = response.data});
    },
    methods: {
    },
});