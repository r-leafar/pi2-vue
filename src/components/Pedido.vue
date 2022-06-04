<template>
  <main>
    <div id="conteudo4">
      <div>
        <table>
          <thead>
            <tr>
              <th>PEDIDO</th>
              <th>TREM</th>
              <th>CARRO</th>
              <th>DESCRICAO DA FALHA</th>
              <th>P/T</th>
              <th>IN</th>
              <th>LOCAL</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>###</td>
              <td>
                <select
                  v-on:change="MontarListaCarros"
                  name="trem"
                  v-model="trem"
                  id="trem"
                >
                  <option disabled value="">Selecione</option>
                  <option v-for="trem in trens" :key="trem.id" :value="trem.nome">
                    {{ trem.nome }}
                  </option>
                </select>
              </td>
              <td>
                <select name="carro" :disabled="trem == ''" v-model="carro" id="carro">
                  <option disabled value="">Selecione</option>
                  <option v-for="carro in carros" :key="carro.id" :value="carro.nome">
                    {{ carro.nome }}
                  </option>
                </select>
              </td>
              <td><input type="text" name="descricao" id="descricao" /></td>
              <td>
                <select name="pt" id="pt">
                  <option disabled value="">Selecione</option>
                  <option value="true">P</option>
                  <option value="false">T</option>
                </select>
              </td>
              <td>
                <select name="in" id="in">
                  <option disabled value="">Selecione</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </td>
              <td><input type="text" name="local" id="local" /></td>
              <td>
                <select name="status" id="status">
                  <option disabled value="">Selecione</option>
                  <option value="true">Analise</option>
                  <option value="false">Finalizado</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table id="tabelaC">
          <thead>
            <tr>
              <th>CARRO</th>
              <th>EQUIPAMENTO</th>
              <th>DEFEITO</th>
              <th>REPARO</th>
              <th>DATA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ssgsgsgs</td>
              <td>sgsgsgsg</td>
              <td>sgsgsgsgs</td>
              <td>sgsgsgsgs</td>
              <td>sgsgsgsgsg</td>
            </tr>
          </tbody>
        </table>

        <div>
          <table id="tabelaD">
            <thead>
              <tr>
                <th>OBSERVAÇÃO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ADADAAD</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button id="btn-pedido">Atualizar</button>
      </div>
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
      carro: "",
      carros: null,
    };
  },
  methods: {
    async getTrens() {
      const req = await fetch(`${process.env.VUE_APP_API_URL}trens`);
      const data = await req.json();
      this.trens = data;
    },
    MontarListaCarros() {
      if (this.trens !== null) {
        let temp = this.trens.filter((c) => c.nome == this.trem);
        this.carros = temp[0]["carros"];
      }
    },
  },
  mounted() {
    this.getTrens();
  },
};
</script>

<style scoped>
td > select,
input {
  width: 100%;
}
#conteudo4 {
  height: 100vh;
  background-color: rgb(23, 206, 17);
  grid-area: conteudo4;
}
table {
  border-collapse: collapse;
  width: 100%;
}
thead {
  background-color: #c4c4c4;
}
tbody {
  background-color: #fff;
}
#tabelaC {
  width: 70%;
  margin-top: 5%;
}
#tabelaD {
  width: 50%;
  margin-top: 5%;
}
#btn-pedido {
  font-size: 25px;
  text-shadow: 1px 1px 2px black;
  font-family: sans;
  border: 0px;
  width: 15%;
  border-radius: 80%;
  height: 90px;
  color: #fff;
  background-color: #4784fb;
  position: relative;
  left: 50%;
  transform: translate(140%, -170%);
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-transform: uppercase;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  justify-content: center;
}
@media only screen and (max-width: 890px) {
#btn-pedido {
font-size: 20px;
}

}
</style>
