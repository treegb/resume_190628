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
  <div class="svgComp svgSass">
    <div class="paddingTopHolder">
      <div class="absoluteCtnr">

<svg xmlns="http://www.w3.org/2000/svg" width="547.284" height="410.58" viewBox="0 0 144.802 108.633">
  <path class="pathWithMainColor" d="M124.732 62.449c-5.054.026-9.446 1.243-13.124 3.042-1.35-2.672-2.699-5.053-2.937-6.8-.264-2.037-.582-3.28-.264-5.714.317-2.435 1.746-5.9 1.72-6.165-.027-.265-.318-1.508-3.228-1.535-2.91-.026-5.424.556-5.715 1.323-.291.767-.847 2.514-1.217 4.313-.503 2.646-5.821 12.091-8.864 17.039-.979-1.932-1.826-3.625-2.01-4.974-.265-2.038-.583-3.281-.265-5.715.317-2.434 1.746-5.9 1.72-6.165-.027-.265-.318-1.508-3.229-1.535-2.91-.026-5.423.556-5.715 1.323-.29.768-.608 2.567-1.217 4.313-.608 1.746-7.673 17.515-9.525 21.59a121.827 121.827 0 0 1-2.354 4.895s-.027.08-.106.211a66.84 66.84 0 0 1-.794 1.509v.026c-.397.714-.82 1.376-1.032 1.376-.159 0-.45-1.905.053-4.498 1.058-5.477 3.572-13.996 3.545-14.287 0-.16.477-1.64-1.64-2.408-2.064-.767-2.805.503-2.99.503-.185 0-.317.45-.317.45s2.302-9.579-4.392-9.579c-4.18 0-9.949 4.578-12.806 8.705-1.8.98-5.636 3.07-9.737 5.318-1.56.873-3.175 1.747-4.683 2.567-.106-.106-.212-.238-.317-.344-8.097-8.652-23.072-14.764-22.437-26.38.238-4.232 1.693-15.345 28.76-28.839 22.278-10.98 40.005-7.937 43.074-1.19 4.392 9.63-9.498 27.516-32.517 30.11-8.784.978-13.388-2.408-14.552-3.678-1.217-1.323-1.402-1.403-1.852-1.138-.741.397-.265 1.587 0 2.275.688 1.8 3.519 4.974 8.308 6.535 4.233 1.376 14.525 2.144 26.987-2.672 13.944-5.397 24.845-20.4 21.643-32.967C87.505.536 66.338-3.67 46.31 3.447c-11.906 4.233-24.818 10.9-34.105 19.579C1.171 33.344-.576 42.314.14 46.07c2.567 13.335 20.955 22.013 28.31 28.443-.37.211-.714.397-1.005.555-3.677 1.826-17.7 9.155-21.193 16.907-3.969 8.784.635 15.081 3.678 15.928 9.445 2.62 19.156-2.09 24.368-9.869s4.577-17.886 2.17-22.516c-.027-.053-.053-.106-.106-.159.952-.555 1.931-1.137 2.884-1.693a140.69 140.69 0 0 1 5.318-2.99c-.9 2.46-1.561 5.398-1.879 9.631-.397 4.974 1.64 11.43 4.313 13.97 1.19 1.111 2.593 1.138 3.492 1.138 3.123 0 4.525-2.593 6.086-5.662C58.48 85.997 60.2 81.63 60.2 81.63s-2.143 11.8 3.677 11.8c2.117 0 4.26-2.751 5.213-4.154v.027s.053-.08.158-.265c.212-.344.344-.555.344-.555v-.053c.847-1.482 2.752-4.842 5.583-10.425 3.651-7.196 7.17-16.192 7.17-16.192s.318 2.196 1.403 5.847c.635 2.143 1.957 4.498 3.016 6.773-.847 1.191-1.376 1.852-1.376 1.852l.026.027c-.687.9-1.428 1.878-2.248 2.831-2.884 3.44-6.324 7.382-6.8 8.52-.556 1.349-.424 2.328.635 3.122.767.582 2.143.661 3.545.582 2.593-.185 4.419-.82 5.318-1.217 1.403-.503 3.043-1.27 4.578-2.408 2.83-2.09 4.55-5.08 4.392-9.022-.08-2.17-.794-4.34-1.667-6.377.264-.37.502-.74.767-1.111 4.472-6.535 7.938-13.706 7.938-13.706s.317 2.197 1.402 5.848c.529 1.852 1.614 3.863 2.566 5.82-4.207 3.414-6.8 7.383-7.726 9.975-1.666 4.816-.37 6.985 2.09 7.488 1.112.238 2.7-.29 3.864-.794a17.596 17.596 0 0 0 4.894-2.513c2.831-2.09 5.557-5 5.398-8.943-.08-1.8-.556-3.572-1.217-5.292 3.572-1.481 8.175-2.302 14.05-1.614 12.593 1.482 15.08 9.34 14.604 12.647-.476 3.308-3.122 5.107-3.995 5.662-.873.556-1.164.741-1.085 1.138.106.582.53.556 1.27.45 1.032-.185 6.615-2.672 6.853-8.758.397-7.778-7.012-16.272-20.108-16.192zM27.577 95.204c-4.18 4.55-10.002 6.27-12.515 4.815-2.699-1.56-1.64-8.281 3.492-13.096 3.122-2.937 7.144-5.663 9.816-7.33.609-.37 1.508-.899 2.593-1.56.185-.106.291-.16.291-.16.212-.131.424-.264.635-.396 1.879 6.88.08 12.938-4.312 17.727zm30.427-20.69c-1.456 3.545-4.498 12.62-6.35 12.118-1.588-.424-2.567-7.303-.318-14.103 1.138-3.413 3.546-7.487 4.948-9.075 2.275-2.54 4.789-3.387 5.397-2.355.768 1.35-2.778 11.192-3.677 13.415zm25.109 12.012c-.609.317-1.191.529-1.456.37-.185-.106.265-.53.265-.53s3.149-3.386 4.392-4.92c.714-.9 1.561-1.958 2.46-3.149v.344c0 4.048-3.915 6.773-5.661 7.885zm19.367-4.419c-.45-.317-.37-1.376 1.138-4.683.582-1.296 1.958-3.466 4.313-5.556.264.846.45 1.667.423 2.434-.027 5.106-3.678 7.011-5.874 7.805z" fill="#cd6799"/>
</svg>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "svgSass",
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

  $aspectRatio: 547.284/410.58;
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
    transform: translate($scalingPivotX, $scalingPivotY) scale(calc(var(--imgScale) * 0.8)) rotate(var(--imgRotate));
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
