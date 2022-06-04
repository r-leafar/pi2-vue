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
              <th>PEDIDO</th>
              <th>TREM</th>
              <th>CARRO</th>
              <th>DESCRICAO</th>
              <th>P/T</th>
              <th>IN</th>
              <th>LOCAL</th>
              <th>DATA</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <button id="btn-pedido">Atualizar</button>
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
    async getPedidos() {
      const req = await fetch(`${process.env.VUE_APP_API_URL}pedidos`);
      const data = await req.json();
      let table = document.getElementById("tabelaC").getElementsByTagName("tbody")[0];

      data.forEach((element, index) => {
        let row = table.insertRow(0);
        for (const key in element) {
          let cell_tmp = row.insertCell(-1);
          cell_tmp.innerHTML = element[key];
        }
      });
      /*
      Object.keys(data).forEach(function(key) {
        console.log(key);

      });*/
      /*
      
  
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(0);
      let cell3 = row.insertCell(0);
      let cell4 = row.insertCell(0);
      let cell5 = row.insertCell(0);
      let cell6 = row.insertCell(0);
      let cell7 = row.insertCell(0);
      let cell8 = row.insertCell(0);
      let cell9 = row.insertCell(0);
      cell1.innerHTML = "NEW CELL1";
      cell2.innerHTML = "NEW CELL2";
      cell3.innerHTML = "NEW CELL3";
      cell4.innerHTML = "NEW CELL4";
      cell5.innerHTML = "NEW CELL5";
      cell6.innerHTML = "NEW CELL6";
      cell7.innerHTML = "NEW CELL7";
      cell8.innerHTML = "NEW CELL8";
      cell9.innerHTML = "NEW CELL9";*/
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
    this.getPedidos();
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
  margin-top: 5%;
  font-size: 25px;
  text-shadow: 1px 1px 2px black;
  font-family: sans;
  border: 0px;
  width: 15%;
  border-radius: 80%;
  height: 90px;
  color: #fff;
  background-color: #4784fb;
  position: absolute;
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
@media only screen and (max-width: 900px) {
  #btn-pedido {
    font-size: 18px;
    margin-top: 16%;
  }
}
</style>
