Vue.component('padre',{
    template:`
        <div class="p-5 bg-dark text-white">
            <h2>Compoenete Padre {{numeroPadre}}</h2>
            <h2>NOmbre del padre {{nombre}}</h2>
            <button class="btn btn-danger" @click="numeroPadre+=1">Incrementar</button>
            <hijo :numero="numeroPadre" @nombreHijo="nombre=$event"></hijo> 
        </div>
    `,
    data(){
        return {
            numeroPadre:333,
            nombre:''
        }
    }
})