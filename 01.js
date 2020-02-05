const app = new Vue({   
    el:'#app',
    data:{
        titulo:'Este es un saludo',
        frutas: [
            {nombre:'Pera',cantidad:10},
            {nombre:'Manzana',cantidad:1},
            {nombre:'Plantano',cantidad:15},
        ],
        nuevaFruta: ''
    },
    methods:{
        guargar () {
            this.frutas.push({nombre:this.nuevaFruta,cantidad:10});
        }
    }
})