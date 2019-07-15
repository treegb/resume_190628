<template>
  <footer>
    <div class="footerMovingPart">
      <div class="footerContent">
        <ul class="contact">
          <li>
            <div class="iconCtnr"><email style="width: 80%"></email></div>
            <div class="text">bambooindark@gmail.com</div>
          </li>
          <li>
            <div class="iconCtnr"><phone style="width: 55%"></phone></div>
            <div class="text">0905-714-604</div>
          </li>
          <li>
            <div class="iconCtnr"><githubIcon></githubIcon></div>
            <div class="text"><a href="https://github.com/treegb">https://github.com/treegb</a></div>
          </li>
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
import email from "@/components/svg/email.vue";
import phone from "@/components/svg/phone.vue";
import GithubIcon from "@/components/svg/githubIcon.vue";

export default {
  name: 'footerr',
  props: [
  ],
  components: {
    footerTriangle,
    email,
    phone,
    GithubIcon,
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";

  $footerContent_marginTop: 2.8em;
  $footerTriangleBig_width: 10.0em;
  // .This value is got by trial and error! It need to be set up again will breaks if
  // { margin-top } of { .footerContent } changed again.
  $footerTriangle_bigSmallRatio: 0.67;
  $footerTriangleSmall_width: ($footerTriangleBig_width * $footerTriangle_bigSmallRatio);
  $footerTriangle_positionTop: -0.3em;
  $footerTriangle_positionLeft: -6em;
  $footerTriangleTextTranslateTop: -3.6em;

  // .Mobile.
  // -----------
  $footerContent_marginTop_mobile: 3.2em;
  $footerTriangleBig_width_mobile: 8.2em;
  $footerTriangleSmall_width_mobile: ($footerTriangleBig_width_mobile * $footerTriangle_bigSmallRatio * 0.95);
  $footerTriangle_positionTop_mobile: -1.1em;
  $footerTriangle_positionLeft_mobile: 20%;
  $footerTriangleTextTranslateTop_mobile: -3.4em;

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
    margin-left: ($footerTriangleBig_width + 0em);
    // .Purpose: Since both [ footer triangle ]-[ svg ] ,, positioning, depends on
    // the top left corner of { .footerContent }, I use { margin-left } to prevent
    // left side of [ footer triangle ]-[ svg ] been trim out by viewport.
    // .Value: By trial and error.
        //border: 1px solid yellow;

    & /deep/ .footerTriangle {
      top: var(--footerTriangle_positionTop);
      left: var(--footerTriangle_positionLeft);
    }
    & .footerTriangleBig {
      width: var(--footerTriangleBig_width);
    }
    & .footerTriangleSmall {
      width: var(--footerTriangleSmall_width);
      top: calc(var(--footerTriangle_positionTop) - 0.1em);
    }
    .footerTriangleBig /deep/ .theMainPath {
      fill: white;
    }
    .footerTriangleSmall /deep/ .theMainPath {
      fill: $clorPrimary;
    }
    & .contact {
      padding-left: 1.6em;
      padding-right: 1.6em;
      margin-top:0;
      margin-bottom:0;
      list-style-type: none;
          //border: 2px solid red;
    }
    & .contact li {
      font-size: 0.9em;
      color: #CCC;
      margin-top: 0.4em;
      margin-bottm: 0.4em;
    }
    & .contact li .iconCtnr,
    & .contact li .text {
      display: inline-block;
      vertical-align: middle;
    }
    & .contact li .iconCtnr {
      position: relative;
      --iconCtnrFixedSize: 1.9em;
      width: var(--iconCtnrFixedSize);
      height: var(--iconCtnrFixedSize);
      margin-right: 1.3em;
          //border: 1px solid red;
    }
    & .contact li .iconCtnr .svgComp {
      --svgClor1: #{scale-color(
        $clorGreyDark,
        $lightness: 16%
      )};
      --svgDefaultWidth: 90%;
      // .Notice, this is just casually default width. The real width customed for
      // individual icon svg is SET DIRECTLY ON HTML ELEMENT.
      width: var(--svgDefaultWidth);
      top: 50%;
      left: 50%;
    }
    & .contact a {
      color: scale-color(
        $clorPrimary,
        $saturation: -20%,
        $lightness: 20%,
      );
    }
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

    .footerContent {
      margin-left: unset;
    }
  }
</style>
