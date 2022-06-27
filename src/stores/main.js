import { defineStore } from "pinia"

export const useMainStore = defineStore("main", {
    state: () => ({

        idpedido: -1

    }),
    actions:{
        setpedido (idpedido){
            this.idpedido=idpedido;
        }
    },
    getters:{
        getValue:(state) => state.idpedido
    }
})