const heroku_url_api = "https://mighty-plains-77473.herokuapp.com/api/rooms";
// On retourne la liste de lumière on

const vm = new Vue({
    el: '#appswitchlight',
    data: {
        rooms: [],
        selectedRoom: 0,
        ON: 'ON',
        OFF: 'OFF',
        selectedONOFF: ' /!\\ none for now /!\\ ',
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
        /* mettre une fonction qui onChange du select fasse changer le ON/OFF à afficher du style
            malheureusement, je n'arrive pas à récupérer la sélection de ma liste déroulante...
            Je pensais qu'il y avait une manière simple mais Florian a fait avec plein de fonctions différentes 
            pour faire tourner un indice de sélection qu'il stocke par ailleurs donc ça ne se trouve pas facilement.

        coucou(ONouOFF){
            if (ONouOFF == 'ON') {
                this.selectedONOFF = 'ON'
            }
            else {
                this.selectdONOFF = 'OFF'
            }
        }*/ 
    }
});