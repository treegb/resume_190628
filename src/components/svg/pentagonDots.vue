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
  <div class="svgComp pentagonDots">
    <div class="paddingTopHolder">
      <div class="absoluteCtnr">

<svg xmlns="http://www.w3.org/2000/svg" width="545.197" height="469.546" viewBox="0 0 144.25 124.234">
  <g class="pathWithMainColor">
    <path d="M19.32 73.21H6.44L0 62.116l6.44-11.092h12.88l6.439 11.092zM34.13 98.722H21.252l-6.44-11.093 6.44-11.092h12.88l6.44 11.092zM48.942 124.234h-12.88l-6.44-11.092 6.44-11.093h12.88l6.44 11.093zM34.13 47.697H21.252l-6.44-11.092 6.44-11.093h12.88l6.44 11.093zM48.942 73.21h-12.88l-6.44-11.093 6.44-11.092h12.88l6.44 11.092zM63.753 98.722h-12.88l-6.439-11.093 6.44-11.092h12.88l6.439 11.092zM78.565 124.234h-12.88l-6.44-11.092 6.44-11.093h12.88l6.44 11.093zM48.942 22.185h-12.88l-6.44-11.093L36.063 0h12.88l6.44 11.092zM63.753 47.697h-12.88l-6.439-11.092 6.44-11.093h12.88l6.439 11.093zM78.565 73.21h-12.88l-6.44-11.093 6.44-11.092h12.88l6.44 11.092zM93.376 98.722h-12.88l-6.44-11.093 6.44-11.092h12.88l6.44 11.092zM108.187 124.234H95.308l-6.44-11.092 6.44-11.093h12.88l6.44 11.093zM78.565 22.185h-12.88l-6.44-11.093L65.686 0h12.88l6.44 11.092zM93.376 47.697h-12.88l-6.44-11.092 6.44-11.093h12.88l6.44 11.093zM108.187 73.21H95.308l-6.44-11.093 6.44-11.092h12.88l6.44 11.092zM122.999 98.722h-12.88l-6.44-11.093 6.44-11.092H123l6.44 11.092zM108.187 22.185H95.308l-6.44-11.093L95.308 0h12.88l6.44 11.092zM122.999 47.697h-12.88l-6.44-11.092 6.44-11.093H123l6.44 11.093zM137.81 73.21h-12.88l-6.439-11.093 6.44-11.092h12.88l6.439 11.092z"/>
  </g>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pentagonDots",
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

  $aspectRatio: 545.197/469.546;
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
    transform: translate($scalingPivotX, $scalingPivotY);
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
    fill: hsl($clorPrimaryHue, 22%, 92%);
  }
</style>
