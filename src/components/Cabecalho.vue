<template>
  <div class="cabecalho">
    <section>
      <h1>Seja bem-vindo {{ nomeUsuario }}</h1>
      <div class="icones">
        <SearchIcon /><MailIcon />
        <div class="perfil"></div>
      </div>
    </section>

    <span>{{ dataAtual }}</span>
  </div>
</template>
<script>
import { SearchIcon, MailIcon } from "vue-feather-icons";
export default {
  components: { SearchIcon, MailIcon },
  data() {
    return {
      nomeUsuario: ''
    }
  },
  created () {
    this.nomeUsuario = this.$store.state.user
  },
  computed: {
    dataAtual() {
      const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Desenbro",
      ];
      const semana = [
        "Domingo",
        "Segunda-feira",
        "Terça-feira",
        "Quarta-feira",
        "Quinta-feira",
        "Sexta-feira",
        "Sábado",
      ];
      let dt = new Date();
      let diaSemana = dt.getDay();
      let dia = dt.getDate();
      let mes = dt.getMonth();
      let ano = dt.getFullYear();

      return semana[diaSemana] + ", " + dia + " de " + meses[mes] + " " + ano;
    },
  },
};
</script>
<style lang="scss">
@import "../assets/variaveis.scss";
.cabecalho {
  width: 100%;
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 5px 0px;
    }
    .icones {
      display: flex;
      align-items: center;
      svg {
        padding: 0.2rem;
        margin: 0.2rem;
      }
      .perfil {
        border: 2px solid $color-info;
        margin: 0.2rem;
        width: 35px;
        height: 35px;
        background: url("../imagens/perfil.png") 50% no-repeat;
        background-size: cover;
        border-radius: 50px;
      }
    }
  }
}
</style>
