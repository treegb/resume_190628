<template>
   <div :class="['resumeSectionHeading', {'even': oddOrEvenDirection === 'even'}]">
  <!-- <div class="resumeSectionHeading even"> -->
    <pentagonDots></pentagonDots>
    <div class="titleCtnr">
      <div class="transform"><!--
      --><i>{{ title }}</i><!--
        --><div class="subtitle"><i>{{ subtitle }}</i></div><!--
      --></div>
    </div>
  </div>
</template>

<script>
import pentagonDots from "@/components/svg/pentagonDots.vue"

export default {
  name: 'resumeSectionHeading',
  components: {
    pentagonDots,
  },
  props: {
    title: {
      type: String,
      default: "title",
    },
    subtitle: {
      type: String,
      default: "subtitle",
    },
    oddOrEvenDirection: {
      type: String,
      default: "odd",
    },
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

  .resumeSectionHeading {
    // .For Css Variables.
    --pivotMain: 65%;
    --pivotSvgDeviation: 2em;
    --pivotTitleDeviation: 4em;
    --pivotSvg: calc(var(--pivotMain) + var(--pivotSvgDeviation));
    --pivotTitle: calc(var(--pivotMain) + var(--pivotTitleDeviation));
    --directionNumber: 1;
  }
  .resumeSectionHeading.even {
    // .For Css Variables.
    --pivotMain: 35%;
    --pivotSvgDeviation: -2em;
    --pivotTitleDeviation: -4em;
    --directionNumber: -1;

  }
  .resumeSectionHeading.even .subtitle {
    right: unset;
    left: 0;
  }
  .resumeSectionHeading.even .titleCtnr .transform {
    transform: translate(0, -50%);
  }

  .resumeSectionHeading {
    position: relative;
    z-index: -1;
    width: 100%;
    min-width: 24em;
    max-width: 40em;
    height: 14.4em;
  }
  /deep/ .pentagonDots {
    top: 50%;
    left: var(--pivotSvg);
    width: 12em;
  }
  .titleCtnr {
    position: absolute;
    top: 50%;
    left: var(--pivotTitle);
    right: -30em;
    // .To fix special visual issue: To fix a parent ,, having absolute positioning child ,,
    // if that child use { left } property and that { left } is too big ,,
    // causing right border "touch" on parent's right border ,, the child start to squeezed
    // and has smaller width.
    // .To solve this, I set { right } to a big enough value.
    // =====================================================================================
    bottom: -30em;
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    // .Try to moving flex item to most top-left side, at the same time, minimize it's size.
    // =====================================================================================
    //border: 3px solid red;
  }
  .titleCtnr .transform {
    position: relative;
    transform: translate(-100%, -50%);
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    min-height: 3.3em;
    min-width: 7em;
    max-width: 14em;
    padding: 0.2em 2.3em;
    background-color: $clorPrimary;
    border-radius: 2px;
  }
  .subtitle {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(calc(-0.5em * var(--directionNumber)), -130%);
    //border: 2px solid blue;
    line-height: 100%;
  }
  .titleCtnr .transform > i {
    font-size: calc(#{$spaceS4} + #{$spaceS3});
    letter-spacing: 0.3em;
    text-align: center;
    color: white;
  }
  .subtitle i {
    font-size: calc(#{$spaceS4} + #{$spaceS4});
    letter-spacing: 0.1em;
    color: hsl($clorPrimaryHue, 15%, 68%);
  }

  @media screen and (max-width: $screenMdWidth) {
    .resumeSectionHeading {
      // .For Css Variables.
      --pivotMain: 65%;
    }
    .resumeSectionHeading.even {
      // .For Css Variables.
      --pivotMain: 35%;
    }

    .resumeSectionHeading {
      width: 100%;
      min-width: 0;
      max-width: 100%;
    }
    /deep/ .pentagonDots {
      width: 12em;
    }
    .titleCtnr .transform {
      padding: 0.05em 2.3em;
      min-width: 7em;
      max-width: 12em;
    }
    .titleCtnr .transform > i {
      font-size: calc(#{$spaceS4} + #{$spaceS3});
      letter-spacing: 0.3em;
    }
    .subtitle i {
      font-size: calc(#{$spaceS4} + #{$spaceS4});
      letter-spacing: 0.1em;
    }
  }
</style>
