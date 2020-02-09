const app = new Vue({
    el:'#app',
    data:{
        titulo:'Bienvenido App de Palindrome',
        style:'text-aling:center',
        hola:'ferney',
        palabra:'',
        palindrome:'',
        resultado: ''
    },
    methods:{
        verificarPalindrome(){
            if(this.palabra.length>=3){
                const arreglo=this.palabra.split("").reverse().join('');
                return this.palindrome= (arreglo === this.palabra) ? true : false;
            }
        }
    },
    computed:{
        resultadoString(){
            return this.resultado= (this.palindrome) ? 'Es Palindrome' : 'No es Palindrome'
        }
    }
});