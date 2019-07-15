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
  <div class="svgComp githubIcon">
    <div class="paddingTopHolder">
      <div class="absoluteCtnr">

<svg xmlns="http://www.w3.org/2000/svg" width="631.426" height="631.429" viewBox="0 0 167.065 167.065">
  <path class="svgClor1" d="M83.532 0c46.135 0 83.533 38.341 83.533 85.646 0 37.832-23.907 69.925-57.078 81.26-4.235.844-5.739-1.83-5.739-4.11 0-2.823.1-12.045.1-23.506 0-7.985-2.672-13.198-5.671-15.854 18.603-2.122 38.15-9.364 38.15-42.26 0-9.355-3.242-16.99-8.605-22.987.869-2.164 3.734-10.876-.818-22.671 0 0-7-2.297-22.947 8.78-6.674-1.897-13.824-2.85-20.925-2.883-7.1 0-14.242.986-20.908 2.882-15.963-11.076-22.98-8.779-22.98-8.779-4.535 11.795-1.67 20.507-.81 22.67-5.337 5.998-8.604 13.633-8.604 22.989 0 32.811 19.505 40.162 38.058 42.326-2.39 2.138-4.553 5.914-5.305 11.452-4.76 2.189-16.856 5.973-24.307-7.117 0 0-4.42-8.228-12.806-8.83 0 0-8.144-.108-.568 5.205 0 0 5.471 2.631 9.272 12.53 0 0 4.903 15.286 28.142 10.107.042 7.159.117 13.908.117 15.946 0 2.264-1.537 4.912-5.705 4.119C23.932 155.595 0 123.486 0 85.645 0 38.342 37.406 0 83.532 0" />
</svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GithubIcon",
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

  $aspectRatio: 631.426/631.429;
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
  .svgClor1 {
    fill: var(--svgClor1);
  }
</style>
