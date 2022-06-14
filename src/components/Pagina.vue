<template>
  <div class="corpo">
    <div class="navegacao">
      <img src="../imagens/logo_unimed.png" />
      <ul>
        <li>
          <HomeIcon />
          <router-link to="home-user">Home</router-link>
        </li>
        <li>
          <UserIcon />
          <router-link to="/usuarios">Usuários</router-link>
        </li>

        <li @click="logout">
          <LogOutIcon />
          <router-link to="/">Sair</router-link>
        </li>
      </ul>
      <ul>
        <li>
          <AlertTriangleIcon />
          <router-link to="/suporte">Suporte</router-link>
        </li>
      </ul>
    </div>
    <main>
      <section class="cabecalho">
        <Cabecalho />
      </section>
    </main>
  </div>
</template>
<script>
import Cabecalho from "@/components/Cabecalho";
import { HomeIcon, UserIcon, LogOutIcon, AlertTriangleIcon } from "vue-feather-icons";
export default {
  components: { Cabecalho, UserIcon, HomeIcon, LogOutIcon, AlertTriangleIcon },
  data() {
    return {
      menus: [
        { nome: "Home", to: "/home-user", icon: "HomeIcon" },
        { nome: "Usuarios", to: "/usuarios", icon: "UserIcon" },
        { nome: "Sair", to: "/", icon: "LogOutIcon" },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.commit("USUAIRO_DESLOGADO");
    },
  },
};
</script>
<style lang="scss">
@import "../assets/components/pagina.scss";
</style>
