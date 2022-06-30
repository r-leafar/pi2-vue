<template>
  <router-link to="/"><Navbar @toggleCss="toggleCssNot" /></router-link>
  <Menu :toggleCss="storeToggle.getValue" />
  <main>
    <div id="apontamento-secao-1">
      <div class="rTable" style="width: 100%; padding-left: 0px; padding-top: 0%">
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
            <select
              style="width: 100%"
              name="equipamento"
              id="equipamento"
              v-model="equipamento"
            >
              <option disabled value="">Selecione</option>
              <option v-for="equip in equipamentos" :key="equip.id" :value="equip.nome">
                {{ equip.nome }}
              </option>
            </select>
          </div>
          <div class="rTableCell">
            <input
              style="width: 100%"
              type="text"
              name="reparo"
              id="reparo"
              v-model="reparo"
            />
          </div>
          <div class="rTableCell">
            <input type="text" name="datareparo" id="datareparo"  v-model="data_pedido" disabled />
          </div>
        </div>
      </div>
      <button id="btn-apontamento-atualizar" v-on:click="finalizarPedido">Atualizar</button>
    </div>
    <div id="apontamento-secao-3">
      <div class="rTable">
        <div class="rTableRow">
          <div class="rTableHead">Observação</div>
        </div>
        <div class="rTableRow">
          <div class="rTableCell">
            <span v-if="typeof observacao_edicao === 'object'">
              <input
                type="text"
                name="observacao"
                class="observacao"
                v-model="observacao_edicao.descricao"
              />
            </span>
            <span v-else>
              <input
                type="text"
                name="observacao"
                class="observacao"
                v-model="observacao_edicao"
              />
            </span>
            <button
              v-on:click.prevent="changeObservacao"
              style="width: 4%; font-weight: bold"
            >
              +
            </button>
          </div>
        </div>
        <div v-for="obs in observacao" class="rTableRow">
          <div class="rTableCell">
            {{ obs.descricao }}
            <button style="float: right" v-on:click.prevent="deleteObservacao(obs.id)">
              [ x ]
            </button>
            <button v-on:click.prevent="getObservacao(obs.id)" style="float: right">
              [ # ]
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { useMainStore } from "../stores/main";
import { useToggleStore } from "../stores/toggle";
import Menu from "../components/Menu.vue";
import Navbar from "../components/Navbar.vue";
const dayjs = require("dayjs");

export default {
  name: "Apontamento",
  components: { Menu, Navbar },
  setup() {
    const store = useMainStore();
    const storeToggle = useToggleStore();

    return {
      // you can return the whole store instance to use it in the template
      store,
      storeToggle,
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
      equipamento:null,
      reparo: null,
       usuario: {
        id: 1,
        nome: "SAULO",
      },
      observacao_edicao: "",
      observacao: null,
      css_one: "#F7F30A",
      css_two: "#4784fb",
      css_tree: "#c4c4c4",
      css_four: "black",
    };
  },
  methods: {
    async finalizarPedido() {
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
        reparo: this.reparo,
        equipamento:this.equipamento
      };

      let validform = true;
      for (const key in data) {
                //Ignora os itens que estiver no array
        if (["data"].includes(key))continue;

        if (data[key] == null || data[key] == "") {
          validform = false;
          alert(`Preencha todos os campos\n Verifique ${key}`);
          break;
        }
      }

      //valida se todos os campos estão preenchidos do formulário
      if (validform) {
         const dataJson = JSON.stringify(data);

          const req = await fetch(`${process.env.VUE_APP_API_URL}pedidos/${this.idpedido}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: dataJson,
          });
          this.getPedidos();
      }

    },
    async deleteObservacao(observacaoId) {
      const req = await fetch(
        `${process.env.VUE_APP_API_URL}observacao/${observacaoId}`,
        { method: "DELETE", headers: { "Content-Type": "application/json" } }
      );
      this.getPedidos();
    },
    async changeObservacao() {
      if (typeof this.observacao_edicao === "object") {
        const req = await fetch(
          `${process.env.VUE_APP_API_URL}observacao/${this.observacao_edicao.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.observacao_edicao),
          }
        );
      } else {
        const req = await fetch(`${process.env.VUE_APP_API_URL}observacao`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pedidoId: this.idpedido,
            descricao: this.observacao_edicao,
          }),
        });
      }

      this.getPedidos();
    },
    async getObservacao(observacaoId) {
      const req = await fetch(`${process.env.VUE_APP_API_URL}observacao/${observacaoId}`);
      const data = await req.json();
      this.observacao_edicao = data;
    },
    async getEquipamentos() {
      const req = await fetch(`${process.env.VUE_APP_API_URL}equipamentos`);
      const data = await req.json();
      this.equipamentos = data;
    },
    async getPedidos() {
      this.idpedido = this.store.getValue;
      if (this.idpedido > 0) {
        let query_string = `pedidos?_embed=observacao&id=${this.idpedido}`;

        const req = await fetch(`${process.env.VUE_APP_API_URL}${query_string}`);
        const data = (await req.json())[0];
        this.idpedido = data["id"];
        this.trem = data["trem"];
        this.carro = data["carro"];
        this.descricao_falha = data["descricao_falha"];
        this.data_pedido = data["data"];
        this.local = data["local"];
        this.pt = data["pt"] == "true" ? "SIM" : "NAO";
        this.in = data["in"] == "true" ? "SIM" : "NAO";
        this.status = data["status"];
        this.observacao = data["observacao"];
        this.observacao_edicao = "";
        this.equipamento =data["equipamento"]
        this.reparo=data["reparo"]
      }
    },
    changeCss(ativo) {
      if (ativo) {
        this.css_one = "#F7F30A";
        this.css_two = "#4784fb";
        this.css_tree = "#c4c4c4";
        this.css_four = "black";
      } else {
        this.css_one = "white";
        this.css_two = "black";
        this.css_tree = "black";
        this.css_four = "white";
      }
    },
    toggleCssNot() {
      this.changeCss(!this.storeToggle.getValue);
    },
    toggleCss() {
      this.changeCss(this.storeToggle.getValue);
    },
  },
  mounted() {
    this.getPedidos();
    this.getEquipamentos();
    this.changeCss(!this.storeToggle.getValue);
  },
};
</script>

<style scoped>
.observacao {
  width: 94%;
}
#btn-apontamento-atualizar {
  font-size: 25px;
  text-shadow: 1px 1px 2px black;
  font-family: sans;
  border: 0px;
  width: 150px;
  border-radius: 100%;
  height: 90px;
  color: #fff;
  background-color: v-bind(css_two);
  margin: 4% 6%;
}
main {
  height: 100vh;
  background-color: v-bind(css_one);
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
  background-color: v-bind(css_tree);
}
.rTableHead {
  background-color: v-bind(css_tree);
  font-weight: bold;
  color: v-bind(css_four);
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
  background-color: v-bind(css_tree);
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
