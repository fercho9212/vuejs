const app = new Vue({   
    el:'#app',
    data:{
        titulo:'Este es un saludo',
        frutas: [
            {nombre:'Pera',cantidad:10},
            {nombre:'Manzana',cantidad:1},
            {nombre:'Plantano',cantidad:15},
        ],
        nuevaFruta: '',
        total:0
    },
    methods:{
        guardar () {
            this.frutas.push({nombre:this.nuevaFruta,cantidad:10});
            this.nuevaFruta='';
        }
    },
    computed:{
        sumarFrutas(){
            this.total=0;
            for(fruta of this.frutas){
                this.total+=fruta.cantidad;
            }
            return this.total;
        }
    }
})