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
  <div class="svgComp svgBootstrap">
    <div class="paddingTopHolder">
      <div class="absoluteCtnr">

<svg xmlns="http://www.w3.org/2000/svg" width="2133.334" height="2142.16" viewBox="0 0 2000.001 2008.275">
  <defs>
    <linearGradient id="a">
      <stop offset="0" stop-color="#070135"/>
      <stop offset="1" stop-color="#612d50"/>
    </linearGradient>
  </defs>
  <path class="pathWithMainColor" d="M323.077 0C144.092 0 0 144.092 0 323.077v1362.121c0 178.985 144.092 323.077 323.077 323.077h1353.847c178.984 0 323.077-144.092 323.077-323.077V323.077C2000 144.092 1855.909 0 1676.924 0zm188.55 382.954h486.638c174.56.001 300.85 26.11 378.87 78.325 78.579 52.218 117.869 135.819 117.87 250.805 0 60.55-14.314 112.212-42.938 154.984-28.627 42.219-70.163 73.604-124.607 94.157 69.599 19.998 123.482 56.939 161.65 110.82 38.167 53.884 57.251 119.987 57.252 198.311 0 119.988-40.975 209.423-122.922 268.305-81.949 58.882-206.554 88.323-373.817 88.323H511.628zm324.145 218.31v263.303h179.332c51.076.001 89.804-11.108 116.186-33.329 26.38-22.219 39.57-54.992 39.57-98.322 0-42.772-13.19-75.268-39.57-97.489-26.382-22.774-65.11-34.162-116.186-34.164zm0 481.613v325.797h190.276c65.109 0 113.942-13.609 146.497-40.828 33.115-27.22 49.672-68.326 49.673-123.32 0-53.883-16.277-94.156-48.83-120.82-32.556-27.22-81.67-40.829-147.34-40.83z"/>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "svgBootstrap",
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

  $aspectRatio: 2133.334/2142.16;
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
</style>
