const heroku_url_api = "https://mighty-plains-77473.herokuapp.com/api/buildings";
/*
    /*On éteint tout le building
    @PostMapping(value = "/{buildingId}/switchAllofBOff")
    /*On allume tout le building
    @PostMapping(value = "/{buildingId}/switchAllofBOn") // Allumer le feu ! (en post avec une liste) 
    /*On éteint tout 
    @PostMapping(value = "/shutdownAll") // SAUVONS LA PLANETE
    /*Pour l'exercice, on allume toutes les lumières 
    @PostMapping(value = "/switchAllLOn")
    /*Pour l'exercice, on allume tous les ringers 
    @PostMapping(value = "/switchAllROn")
    /*Pour l'exercice, on éteint toutes les lumières 
    @PostMapping(value = "/switchAllLOff")
    /*Pour l'exercice, on éteint tous les ringers 
    @PostMapping(value = "/switchAllROff") // On va tout tout éteindre ! (en post avec une liste)

*/

const vm = new Vue({
    el: '#appbuilding',
    data: {
        buildings: [],
        counters : [],
    },
    mounted() {
        axios.get(heroku_url_api)
            .then(response => {this.buildings = response.data});
    },
    methods: {

        /* cette fonction ne marche pas car le get est répété indéfiniment, je ne comprends pas pourquoi
        countRooms(building) {
            let get_url = heroku_url_api + "/" + building + "/count";
            axios.get(get_url, {buildingId: building})
                .then(response => {this.counters.push(response.data)});
                return this.counters[building-1] ;
            },
        */

        /* du coup, c'est un peu de la triche, on n'utilise pas le get écrit exprès pour mais ça marche :) */
        countRooms(building) {
            return (this.buildings[building-1].rooms.length) ;
            },
        switchLight1(building) {
            let post_url = heroku_url_api + "/" + building.buildingId + "/switchLofBOff";
            axios.post(post_url, {buildingId: building.buildingId})
                .then(response => {this.buildings = response.data});
            },
        switchLight2(building) {
            let post_url = heroku_url_api + "/" + building.buildingId + "/switchLofBOn";
            axios.post(post_url, {buildingId: building.buildingId})
                .then(response => {this.buildings = response.data});
            },
        switchRinger1(building) {
            let post_url = heroku_url_api + "/" + building.buildingId + "/switchRofBOff";
            axios.post(post_url, {buildingId: building.buildingId})
                .then(response => {this.buildings = response.data});
        },
        switchRinger2(building) {
            let post_url = heroku_url_api + "/" + building.buildingId + "/switchRofBOn";
            axios.post(post_url, {buildingId: building.buildingId})
                .then(response => {this.buildings = response.data});
        },
    }
});
