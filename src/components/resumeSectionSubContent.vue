<template>
  <div class="resumeSectionSubContent">
    <div class="image">
      <slot
        name="image"
      >(image)</slot>
    </div>
    <div class="colorBar"></div>
    <div class="greyBar"></div>
    <div class="content">
      <h3 class="contentTitle"><!--
        --><i><!--
          --><slot
            name="contentTitle"
          >(contentTitle)</slot><!--
        --></i><!--
    --></h3>
      <div class="contentText">
        <i class="defaultText defaultTextColor"><!--
          --><slot
            name="contentText"
          >(contentText)</slot><!--
        --></i>
      </div>
      <div class="squareDot"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'resumeSectionSubContent',
  components: {
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

  .resumeSectionSubContent {
    // .For Css Variable.
    --imgWidth: 13em;
    --imgHeight: 2em;
    --contentMinWidth: 15em;
    --contentHeight: 5em;
    --barWidth: #{$spaceS2};
  }
  .resumeSectionSubContent {
    display: grid;
    grid-template-columns: [img-start] var(--imgWidth) [img-end grey-bar-end color-bar-start content-start] 1fr [content-end];
    //justify-content: center;
    //align-content: center;
    //align-items: center;
    grid-row-gap: $spaceS2;
  }
  .image,
  .colorBar {
    height: var(--imgHeight);
  }
  .greyBar,
  .content {
    min-height: var(--contentHeight);
  }
  .image {
    grid-column: img-start / img-end;
    order: 1;
  }
  .content {
    grid-column: content-start / content-end;
    order: 4;
  }
  .colorBar {
    grid-column: color-bar-start / content-end;
    order: 2;
    width: var(--barWidth);
    justify-self: start;
    background-color: hsl($clorPrimaryHue, $clorPrimarySatr + 0%, $clorPrimaryLgtn + 10%);
  }
  .greyBar {
    grid-column: img-start / grey-bar-end;
    order: 3;
    width: var(--barWidth);
    justify-self: end;
    background-color: hsl(0deg, 0%, $clorGreyDarkLgtn);
  }
  .content {
    display: grid;
    grid-template-columns: minmax(var(--contentMinWidth), 1fr) minmax(1.3em, 3em);
    grid-template-areas:
      "contentTitle ."
      "contentText squareDot";
  }
  .image {
    border: 1px solid hsl(0deg, 0%, ($clorGreyBrightLgtn + 10%));
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    margin-right: $spaceS2/1em*1rem;
  }
  /deep/ .image .svgComp {
    top: 50%;
    left: 50%;
    width: 100%;

    // ."Pass down" some variable to those svg image.
    // ----------------------------------------------
    --pathWithMainColor: hsl(#{$clorPrimaryHue}, 52%, calc(#{$clorPrimaryLgtn} + 20%));
    --pathWithSecondColor: hsl(#{$clorPrimaryHue}, 22%, calc(#{$clorPrimaryLgtn} + 39%));
    --imgScale: 1.1;
    --imgRotate: -10deg;
  }
  .contentTitle,
  .contentText {
    margin: ($spaceS2/1em*1rem) 0 ($spaceS2/1em*1rem) ($spaceS3/1em*1rem);
  }
  .contentTitle {
    grid-area: contentTitle;
    color: hsl(0deg, 0%, ($clorGreyDarkLgtn + 10%));
  }
  .contentText {
    grid-area: contentText;
  }
  .squareDot {
    grid-area: squareDot;
    height: 0.3em;
    width: 0.3em;
    background-color: hsl(0deg, 0%, ($clorGreyBrightLgtn - 5%));
    justify-self: end;
    align-self: end;
  }

  @media screen and (max-width: $screenMdWidth) {
    .resumeSectionSubContent {
      grid-template-columns: [color-bar-start grey-bar-end] max-content [img-start content-start grey-bar-end color-bar-end ] 1fr [img-end content-end];
      grid-row-gap: $spaceS3;
    }
    .image {
      grid-column: img-start / img-end;
      order: 2;
      margin-right: 0;
      margin-left: $spaceS2/1em*1rem;
    }
    .content {
      grid-column: content-start / content-end;
      order: 4;
    }
    .colorBar {
      grid-column: color-bar-start / color-bar-start;
      order: 1;
      width: var(--barWidth);
      justify-self: start;
    }
    .greyBar {
      grid-column: color-bar-start / color-bar-start;
      order: 3;
      width: var(--barWidth);
      justify-self: start;
    }
  }
</style>
