<template>
  <div class="testing-svg">
    <div class="image">
      <!-- <github></github> -->
      <SvgTesting></SvgTesting>
    </div>
  </div>
</template>

<script>
// import github from "@/components/svg/github.vue";
import SvgTesting from "@/components/svg/SvgTesting.vue";

export default {
  name: 'TestingSvg',
  components: {
    // github,
    SvgTesting,
  },
  props: {
  },
  data () {
    return {
    };
  },
  mounted () {
  },
  methods: {
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";

  .testing-svg {
    --imgWidth: 200px;
    --imgHeight: 200px;

    width: 500px;
    height: 500px;
    display: grid;
    justify-content: center;
    align-content: center;
    border: 1px solid green;
  }
  .image {
    width: var(--imgWidth);
    height: var(--imgHeight);
    position: relative;
    // overflow: hidden;
    box-sizing: border-box;
    border: 1px solid red;
  }
  /deep/ .image .svgComp {
    top: 50%;
    left: 50%;
    width: 100%;
    border: 1px solid blue;

    // ."Pass down" some variable to those svg image.
    // ----------------------------------------------
    --pathWithMainColor: hsl(70deg, 80%, 30%);
    --pathWithSecondColor: hsl(170deg, 80%, 30%);
    // --imgScale: 1.1;
    --imgScale: 1.0;
    // --imgRotate: -10deg;
    --imgRotate: 0deg;
  }
</style>
