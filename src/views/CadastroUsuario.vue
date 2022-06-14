<template>
  <main>
    <Pagina />
    <div class="conteudo">
      <div class="formulario">
        <h1>{{ titulo }}</h1>
        <form id="cadastro">
          <div class="cadastro">
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

            <div class="selecao">
              <div class="permissao">
                <label>Permissão</label>
                <select id="permissao" form="cadastro" v-model="usuario.permissao">
                  <option disabled value="">Selecione</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Usuario">Usuario</option>
                </select>
              </div>
              <div class="status">
                <label>Status</label>
                <select id="status" form="cadastro" v-model="usuario.status">
                  <option disabled value="">Selecione</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>
            </div>
            <div class="botoes">
              <button class="submit" @click.prevent="cadastrar">
                <UserCheckIcon /> <span>Cadastrar</span>
              </button>
              <router-link to="/usuarios">
                <button class="voltar">
                  <ArrowLeftIcon /> <span>Voltar</span>
                </button></router-link
              >
            </div>
          </div>
        </form>
      </div>
    </div>
    {{ pass }}
  </main>
</template>
<script>
import { ArrowLeftIcon, UserCheckIcon } from "vue-feather-icons";
import { required, minLength, email, maxLength, sameAs } from "vuelidate/lib/validators";
import Pagina from "@/components/Pagina";
export default {
  components: { Pagina, ArrowLeftIcon, UserCheckIcon },
  data() {
    return {
      id: this.$route.params.id,
      titulo: "Cadastrar Usuário",
      usuario: {
        nome: "",
        email: "",
        senha: "",
        permissao: "",
        status: "",
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
  mounted() {
    if (this.$store.state.permissao === "Usuario") {
      alert("Você não tem acesso a essa pagina!!");
      this.$router.push({ path: "/home-user" });
    } else {
      if (this.id) {
        this.titulo = "Editar Usuário";
        this.$axios.get(`usuarios/${this.id}`).then((res) => {
          this.usuario = res.data;
        });
      }
    }
  },
  methods: {
    cadastrar() {
      if (this.id) {
        this.$axios.put(`usuarios/${this.id}`, this.usuario).then(() => {
          console.log("Editado com sucesso!");
        });
      } else {
        this.$axios.post("usuarios", this.usuario).then(() => {
          console.log("Cadastrado com sucesso!");
        });
      }
      this.$router.push({ path: "/usuarios" });
    },
  },
};
</script>
<style lang="scss">
@import "../assets/components/cadastroUsuarios.scss";
main {
  .conteudo {
    margin-left: 20vw;
    padding: 1rem;
    @media (max-width: 600px) {
      margin-left: 30vw;
    }
  }
}
</style>
