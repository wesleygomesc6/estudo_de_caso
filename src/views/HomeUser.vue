<template>
  <main>
    <Pagina/>
    <div class="conteudo"><p>
        <h2> What is Lorem Ipsum? </h2>
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p></div>
  </main>
</template>
<script>
import Pagina from "@/components/Pagina";
export default {
  components: {
    Pagina,
  },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss">
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
