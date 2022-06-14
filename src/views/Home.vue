<template>
  <div class="home">
    <ImagemBack />
    <div class="conteudo">
    <FormularioLogin/>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ImagemBack from '@/components/ImagemBack';
import FormularioLogin from '@/components/FormularioLogin'

export default {
  name: 'Home',
  components: {
    ImagemBack,
    FormularioLogin
  }
}
</script>
<style lang="scss">
  .home {
    display: flex;
    justify-content: space-between;
    .conteudo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 50vw;
      height: 100vh;
      width: 100%;
    }
  }
</style>
