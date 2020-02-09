Vue.component('hijo',{
    template : `
        <div class="py-5 bg-success">
            <h4>Componente hijo conetiene el numero {{numero}}</h4>
            <h4>Nombre : {{nombre}}</h4>
            <button @click="numero+=1">+</button>
        </div>
    `,
    props:['numero'],
    data(){
        return {
            nombre:'Ferney Jerez'
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre)
    }
})