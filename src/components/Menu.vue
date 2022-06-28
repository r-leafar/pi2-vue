<template>
  <nav class="container">
    <div
      id="conteudo1"
      v-on:click="
        $emit('LimparFormPedido');
        this.$router.push('/pedido');
      "
    >
      <div class="pedidos">Pedidos</div>
    </div>
    <div id="conteudo2" v-on:click="this.$router.push('/historico')">
      <div class="historicos">Históricos</div>
    </div>
    <div id="conteudo3" v-on:click="this.$router.push('/apontamento')">
      <div class="apontamentos">Apontamentos</div>
    </div>
  </nav>
</template>
<script>
import { useToggleStore } from "../stores/toggle";
export default {
  props:{toggleCss:Boolean},
  data(){
    return {
      css_one:"#52CFF6",
      css_two:"#17ce11",
      css_tree:"#F00AC9",
      css_four:"#F7F30A;"
    }
  },
  setup() {
    const store = useToggleStore();
    return {
      // you can return the whole store instance to use it in the template
      store,
    };
  },
  name: "Menu",
  emits:["limparFormPedido"],
  watch:{
    toggleCss: function(newVal, oldVal) { // watch it
         // console.log('Prop changed: ', newVal, ' | was: ', oldVal)
         this.changeCss(oldVal)
        }
  },
  methods:{
     changeCss(ativo) {
      if (ativo) {
       this.css_one ="#52CFF6"
            this.css_two ="#17ce11"
            this.css_tree="#F00AC9"
            this.css_four="#F7F30A"

      } else {
              this.css_one ="white"
            this.css_two ="black"
            this.css_tree="black"
            this.css_four="black"

      }
     }
  },
  mounted(){
     this.changeCss(!this.store.getValue);
  }

};
</script>
<style scoped>
.container {
  display: grid;
  text-shadow: 1px 1px 2px black;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: v-bind(css_one);
  grid-row: 2fr 1fr 1fr;
  grid-template-areas:
    "conteudo1 conteudo2 conteudo3"
    "conteudo4 conteudo4 conteudo4";
  position: relative;
}
.pedidos {
  width: 200px;
  height: 150px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background-color: v-bind(css_two);
  border-radius: 50%;
  margin: 0 auto 0 auto;
  margin-block: 20px;

  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
}
.historicos {
  width: 200px;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  height: 150px;
  background-color: v-bind(css_tree);
  border-radius: 50%;
  margin: 0 auto 0 auto;
  margin-block: 20px;
  display: -webkit-flex;

  display: -ms-flexbox;
  display: flex;

  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  justify-content: center;
}
.apontamentos {
  width: 200px;
  height: 150px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background-color: v-bind(css_four);
  border-radius: 50%;
  margin: 0 auto 0 auto;
  margin-block: 20px;
  display: -webkit-flex;

  display: -ms-flexbox;
  display: flex;

  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  justify-content: center;
}
</style>
