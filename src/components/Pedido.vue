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
                  <option v-for="trem in trens" :key="trem.id" :value="trem.id">
                    {{ trem.nome }}
                  </option>
                </select>
              </td>
              <td>
                <select name="carro" :disabled="trem == ''" v-model="carro" id="carro">
                  <option disabled value="">Selecione</option>
                  <option v-for="carro in carros" :key="carro.id" :value="carro.id">
                    {{ carro.nome }}
                  </option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  name="descricao_falha"
                  id="descricao_falha"
                  v-model="descricao_falha"
                />
              </td>
              <td>
                <select name="pt" id="pt" v-model="pt">
                  <option disabled value="">Selecione</option>
                  <option value="true">P</option>
                  <option value="false">T</option>
                </select>
              </td>
              <td>
                <select name="in" id="in" v-model="in">
                  <option disabled value="">Selecione</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
              </td>
              <td><input type="text" name="local" id="local" v-model="local" /></td>
              <td>
                <select name="status" id="status" v-model="status">
                  <option disabled value="">Selecione</option>
                  <option
                    v-for="status in status_list"
                    :key="status.idstatus"
                    :value="status.idstatus"
                  >
                    {{ status.descricao }}
                  </option>
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
      <button id="btn-pedido" v-on:click="createPedido">Atualizar</button>
    </div>
  </main>
</template>
<script>
export default {
  name: "Pedido",
  data() {
    return {
      trens: null,
      carros: null,
      status_list: null,
      trem: null,
      carro: null,
      descricao_falha: null,
      pt: null,
      in: null,
      local: null,
      status,
    };
  },
  methods: {
    async createPedido(e) {
      const data = {
        trem: this.trem,
        carro: this.carro,
        descricao_falha: this.descricao_falha,
        pt: this.pt,
        in: this.in,
        local: this.local,
        status: this.status,
      };

      let validform = true;
      for (const key in data) {
        if (data[key] == null || data[key] == "") {
          validform = false;
          alert("Preencha todos os campos");
          break;
        }
      }

      if (validform) {
        const dataJson = JSON.stringify(data);

        const req = await fetch(`${process.env.VUE_APP_API_URL}pedidos`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: dataJson,
        });
        const res = await req.json();
        /*Renove todas as linhas da tabelaa*/ 
        let tbody = document
          .getElementById("tabelaC")
          .getElementsByTagName("tbody")[0]
          .querySelectorAll("tr");

        Array.prototype.forEach.call(tbody, function (node) {
          node.parentNode.removeChild(node);
        });
        /*Fim da funcao*/
        this.getPedidos();
      }
    },
    async getTrens() {
      const req = await fetch(`${process.env.VUE_APP_API_URL}trens`);
      const data = await req.json();
      this.trens = data;
    },
    async getStatus() {
      const req = await fetch(`${process.env.VUE_APP_API_URL}status`);
      const data = await req.json();
      this.status_list = data;
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
    },
    MontarListaCarros() {
      if (this.trens !== null) {
        let temp = this.trens.filter((c) => c.id == this.trem);
        this.carros = temp[0]["carros"];
      }
    },
  },
  mounted() {
    this.getTrens();
    this.getPedidos();
    this.getStatus();
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
