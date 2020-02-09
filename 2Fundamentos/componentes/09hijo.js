Vue.component('hijo',{
    template : `
        <div class="py-5 bg-success">
            <h4>Componente hijo conetiene el numero {{numero}}</h4>
        </div>
    `,
    props:['numero']
})