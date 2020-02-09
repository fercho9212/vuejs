const app = new Vue({
    el: '#app',
    data: {
        saludo: 'soy ciclo de vida vue'
    },
    beforeCreate(){
        console.log("BeforeCreate");
    },
    created(){
        //Al crear Los métodos, observadores y eventos, 
        //perO aún no accede al DOM
        console.log("Create");
    },
    beforeMount(){
        // Se ejecuta antes de insertat el DOM
        console.log("BeforeMount");
    },
    mounted(){
        //Se ejecuta al insertar el DOM
        console.log("Mounted");
    },
    beforeUpdate(){
        //Al detectar un cambio
        console.log("beforeUpdate");
    },
    Updated(){
        //Al detectar un cambio
        console.log("Update");
    },
    beforeDestroy(){
        //Antes de destruir la instancia
        console.log("BeforeDestroy");
    },
    destroyed(){
        //Se destruye toda la instancia
        console.log("Destroyed");
    },
    methods:{
        destruir(){
            this.$destroy();
        }
    }
});