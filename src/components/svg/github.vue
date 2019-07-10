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
  <div class="svgComp github">
    <div class="paddingTopHolder">
      <div class="absoluteCtnr">

<svg xmlns="http://www.w3.org/2000/svg" width="301.035" height="293.671" viewBox="0 0 301.035 293.671">
  <path class="pathWithMainColor" d="M280.844 74.965c-13.46-23.062-31.717-41.32-54.776-54.778C203.005 6.727 177.827 0 150.516 0 123.21 0 98.023 6.73 74.965 20.187 51.903 33.644 33.646 51.903 20.187 74.965 6.729 98.025 0 123.208 0 150.512c0 32.798 9.569 62.29 28.712 88.486 19.14 26.197 43.867 44.325 74.178 54.384 3.529.655 6.14.195 7.839-1.37 1.699-1.566 2.547-3.528 2.547-5.877 0-.392-.034-3.918-.099-10.583-.067-6.664-.099-12.479-.099-17.44l-4.507.78c-2.875.527-6.5.75-10.878.687-4.375-.061-8.917-.52-13.62-1.372-4.705-.845-9.081-2.805-13.132-5.876-4.048-3.07-6.922-7.09-8.621-12.05l-1.96-4.51c-1.306-3.003-3.363-6.339-6.173-9.995-2.81-3.659-5.65-6.14-8.524-7.446l-1.373-.982a14.388 14.388 0 0 1-2.547-2.354c-.784-.914-1.37-1.828-1.763-2.744-.392-.916-.067-1.668.98-2.257 1.047-.59 2.938-.876 5.683-.876l3.919.585c2.613.524 5.845 2.088 9.701 4.703 3.854 2.613 7.022 6.009 9.505 10.188 3.006 5.358 6.628 9.441 10.877 12.25 4.245 2.81 8.525 4.213 12.836 4.213 4.31 0 8.034-.327 11.17-.977 3.134-.653 6.074-1.636 8.82-2.941 1.175-8.758 4.377-15.486 9.601-20.188-7.446-.783-14.141-1.962-20.088-3.529-5.943-1.569-12.084-4.116-18.42-7.647-6.34-3.526-11.598-7.905-15.778-13.128-4.18-5.227-7.611-12.089-10.288-20.58-2.678-8.493-4.017-18.291-4.017-29.397 0-15.812 5.162-29.267 15.484-40.374-4.835-11.888-4.379-25.214 1.371-39.978 3.79-1.177 9.408-.294 16.855 2.645 7.448 2.94 12.9 5.458 16.365 7.547 3.463 2.087 6.239 3.856 8.33 5.29 12.153-3.395 24.695-5.093 37.629-5.093 12.934 0 25.478 1.698 37.632 5.094l7.447-4.702c5.093-3.137 11.107-6.012 18.028-8.625 6.925-2.612 12.22-3.331 15.88-2.154 5.877 14.765 6.4 28.09 1.564 39.978 10.321 11.107 15.486 24.566 15.486 40.374 0 11.106-1.344 20.935-4.018 29.494-2.677 8.56-6.138 15.415-10.383 20.579-4.25 5.162-9.542 9.507-15.878 13.032-6.337 3.529-12.48 6.075-18.424 7.645-5.946 1.569-12.64 2.748-20.087 3.532 6.792 5.877 10.188 15.155 10.188 27.828v41.349c0 2.349.817 4.31 2.452 5.877 1.633 1.564 4.212 2.025 7.74 1.37 30.316-10.06 55.043-28.187 74.183-54.385 19.137-26.195 28.71-55.688 28.71-88.486-.007-27.3-6.74-52.48-20.191-75.541z" stroke-width="1.457"/>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "github",
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

  $aspectRatio: 301.035/293.671;
  // .Aspect ratio: Hav to sync with svg width and height data,
  // after convert svg from inkscape to this component.
  // The value is (width / height), and it is pure number, so you can't use
  // something like (300px / 200px), but (300 / 200).
  $scalingPivotX: -50%;
  $scalingPivotY: -75%;
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
            //transform: translate($scalingPivotX, $scalingPivotY) scale(0.2) rotate(30deg);
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
