<template>
  <div class="header">
    Sistema de Ordens de Serviço
    <button    :class="[store.getValue ? 'btn-green' : 'btn-red']"    @click.prevent="toggleCss()"  >
      {{ store.getValue ? "ON" : "OFF" }}
    </button>
  </div>
</template>
<script>
import { useToggleStore } from "../stores/toggle";
export default {
  name: "Navbar",
  setup() {
    const store = useToggleStore();
    return {
      // you can return the whole store instance to use it in the template
      store,
    };
  },
  emits: ["toggleCss"],
  data() {
    return {
      css_one: "blue",
      css_two: "white",
    };
  },
  methods: {
    toggleCss() {
      this.store.toggleStore();
      this.changeCss(this.store.getValue);
      this.$emit('toggleCss');
    },
    changeCss(ativo) {
      if (ativo) {
        this.css_one = "white";
        this.css_two = "black";
      } else {
        this.css_one = "blue";
        this.css_two = "white";
      }
    },
  },
  mounted(){
    this.changeCss(this.store.getValue)
  }
};
</script>
<style scoped>
.header {
  background-color: v-bind(css_one);
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: v-bind(css_two);
  font-family: sans;
  -webkit-text-stroke: 0.2mm black;
  height: 50px;
}
.btn-green {
  background-color: #7fff00;
}
.btn-red {
  background-color: #dc143c;
}
button {
  float: right;
  height: 100%;
  width: 3%;
}
</style>
