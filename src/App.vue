<template>
  <div id="app">
    <headerr></headerr>
    <main class="col-md">
      <router-view></router-view>
    </main>
    <footerr></footerr>
  </div>
</template>

<script>
import headerr from "@/components/headerr.vue";
import footerr from "@/components/footerr.vue";

export default {
  name: 'app',
  components: {
    headerr,
    footerr,
  }
}
</script>

<style lang="scss">
  html {
    overflow-x: hidden;
    // .To fix "overflow not working on body on mobile" issue, see:
    // https://stackoverflow.com/questions/41506456/why-body-overflow-not-working
    // https://www.douban.com/note/561975262/
    // .Also see comment id 190713m090952.
        //border: 3px solid blue;
  }
  body {
    //font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    // .To make body center aligned, since { max-width: 1500px } is set.
    padding: 0;
    font-family: 'Noto Sans TC', sans-serif;
    overflow-x: hidden;
    // .Also see comment id 190713m090952.
    max-width: 1500px;
        //border: 3px solid yellow
  }
</style>

<style scoped lang="scss">
  @import "@/style/base.scss";

  #app {
    display: grid;
    grid-template-rows: auto auto 1fr;
    min-height: 100vh;
    // .For sticky footer.
  }
  header {
    z-index: 5;
    // .Makes it don't be overlapped by footer, and other things.
    // Set to "2" will works property, but I still want to make it higher.
  }
  main {
    --mainElmPaddingTopBtm: #{$spaceS5};
    --mainElmPaddingLftRgt: #{$spaceS4};
    padding: var(--mainElmPaddingTopBtm) var(--mainElmPaddingLftRgt);
  }

  @media screen and (max-width: $screenMdWidth) {
    main {
      --mainElmPaddingLftRgt: #{$spaceS3};
    }
  }
</style>
