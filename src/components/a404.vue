<template>
  <div class="a404">
    <h2>This url<br>
      <span class="url">{{ fullPath }}</span><br>
      don't match any routes.</h2>
  </div>
</template>

<script>
export default {
  name: 'a404',
  props: {
  },
  data () {
    return {
      fullPath: null,
    };
  },
  mounted () {
    this.fullPath = this.$route.fullPath;
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";

  .a404 h2 {
    font-size: calc(#{$spaceS5} - #{$spaceS1});
    line-height: 170%;
  }
  .url {
    font-size: 1.0rem;
  }
</style>
