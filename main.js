const newVue = new Vue({
    el: "#app",
    data: {
        emails:[],
    },
    methods: {
        generaIndirizzi(){
            for (let i = 0; i < 10; i++){
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((axiosResponse) => {
                this.emails.push(axiosResponse.data.response);
            });
            this.emails = [];
            }
        }
    }
});