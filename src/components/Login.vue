<template>
  <div class="container">
    <router-link to="/"><Navbar @toggleCss="toggleCss" /></router-link>
    <div class="form">
      <form>
        <label>Login:</label>
        <input id="login" type="text" name="login" />
        <label>Senha:</label>
        <input id="senha" type="password" name="senha" />
        <button v-on:click="getLogin">Acessar</button>
      </form>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import { useToggleStore } from "../stores/toggle";
export default {
  name: "Login",
   setup() {
    const store = useToggleStore();
    return {
      // you can return the whole store instance to use it in the template
      store,
    };
  },
  components: { Navbar },
  data() {
    return {
      css_one: "#4784FB",
      css_two: "#52CFF6",
      css_tree: "#c4c4c4",
      active: true,
    };
  },
  methods: {
    getLogin(evt) {
      evt.preventDefault();
      this.$router.push("/pedido");
    },
    changeCss(ativo) {
      if (ativo) {
        this.css_one = "#4784FB";
        this.css_two = "#52CFF6";
        this.css_tree = "#c4c4c4";
      } else {
        this.css_one = "black";
        this.css_two = "white";
        this.css_tree = "white";
      }
    },
    toggleCss() {
      this.active = !this.active;
      this.changeCss(this.active);
    },
  },
  mounted(){
    this.changeCss(!this.store.getValue)
  }
};
</script>
<style scoped>
form > input {
  display: block;
  height: 40px;
  margin: 0 auto;
  width: 100%;
  font-size: 28px;
}

form > label {
  display: block;
  background-color: v-bind(css_tree);
  line-height: 45px;
  font-size: 36px;
  text-align: center;
}

form > button {
  border: 0px;
  background-color: v-bind(css_one);
  width: 50%;
  height: 40px;
  color: white;
  border-radius: 50%;
  margin: 0 auto;
  font-size: 20px;
  line-height: 31px;
  display: block;
}
.container {
  background-color: v-bind(css_two);
  height: calc(100vh);
}
.form {
  width: 25%;
  margin: 0 auto;
  margin-top: 10%;
}
</style>
