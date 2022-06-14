<template>
  <div class="formulario">
    <div class="content-form">
      <h2>Login</h2>
      <form>
        <div class="campos">
          <label for="email">E-mail</label>
          <input
            type="email"
            placeholder="Digite seu email"
            v-model.trim="$v.usuario.email.$model"
            :class="{ error: $v.usuario.email.$error }"
          />
          <span class="mensagem" :class="{ aviso: !$v.usuario.email.$error }"
            >Informe seu e-mail. ex.: jsalves@email.com</span
          >
          <label for="senha">Senha</label>
          <input type="password" placeholder="Digite sua senha" v-model="usuario.senha" />
        </div>
        <div class="botoes">
          <button class="submit" @click.prevent="login">
            <LogInIcon /><span>Entrar</span>
          </button>
          <router-link to="/cadastro">
            <button class="cadastro"><UserPlusIcon /> Não tenho cadastro</button>
          </router-link>
        </div>
      </form>
      <div class="logo">
        <img src="../imagens/logo_unimed.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { LogInIcon, UserPlusIcon } from "vue-feather-icons";
import { required, email } from "vuelidate/lib/validators";
export default {
  components: {
    LogInIcon,
    UserPlusIcon,
  },
  data() {
    return {
      usuario: {
        email: "",
        senha: "",
      },
    };
  },
  validations: {
    usuario: {
      email: {
        required,
        email,
      },
    },
  },
  methods: {
    login() {
      this.$axios
        .get(`usuarios?email=${this.usuario.email}`)
        .then((res) => {
          if (!res.data[0]) {
            alert("Usuário não cadastrado!");
          } else {
            if (res.data[0].senha === this.usuario.senha) {
              this.$store.commit("USUARIO_LOGADO", {
                user: res.data[0].nome,
                permissao: res.data[0].permissao,
              });
              // this.$store.state.user = res.data[0].nome
              // this.$store.state.permissao = res.data[0].permissao
              //localStorage.setItem('user', res.data[0].nome)
              this.$router.push({ path: "/home-user" });
            } else {
              alert("dados incorretos");
            }
          }
        })
        .catch((err) => alert("Erro! " + err));
    },
  },
};
</script>
<style lang="scss">
@import "../assets/components/formularios.scss";
</style>
