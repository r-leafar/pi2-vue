<template>
<router-link to="/"><Navbar /></router-link>
  <Menu />
  <main>
    <div id="apontamento-secao-1">
      <div
        class="rTable"
        style="width: 100%; margin-top: 15px; padding-left: 0px; padding-top: 0%"
      >
        <div class="rTableRow">
          <div class="rTableHead">Pedido</div>
          <div class="rTableHead">Trem</div>
          <div class="rTableHead">Carro</div>
          <div class="rTableHead">Descricao Falha</div>
          <div class="rTableHead">Data</div>
          <div class="rTableHead">Local</div>
          <div class="rTableHead">P/T</div>
          <div class="rTableHead">IN</div>
          <div class="rTableHead">Status</div>
        </div>
        <div class="rTableRow">
          <div class="rTableCell">
            <input
              name="idpedido"
              id="idpedido"
              type="text"
              v-model="idpedido"
              disabled
            />
          </div>
          <div class="rTableCell">
            <input name="trem" id="trem" type="text" v-model="trem" disabled />
          </div>
          <div class="rTableCell">
            <input name="carro" id="carro" type="text" v-model="carro" disabled />
          </div>
          <div class="rTableCell">
            <input
              name="descricao_falha"
              id="descricao_falha"
              type="text"
              v-model="descricao_falha"
              disabled
            />
          </div>
          <div class="rTableCell">
            <input
              name="data_pedido"
              id="data_pedido"
              type="text"
              v-model="data_pedido"
              disabled
            />
          </div>
          <div class="rTableCell">
            <input name="local" id="local" type="text" v-model="local" disabled />
          </div>
          <div class="rTableCell">
            <input name="pt" id="pt" type="text" v-model="pt" disabled />
          </div>
          <div class="rTableCell">
            <input name="in" id="in" type="text" v-model="in" disabled />
          </div>
          <div class="rTableCell">
            <input name="status" id="status" type="text" v-model="status" disabled />
          </div>
        </div>
      </div>
    </div>
    <div id="apontamento-secao-2">
      <div class="rTable">
        <div class="rTableRow">
          <div class="rTableHead">Equipamento</div>
          <div class="rTableHead">Reparo</div>
          <div class="rTableHead">Data</div>
        </div>
        <div class="rTableRow">
          <div class="rTableCell">
            <select style="width:100%;" name="equipamento" id="equipamento" v-model="equipamento">
              <option disabled value="">Selecione</option>
              <option v-for="equip in equipamentos" :key="equip.id" :value="equip.nome">
                {{ equip.nome }}
              </option>
            </select>
          </div>
          <div class="rTableCell"><input style="width:100%;" type="text" name="reparo" id="reparo" v-model="reparo"></div>
          <div class="rTableCell">Lorem ipsum</div>
        </div>
      </div>
      <button id="btn-apontamento-atualizar" v-on:click="">Atualizar</button>
    </div>
    <div id="apontamento-secao-3">
      <div class="rTable">
        <div class="rTableRow">
          <div class="rTableHead">Observação</div>
        </div>
        <div class="rTableRow">
          <div class="rTableCell">Lorem ipsum</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useMainStore } from "../stores/main";
import Menu from "../components/Menu.vue";
import Navbar from '../components/Navbar.vue';
const dayjs = require("dayjs");

export default {
  name: "Apontamento",
  components: { Menu,Navbar },
  setup() {
    const store = useMainStore();

    return {
      // you can return the whole store instance to use it in the template
      store,
    };
  },
  data() {
    return {
      idpedido: null,
      trem: null,
      carro: null,
      descricao_falha: null,
      data_pedido: null,
      local: null,
      pt: null,
      in: null,
      status: null,
      equipamentos: null,
      reparo:null
    };
  },
  methods: {
    async getEquipamentos() {
      const req = await fetch(`${process.env.VUE_APP_API_URL}equipamentos`);
      const data = await req.json();
      this.equipamentos = data;
    },
    async getPedidos() {
      this.idpedido = this.store.getValue;
      if (this.idpedido > 0) {
        const req = await fetch(`${process.env.VUE_APP_API_URL}pedidos/${this.idpedido}`);
        const data = await req.json();
        this.idpedido = data["id"];
        this.trem = data["trem"];
        this.carro = data["carro"];
        this.descricao_falha = data["descricao_falha"];
        this.data_pedido = data["data"];
        this.local = data["local"];
        this.pt = data["pt"] == "true" ? "SIM" : "NAO";
        this.in = data["in"] == "true" ? "SIM" : "NAO";
        this.status = data["status"];
        console.log(data);
      }
    },
  },
  mounted() {
    this.getPedidos();
    this.getEquipamentos();
  },
};
</script>

<style scoped>
#btn-apontamento-atualizar {
  font-size: 25px;
  text-shadow: 1px 1px 2px black;
  font-family: sans;
  border: 0px;
  width: 150px;
  border-radius: 100%;
  height: 90px;
  color: #fff;
  background-color: #4784fb;
  margin: 4% 6%;
}
main {
  height: 100vh;
  background-color: rgb(247, 243, 10);
}
#apontamento-secao-2 > div.rTable {
  width: 75%;
  padding-top: 5%;
  float: left;
}
#apontamento-secao-3 > div.rTable {
  width: 75%;
  padding-top: 5%;
  float: left;
}
/*Formatação da tabela*/
.rTable {
  display: table;
  width: 100%;
}
.rTableRow {
  display: table-row;
}
.rTableHeading {
  display: table-header-group;
  background-color: #c4c4c4;
}
.rTableHead {
  background-color: #c4c4c4;
  font-weight: bold;
  text-transform: uppercase;
}
.rTableCell,
.rTableHead {
  display: table-cell;
  padding: 3px 10px;
}
.rTableCell {
  background-color: white;
}
.rTableHeading {
  display: table-header-group;
  background-color: #c4c4c4;
  font-weight: bold;
}
.rTableFoot {
  display: table-footer-group;
  font-weight: bold;
  background-color: #ddd;
}
.rTableBody {
  display: table-row-group;
}
</style>
