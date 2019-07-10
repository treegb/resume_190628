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
  <div class="svgComp svgHtml">
    <div class="paddingTopHolder">
      <div class="absoluteCtnr">

<svg xmlns="http://www.w3.org/2000/svg" height="55.371" viewBox="0 0 84.375 55.371" width="84.375">
  <path class="pathWithSecondColor" d="M49.8 6.685l-9.559 42h-5.578l9.56-42z"/>
  <path class="pathWithMainColor" d="M67.416 27.392L51.66 19.615V12.98l22.527 11.77v5.13L51.66 41.6v-6.64zm-34.702 14.21L10.187 29.877V24.75l22.527-11.77v6.635L16.96 27.392l15.754 7.568z"/>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "svgHtml",
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

  $aspectRatio: 84.375/55.371;
  // .Aspect ratio: Hav to sync with svg width and height data,
  // after convert svg from inkscape to this component.
  // The value is (width / height), and it is pure number, so you can't use
  // something like (300px / 200px), but (300 / 200).
  $scalingPivotX: -50%;
  $scalingPivotY: -50%;
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
    transform: translate($scalingPivotX, $scalingPivotY) scale(calc(var(--imgScale) * 0.9)) rotate(var(--imgRotate));
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
