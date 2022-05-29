<template>
  <main>
    <div id="secao-superior">
      <div style="width: 65px">
        <label for="pedido">Pedido</label>
        <input type="text" name="pedido" id="pedido" />
      </div>
      <div style="width: 100px">
        <label for="trem">Trem</label>
        <select name="trem" v-model="trem" id="trem">
          <option disabled value="">Selecione</option>
          <option v-for="trem in trens" :key="trem.id" :value="trem.nome">
            {{ trem.nome }}
          </option>
        </select>
      </div>
      <div style="width: 100px">
        <label for="carro">carro</label>
        <select name="carro" :disabled="trem == ''" id="carro">
          <option value="">Selecione</option>
        </select>
      </div>
      <div style="width: 230px">
        <label for="descricao">Descricao da Falha</label>
        <input type="text" name="descricao" id="descricao" />
      </div>
      <div style="width: 100px">
        <label for="pt">P/T</label>
        <input type="text" name="pt" id="pt" />
      </div>
      <div style="width: 100px">
        <label for="in">IN</label>
        <select name="in" id="in">
          <option value="">Selecione</option>
          <option value="true">Sim</option>
          <option value="false">Não</option>
        </select>
      </div>
      <div style="width: 100px">
        <label for="local">Local</label>
        <input type="text" name="local" id="local" />
      </div>
      <button id="btn-gerar-pedido">Gerar Pedido</button>
    </div>
  </main>
</template>
<script>
export default {
  name: "Pedido",
  data() {
    return {
      trem: "",
      trens: null,
    };
  },
  methods: {
    async getTrens() {
      const req = await fetch("http://localhost:3000/trens");
      const data = await req.json();
      this.trens = data;
    },
  },
  mounted() {
    this.getTrens();
  },
};
</script>

<style scoped>
main {
  height: 100vh;
  background-color: #64fb61;
}

table {
  border-collapse: collapse;
  width: 100%;
}

tr:first-child {
  background-color: #c4c4c4;
}

tr:nth-child(2) {
  background-color: #ffffff;
}
select:disabled {
  opacity: 1;
  background-color: white;
}

#btn-gerar-pedido {
  border: 0px;
  margin-left: 20%;
  width: 10%;
  border-radius: 50%;
  height: 100px;
  background-color: #4784fb;
  font-weight: bold;
}

#btn-gerar-pedido:hover {
  background-color: #b9891f;
}
#secao-superior {
  width: 75%;
  height: 50px;
  margin-top: 15px;
  display: flex;
}

label {
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  height: 50%;
  text-align: center;
  width: 100%;
  background-color: #c4c4c4;
}

input,
select {
  width: 100%;
  overflow: hidden;
}
</style>
