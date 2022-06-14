<template>
  <main>
    <Pagina />
    <div class="conteudo">
      <div class="header-table">
        <h2>Usuários</h2>
        <div class="acoes">
          <div class="input-icons">
          <i class="icon"> <SearchIcon /> </i>
            <input class="input-field" type="text" placeholder="Buscar usuario" ></input>
          </div>
          <button class="cadastro" @click.prevent="redirect"><UserPlusIcon /><span>Adicionar usuário</span></button>
        </div>
      </div>
      <table>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Permissão</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr v-for="(value, item) in items">
          <td>{{ value.nome }}</td>
          <td>{{ value.email }}</td>
          <td>{{ value.permissao }}</td>
          <td :class="`${value.status === 'Ativo' ? 'ativo' : 'inativo'}`">
            {{ value.status }}
          </td>
          <td width="10">
            <div class="opcoes">
            <router-link :to="{name: 'EditarUsuario', params: {id: value.id}}"><EditIcon size="1x"/></router-link>
              <Trash2Icon size="1x" @click="excluirItem(value.id)" />
            </div>
          </td>
        </tr>
      </table>
      <Modal v-if="showModal" :itemParaExclusao="itemParaExclusao" @listar="listar" @close="showModal = false"/>
    </div>
  </main>
</template>
<script>
import Pagina from "@/components/Pagina";
import Modal from '@/components/Modal';
import { SearchIcon, UserPlusIcon, Trash2Icon, EditIcon } from "vue-feather-icons";
export default {
  components: {
    Modal,
    Pagina,
    SearchIcon,
    UserPlusIcon,
    Trash2Icon,
    EditIcon,
  },
  data() {
    return {
      itemParaExclusao: null,
      showModal: false,
      items: [],
    };
  },
  mounted() {
    if (this.$store.state.permissao === "Usuario") {
      alert("Você não tem acesso a essa pagina!!");
      this.$router.push({ path: "/home-user" });
    } else {

      this.listar();
    }
  },
  methods: {
    redirect() {
this.$router.push({path: '/cadastro-usuario'})
    },
    listar() {
      this.$axios
        .get("usuarios")
        .then((res) => (this.items = res.data))
        .catch((err) => conole.log(err));
        this.showModal = false;
    },
    excluirItem(item) {
      this.showModal = true;
      this.itemParaExclusao = item;
    },
  },
};
</script>
<style lang="scss">
@import "../assets/components/usuarios.scss";

</style>
