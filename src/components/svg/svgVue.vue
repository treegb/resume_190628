<!--
.About: Here only briefly list few things you need to set up correctly to use this component.
About details, see comment inside this component.
.Change component name, for example "footerTriangle".
.Parent: Set parent element to { positin: relative }, and give { .svgComp } an
explicit positioning. Also set { width } of { .svgComp } in parent.
.Convert inkscape svg to optimized svg, with tools like { SvgOmg }-{ SVGO }-[ SVG optimizer ].
.Set correct aspect ratio.
.Set correct pivot point for scalling.
.Apply class on that target svg path. ({ class="theMainPath" }). And set the color.
Don't use { id } and use { class } instead, because it is more consistent, convenient, and if you
use this component multiple times, they don't collision with id's, and Vue will make
"alias" ( data attribute ) for classes.
-->
<template>
  <div class="svgComp svgVue">
    <div class="paddingTopHolder">
      <div class="absoluteCtnr">

<svg xmlns="http://www.w3.org/2000/svg" width="199.839" height="170.575" viewBox="0 0 199.839 170.575">
  <path class="pathWithMainColor" d="M97.645 168.616c-.815-1.271-22.716-38.987-48.67-83.812C23.024 39.98 1.387 2.877.896 2.354.401 1.832 0 1.04 0 .592c0-.446 17.402-.694 38.672-.55l38.672.262 10.764 18.5c5.92 10.175 11.271 18.5 11.892 18.5.62 0 5.972-8.325 11.892-18.5l10.764-18.5 38.76-.262c21.317-.144 38.607.092 38.421.525-.185.433-5.174 9.1-11.085 19.262-5.912 10.161-27.962 48.142-49 84.402-21.039 36.26-38.786 66.1-39.438 66.312-.653.212-1.854-.655-2.669-1.927z"/>
  <path class="pathWithSecondColor" d="M70.204 52.591C54.188 24.941 41.437 1.968 41.867 1.537c.43-.43 8.4-.66 17.708-.508l16.925.275 11.09 19c6.098 10.45 11.683 19 12.41 19 .727 0 6.312-8.55 12.41-19l11.09-19 16.925-.275c9.309-.151 17.274.074 17.7.5.788.789-56.429 100.543-57.962 101.054-.461.154-13.942-22.343-29.959-49.992z"/>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "svgVue",
    components: {
    },
    props: [
    ],
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/style/base.scss";

  $aspectRatio: 199.839/170.575;
  // .Aspect ratio: Hav to sync with svg width and height data,
  // after convert svg from inkscape to this component.
  // The value is (width / height), and it is pure number, so you can't use
  // something like (300px / 200px), but (300 / 200).
  $scalingPivotX: -50%;
  $scalingPivotY: -55%;
  // .{ scalingPivotY }: scalingPivotX = 0% and scalingPivotY = 0% means pivot
  // will be left-top side of svg image.
  // scalingPivotX = -100% and scalingPivotY = -100% means pivot
  // will be right-bottom side of svg image.

  .svgComp {
    position: absolute;
    // .Parent:
    // ..Position: You have to set parent element to { positin: relative }, and give
    // { .svgComp } a explicit positioning.
    // ..{ width }: { width } need to be set in order to make this svg component works
    // properly. But instead of setting it here, set it outside (parent component)
    // by using /deep/ selector.
    // Because the width is often depends on perent environment, by setting it outside,
    // it will be more flexible.
    //width: 90%;
    margin: 0;
    padding: 0;
    //border: 1px solid purple;
  }
  .paddingTopHolder {
    // .Purpose: This container serve 2 purpose - 1. Create the height according
    // to aspect ratio, with percentage { padding-top } hack. 2. Set the center pivot
    // of scaling, so
    margin: 0;
    padding: 0;
    width: 100%;
    padding-top: calc(100% / (#{$aspectRatio}));
    //border: 3px solid blue;
  }
  .absoluteCtnr {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translate($scalingPivotX, $scalingPivotY) scale(calc(var(--imgScale) * 0.7)) rotate(var(--imgRotate));
    line-height: 0;
    // .Don't know why there is a gap at the top of { svg }, and don't know why it could
    // get removed after setting { line-height: 0 } here.
    //border: 3px solid red;
  }
  svg {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    //border: 3px solid yellow;
  }
  .pathWithMainColor {
    fill: var(--pathWithMainColor);
  }
  .pathWithSecondColor {
    fill: var(--pathWithSecondColor);
  }
</style>
