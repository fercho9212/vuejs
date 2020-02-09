const app = new Vue({
    el:'#app',
    data:{
        mensaje:'Hola soy vue',
        contador:0,
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('')
        },
        color(){
            return {
                'bg-danger' : this.contador<=10,
                'bg-warning' : this.contador>10 && this.contador<=20,
                'bg-primary' : this.contador<20 && this.contador<=50,
                'bg-success' : this.contador>50
            }
        }
    }
});