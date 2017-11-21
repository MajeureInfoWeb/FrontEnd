const heroku_url_api = "https://mighty-plains-77473.herokuapp.com/api/rooms";
// On retourne la liste de lumière on

const vm = new Vue({
    el: '#app2',
    data: {
        rooms: [],
        selectedRoom: 0
    },
    mounted() {
        axios.get(heroku_url_api + "/On")
            .then(response => {this.rooms = response.data});
    },
    methods: {
        switchLight(room) {
            this.selectedRoom = room;
            let post_url = heroku_url_api + "/" + room.id + "/switchLightl";
            axios.post(post_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
            },
        switchRinger(room) {
            this.selectedRoom = room;
            let post_url = heroku_url_api + "/" + room.id + "/switchRingerl";
            axios.post(post_url, {roomId: room.id})
                .then(response => {this.rooms = response.data});
        },

        switchOFF: function (form) {
            var x = document.getElementById("mySelect")
            this.selectedRoom = x.options[form.selectedIndex].value;
            let post_url = heroku_url_api + "/" + selectedRoom.id + "/switchLightl";
            axios.post(post_url, {roomId: selectedRoom.id})
                .then(response => {this.rooms = response.data});
            },
    }
});
