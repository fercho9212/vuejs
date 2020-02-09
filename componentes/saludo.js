Vue.component('saludo',{
    template: 
    `<div>
        <h1>{{saludo}}</h1>
        <h1>Texto de prueba</h1>
    </div>`,
    data(){
        return {
            saludo:'Este es el Saludo desde el componente'
        }
    },
});