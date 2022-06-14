<template>
    <main>
        <Pagina />
        <div class="conteudo">
        <p>
        <h2> Suporte </h2>
         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </p>
        </div>
        </section>
    </main>
</template>
<script>
import Pagina from '@/components/Pagina';
export default {
    components: {
        Pagina
    },
    data() {
        return {
       
        }
    },
}
</script>
<style lang="scss">
    @import '../assets/variaveis.scss';
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