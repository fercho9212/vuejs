Vue.component('contador',{
    template: `
    <div>
        <button @click="contador+=2">Ingrementar : {{contador}}</button>
    </div>
    `,
    data(){
        return {
            contador:0
        }
    }
});