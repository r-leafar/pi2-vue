<template>
  <div class="header">
    Sistema de Ordens de Serviço
    <button :class="[isActive ? 'btn-green' : 'btn-red']" @click="toggle">
      {{ isActive ? "ON" : "OFF" }}
    </button>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggle(evt) {
      evt.preventDefault();
      this.isActive = !this.isActive;
    },
  },
};
</script>
<style scoped>
.header {
  background-color: blue;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  color: white;
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
