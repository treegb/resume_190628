<template>
  <footer>
    <div class="footerMovingPart">
      <div class="footerContent">
        <ul class="contact">
          <li>信箱 : bambooindark@gmail.com</li>
          <li>手機 : 0905-714-604</li>
        </ul>
      <footerTriangle class="footerTriangleBig"></footerTriangle>
      <footerTriangle class="footerTriangleSmall"></footerTriangle>
      <div class="footerTriangleText"><i>陳叙廷</i></div>
      </div>
    </div>
  </footer>
</template>

<script>
import footerTriangle from "@/components/svg/footerTriangle.vue";
export default {
  name: 'footerr',
  props: [
  ],
  components: {
    footerTriangle,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";

  $footerContent_marginTop: 2.8em;
  $footerTriangleBig_width: 64%;
  // .This value is got by trial and error! It need to be set up again will breaks if
  // { margin-top } of { .footerContent } changed again.
  $footerTriangleSmall_width: 30%;
  $footerTriangle_positionTop: -0.3em;
  $footerTriangle_positionLeft: -6em;
  $footerTriangleTextTranslateTop: -3.6em;

  // .Mobile.
  // -----------
  $footerContent_marginTop_mobile: 3.0em;
  $footerTriangleBig_width_mobile: 49%;
  $footerTriangleSmall_width_mobile: 28%;
  $footerTriangle_positionTop_mobile: -1.1em;
  $footerTriangle_positionLeft_mobile: 20%;
  $footerTriangleTextTranslateTop_mobile: -3.0em;

  // .Use Css Variable because when setting media query, this reduce some duplicated code.
  footer {
    --footerContent_marginTop: #{$footerContent_marginTop};
    --footerTriangleBig_width: #{$footerTriangleBig_width};
    --footerTriangleSmall_width: #{$footerTriangleSmall_width};
    --footerTriangle_positionTop: #{$footerTriangle_positionTop};
    --footerTriangle_positionLeft: #{$footerTriangle_positionLeft};
    --footerTriangleTextTranslateTop: #{$footerTriangleTextTranslateTop};
  }

  footer {
    /*min-height: 7em;*/
    display: flex;
    align-items: flex-end;
  }
  .footerMovingPart {
    // Purpose: Sticky footer related. I use 2 layer of containers
    // - { footer } and { .footerMovingPart }, instead of just { footer }, just to make
    // sticky footer works.
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $clorGreyDark;
  }
  .footerContent {
    position: relative;
    min-width: 5em;
    margin-top: var(--footerContent_marginTop);
    margin-bottom: var(--footerContent_marginTop);
  }
  .footerContent /deep/ .footerTriangle {
    top: var(--footerTriangle_positionTop);
    left: var(--footerTriangle_positionLeft);
  }
  .footerContent .footerTriangleBig {
    width: var(--footerTriangleBig_width);
  }
  .footerContent .footerTriangleSmall {
    width: var(--footerTriangleSmall_width);
    top: calc(var(--footerTriangle_positionTop) - 0.1em);
  }
  .footerTriangleBig /deep/ .theMainPath {
    fill: white;
  }
  .footerTriangleSmall /deep/ .theMainPath {
    fill: $clorPrimary;
  }
  .footerContent .contact {
    list-style-type: square;
    padding-left: $spaceS5;
    margin-top:0;
    margin-bottom:0;
  }
  .footerContent .contact li {
    font-size: 0.9em;
    color: #CCC;
  }
  .footerTriangleText {
    // ."陳叙廷".
    position: absolute;
    top: var(--footerTriangle_positionTop);
    left: var(--footerTriangle_positionLeft);
    display: inline-block;
    // .To make Transform work. CSS Transform don't work on most inline element.
    color: $clorPrimary;
    transform: translate(-50%, var(--footerTriangleTextTranslateTop));

  }
  .footerTriangleText i {
    font-size: 0.8em;
  }

  @media screen and (max-width: $screenMdWidth) {
    footer {
      --footerContent_marginTop: #{$footerContent_marginTop_mobile};
      --footerTriangleBig_width: #{$footerTriangleBig_width_mobile};
      --footerTriangleSmall_width: #{$footerTriangleSmall_width_mobile};
      --footerTriangle_positionTop: #{$footerTriangle_positionTop_mobile};
      --footerTriangle_positionLeft: #{$footerTriangle_positionLeft_mobile};
      --footerTriangleTextTranslateTop: #{$footerTriangleTextTranslateTop_mobile};
    }
  }
</style>
