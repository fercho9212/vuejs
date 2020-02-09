Vue.component('saludo',{
    template:
    `
            <div>
                <h1>Saludo de forma statica 
                <strong> Es {{saludo}}</strong></h1>
                <br>dldldldld</br>
            </div>
    `,
    data(){
        return {
            saludo:' :D Componssente:'
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
     saludo:'HOla desde salido deste el main'
    }
});