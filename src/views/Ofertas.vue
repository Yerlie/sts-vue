<template>
  <div v-if="result !== null">
    <div class="dia-actualizar">
      Actualizado el {{ new Date(result.updateTime).toLocaleDateString() }}
    </div>
    <div v-for="item in result.pages" :key="item.id">
      <div v-if="!item.hidden" class="oferta">
        <a
          :href="result.data[item.id].url"
          target="_blank"
          style="max-height: 3.3em; overflow: hidden; margin-bottom: 1em"
        >
          <span style="font-weight: bolder">{{
            new Date(result.data[item.id].fecha).toLocaleDateString() +
            " " +
            result.data[item.id].titulo +
            ":"
          }}</span>
          {{ result.data[item.id].descripcion }} <br />
        </a>
        <!--div v-if="item.grupo !== null">repetida en grupo {{ item.grupo }}</!--div-->
      </div>
    </div>
  </div>
  <div v-else style="text-align: center">
    <img src="img/loading.gif" alt="" />
  </div>
</template>

<script>
import lzString from 'lz-string';
export default {
  name: "Home",
  data() {
    return {
      result: null,
    };
  },
  async mounted() {
    let result = await (
      await fetch("https://us-central1-jobwus-5f24c.cloudfunctions.net/getData")
    ).text();
    setTimeout(() => {
      this.result = result;
     let uncompress = lzString.decompressFromBase64(result);
      this.result = JSON.parse(uncompress);
    }, 1000);
  },
};
</script>
<style scoped>
.oferta {
  border: 1px solid rgb(71, 69, 69);
  margin-bottom: 1em;
  padding: 0.5em;
  max-height: var(--alto-oferta);
  overflow: hidden;
}

a {
  color: var(--color);
  text-decoration: none;
}
.dia-actualizar {
  text-align: right;
  font-size: 1em;
  font-weight: bolder;
  margin-bottom: 15px;
  margin-top: 0px;
}
</style>