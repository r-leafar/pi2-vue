<template>
  <router-link to="/"><Navbar @toggleCss="toggleCssNot"/></router-link>
  <Menu @limpar-form-pedido="clearForm" :toggleCss="storeToggle.getValue" />
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
              <th>DATA CRIAÇÃO</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input name="idpedido" id="idpedido" type="text" v-model="id" disabled />
              </td>
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
              <td><input type="text" name="data" id="data" v-model="data" disabled /></td>
              <td>
                <select name="status" id="status" v-model="status">
                  <option disabled value="">Selecione</option>
                  <option
                    v-for="status in status_list"
                    :key="status.idstatus"
                    :value="status.descricao"
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
          <tbody>
            <tr v-for="p in lista_pedidos">
              <td>{{ p.id }}</td>
              <td>{{ p.trem }}</td>
              <td>{{ p.carro }}</td>
              <td>{{ p.descricao_falha }}</td>
              <td>{{ p.pt }}</td>
              <td>{{ p.in }}</td>
              <td>{{ p.local }}</td>
              <td>{{ p.data }}</td>
              <td style="text-align: center">
                <button style="float: left" v-on:click="carregarPedido(p.id)">
                  Alterar
                </button>
                {{ p.status }}
                <button style="float: right" v-on:click="excluirPedido(p.id)">
                  [ X ]
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button id="btn-pedido" v-on:click="createPedido">Atualizar</button>
    </div>
  </main>
</template>
<script>
import Menu from "../components/Menu.vue";
import Navbar from "../components/Navbar.vue";
import { useToggleStore } from "../stores/toggle";
const dayjs = require("dayjs");
export default {
  name: "Pedido",
  components: { Menu, Navbar },
  setup() {
    const storeToggle = useToggleStore();
    return {
      // you can return the whole store instance to use it in the template
      storeToggle,
    };
  },
  data() {
    return {
      trens: null,
      carros: null,
      status_list: null,
      data: null,
      trem: null,
      carro: null,
      descricao_falha: null,
      pt: null,
      in: null,
      local: null,
      status: null,
      lista_pedidos: null,
      id: null,
      usuario: {
        id: 1,
        nome: "SAULO",
      },
      reparo: null,
      observacao: [],
      css_one:"#c4c4c4",
      css_two:" #17CE11",
      css_tree:"black",
      css_four:"#4784fb"
    };
  },
  methods: {
    foo(){
      alert("oie")
    },
    async excluirPedido(idpedido) {
      let escolha = confirm("Você tem certeza que deseja excluir esse pedido?");
      if (escolha === true) {
        const req = await fetch(`${process.env.VUE_APP_API_URL}pedidos/${idpedido}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        });
        this.getPedidos();
        this.clearForm();
      }
    },
    async carregarPedido(idpedido) {
      const req = await fetch(`${process.env.VUE_APP_API_URL}pedidos/${idpedido}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const res = await req.json();
      this.id = res.id;
      this.trem = res.trem;
      this.MontarListaCarros();
      this.carro = res.carro;
      this.descricao_falha = res.descricao_falha;
      this.pt = res.pt;
      this.in = res.in;
      this.local = res.local;
      this.data = res.data;
      this.status = res.status;
    },
    clearForm() {
      this.id = null;
      this.trens = null;
      this.carros = null;
      this.status_list = null;
      this.trem = null;
      this.carro = null;
      this.descricao_falha = null;
      this.pt = null;
      this.in = null;
      this.data = null;
      this.local = null;
      this.status = null;
      this.getTrens();
      this.MontarListaCarros();
      this.getStatus();
    },
    async changePedido(e) {
      const data = {
        trem: this.trem,
        carro: this.carro,
        descricao_falha: this.descricao_falha,
        pt: this.pt,
        in: this.in,
        local: this.local,
        data: this.data,
        status: this.status,
        usuario: this.usuario,
        reparo: null,
        observacao: [],
      };

      const dataJson = JSON.stringify(data);

      const req = await fetch(`${process.env.VUE_APP_API_URL}pedidos/${this.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });
      const res = await req.json();

      this.getPedidos();
      this.clearForm();
    },
    async createPedido(e) {
      const data = {
        trem: this.trem,
        carro: this.carro,
        descricao_falha: this.descricao_falha,
        pt: this.pt,
        in: this.in,
        local: this.local,
        data: dayjs().format("YYYY-MM-DD"),
        status: this.status,
        usuario: this.usuario,
        reparo: "",
        observacao: [""],
      };

      let validform = true;
      for (const key in data) {
        //Ignora os itens que estiver no array
        if (["usuario", "reparo", "observacao"].includes(key)) {
          continue;
        }

        if (data[key] == null || data[key] == "") {
          validform = false;
          alert("Preencha todos os campos");
          break;
        }
      }
      //valida se todos os campos estão preenchidos do formulário
      if (validform) {
        //verifixa se o id for diferente de null então é para alterar ao invés de criar um novo
        if (this.id !== null) {
          //alterar pedido
          this.changePedido();
        } else {
          //criar pedido novo
          const dataJson = JSON.stringify(data);

          const req = await fetch(`${process.env.VUE_APP_API_URL}pedidos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: dataJson,
          });
          const res = await req.json();

          this.getPedidos();
          this.clearForm();
        }
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
      this.lista_pedidos = data;
    },
    MontarListaCarros() {
      if (this.trens !== null) {
        let temp = this.trens.filter((c) => c.nome == this.trem);
        this.carros = temp[0]["carros"];
        this.carro = null;
      }
    },
    changeCss(ativo) {
      if (ativo) {
        this.css_one ="#c4c4c4"
        this.css_two =" #17CE11"
        this.css_tree =" black"
        this.css_four ="#4784fb"
      } else {
        this.css_one ="black"
        this.css_two="white"
        this.css_tree =" white"
        this.css_four ="black"
      }
    },
    toggleCssNot() {
      this.changeCss(!this.storeToggle.getValue);
     }
,
     toggleCss() {
      this.changeCss(this.storeToggle.getValue);
     }
  },
  mounted() {
    this.getTrens();
    this.getPedidos();
    this.getStatus();
    this.changeCss(!this.storeToggle.getValue);
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
  background-color: v-bind(css_two);
  grid-area: conteudo4;
}
table {
  border-collapse: collapse;
  width: 100%;
}
thead {
  background-color:v-bind(css_one);
  color:v-bind(css_tree);
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
  background-color: v-bind(css_four);
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
