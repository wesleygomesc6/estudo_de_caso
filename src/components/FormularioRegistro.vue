<template>
  <div class="formulario">
    <div class="content-form">
      <h2>Faça seu cadastro</h2>
      <form>
        <div class="campos">
          <label for="nome">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            v-model.trim="$v.usuario.nome.$model"
            :class="{ error: $v.usuario.nome.$error }"
          />
          <span class="mensagem" :class="{ aviso: !$v.usuario.nome.$error }"
            >Minímo de 3 caracteres e máximo 50.</span
          >

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
          <input
            type="password"
            placeholder="Digite sua senha"
            v-model.trim="$v.usuario.senha.$model"
            :class="{ error: $v.usuario.senha.$error }"
          />
          <span class="mensagem" :class="{ aviso: !$v.usuario.senha.$error }"
            >A senha deve conter pelo menos 8 caracteres.</span
          >
          <label for="confirSenha">Confime a Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha novamente"
            v-model.trim="$v.confirm.repeatPassword.$model"
            :class="{ error: $v.confirm.repeatPassword.$error }"
          />
          <span class="mensagem" :class="{ aviso: !$v.confirm.repeatPassword.$error }"
            >As senhas devem sem iguais.</span
          >
        </div>
        <div class="botoes">
          <button class="submit" @click.prevent="cadastrar">
            <UserCheckIcon /> Cadastrar
          </button>
          <router-link to="/">
            <button class="cadastro"><ArrowLeftIcon /> Voltar</button>
          </router-link>
        </div>
      </form>
      <div class="logo">
        {{ pass }}
        <img src="../imagens/logo_unimed.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { UserCheckIcon, ArrowLeftIcon } from "vue-feather-icons";
import { required, minLength, email, maxLength, sameAs } from "vuelidate/lib/validators";
export default {
  components: {
    UserCheckIcon,
    ArrowLeftIcon,
  },
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        senha: "",
        permissao: "Usuario",
        status: "Ativo",
      },
      confirm: {
        password: "",
        repeatPassword: "",
      },
    };
  },
  computed: {
    pass() {
      return (this.confirm.password = this.usuario.senha);
    },
  },
  validations: {
    usuario: {
      nome: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(50),
      },
      email: {
        required,
        email,
      },
      senha: {
        required,
        minLength: minLength(8),
      },
    },
    confirm: {
      password: {
        required,
      },
      repeatPassword: {
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    cadastrar() {
      this.$axios
        .post("usuarios", this.usuario)
        .then((res) => {
          if (res.status === 201 || 200) {
            this.$router.push({ path: "/" });
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
