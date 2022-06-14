<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header"> <AlertTriangleIcon size="4x" /> </slot>
        </div>

        <div class="modal-body">
          <slot name="body"> Deseja realmente excluir o usuário? </slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button class="excluir" @click="excluirConfir">
              <Trash2Icon size="1x" /> Sim, excluir usuario
            </button>
            <button class="modal-default-button" @click="$emit('close')">Cancelar</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Trash2Icon, AlertTriangleIcon } from "vue-feather-icons";
export default {
  props: ["showModal", "itemParaExclusao"],
  components: { Trash2Icon, AlertTriangleIcon },
  methods: {
    excluirConfir() {
      this.$axios
        .delete(`usuarios/${this.itemParaExclusao}`)
        .then(() => {
          this.$emit('listar')
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style lang="css">
@import "../assets/components/modal.css";
</style>
