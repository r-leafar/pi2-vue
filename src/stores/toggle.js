import { defineStore } from "pinia"

export const useToggleStore = defineStore("toggle", {
    state: () => ({

        isActive: false

    }),
    actions:{
        toggleStore (evt){
            this.isActive= !this.isActive;
        }
    },
    getters:{
        getValue:(state) => state.isActive
    }
})