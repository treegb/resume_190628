<template>
  <div class="resumeTitle">
    <div class="treegbNameCtnr">
      <treegbName></treegbName>
    </div>
    <div class="downloadPdfCtnr">
      <div class="clippingCtnr">
        <div class="dwLink">
          <div class="transform">
            <a href="http://www.example.com" class="defaultText">下載 PDF 版本</a>
          </div>
        </div>
        <downloadPdf></downloadPdf>
      </div>
    </div>
  </div>
</template>

<script>
import treegbName from "@/components/svg/treegbName.vue"
import downloadPdf from "@/components/svg/downloadPdf.vue"

export default {
  name: 'resumeTitle',
  components: {
    treegbName,
    downloadPdf,
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
  watch: {
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";
  .treegbNameCtnr {
    position: relative;
    height: 9em;
        //border: 2px solid coral;
  }
  .treegbNameCtnr /deep/ .treegbName {
    width: 20em;
    left: 85%;
    top: 95%;
  }
  .downloadPdfCtnr {
        //border: 1px solid blue;
  }
  .downloadPdfCtnr .clippingCtnr {
    // .Purpose: Clip out the left part of { downloadPdf } svg image.
    position: relative;
    margin-left: 7vw;
    height: 5.5em;
    // .This will be big enough to not "clipped" the top and bottom of inner svg image.
    overflow: hidden;
        //border: 1px solid blue;
  }
  .downloadPdfCtnr /deep/ .downloadPdf,
  .downloadPdfCtnr .dwLink {
    // .Decent size, got by trial and error.
    // -------------------------------------
    top: 2em;
    left: calc(100% - 6.5em);
  }
  .downloadPdfCtnr /deep/ .downloadPdf {
    width: 80em;
    // .Decent size, got by trial and error.
        //border: 1px solid yellow;
  }
  .downloadPdfCtnr .dwLink {
    position: absolute;
    right: -4em;
    // .To fix special visual issue: To fix a parent ,, having absolute positioning child ,,
    // if that child use { left } property and that { left } is too big ,,
    // causing right border "touch" on parent's right border ,, the child start to squeezed
    // and has smaller width.
    // .To solve this, I set { right } to a big enough value.
    // .See comment id 190702m213901.
        //border: 5px solid purple;
        z-index: 1;
        // .Prevent SVG overlapping.
  }
  .downloadPdfCtnr .dwLink .transform {
    transform: translate(-50%, -50%);
    text-align: center;
    // .See comment id 190702m213901 to see why I use { text-align: center }.
        //border: 3px solid blue;
  }
  @media screen and (max-width: $screenMdWidth) {
    .treegbNameCtnr /deep/ .treegbName {
      width: 16em;
      left: 80%;
    }
  }
</style>
