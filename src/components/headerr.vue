<template>
  <header>
    <nav>
      <div class="headerMenuCtnr">
        <input type="checkbox" id="headerMenuInput" v-model="headerMenuVisibleButtonInputChecked">
        <!-- .<Label> and <input> here is for collapsable nav, for mobile screen. -->
        <ul>
          <li class="nav-item" :class="{'active': crrRouteName === 'resume' || crrRouteName === 'siteRoot'}">
            <a class="nav-link" @click.prevent.stop="goToroute('resume')">履歷</a>
          </li>
          <li class="nav-item" :class="{'active': crrRouteName === 'portfolio'}">
            <a class="nav-link" @click.prevent.stop="goToroute('portfolio')">作品集</a>
          </li>
          <li class="nav-item" :class="{'active': crrRouteName === 'aboutMe'}">
            <a class="nav-link" @click.prevent.stop="goToroute('aboutMe')">關於我</a>
          </li>
          <li class="nav-item" :class="{'active': crrRouteName === 'contact'}">
            <a class="nav-link" @click.prevent.stop="jumpToFooter()">聯絡</a>
          </li>
        </ul>
        <label for="headerMenuInput"><!--
          --><div class="visibleButton"><!--
            --><div class="theThickLine"></div><!--
          --></div><!--
        --></label>
      </div>
    </nav>
  </header>
</template>

<script>
import jquery from "jquery";

export default {
  name: 'headerr',
  props: {
  },
  data () {
    return {
      crrRouteName: null,
      headerMenuVisibleButtonInputChecked: false,
    };
  },
  mounted () {
    this.setCrrRouteName();
  },
  methods: {
    setCrrRouteName () {
      this.crrRouteName = this.$route.name;
    },
    jumpToFooter () {
      this.headerMenuVisibleButtonInputChecked = false;
      let footer = jquery("footer");
      jquery('html, body').animate(
        {
          scrollTop: (footer.offset().top - (jquery(window).height() - footer.height())),
        },
        600
      );
    },
    goToroute (name) {
      this.headerMenuVisibleButtonInputChecked = false;
      this.$router.push({name: name});
    }
  },
  watch: {
    $route () {
      // .If route changed.
      this.setCrrRouteName();
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";
  @import "@/style/headerMenu.scss";

  $clorGreyDark_insideText: hsl(0deg, 0%, $clorGreyDarkLgtn + 18%);
  // .Close to #797979;

  header {
  }
  nav {
    background-color: #4b4b4b;
    padding-top: $spaceS3;
    padding-bottom: $spaceS3;
    
    & ul {
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      grid-auto-flow: column;
      align-items: center;
      margin: 0;
      padding: 0;
    }
    & li {
      margin: 0;
      margin-left: calc(#{$spaceS5} + #{$spaceS3});
      padding: 0;
      position: relative;
    }
    & li:before {
      // .About: Making little "spotlight" visual element.
      position: absolute;
      content: "";

      // .Should sync with each other.
      // ==============================
      top: calc(50% - (1.7em / 2));
      left: -0.3em;
      width: 1.7em;
      height: 1.7em;
      // ==============================

      border-radius: 50%;
      background-color: $clorPrimary;
      opacity: 0;
      transition: all
    }
    & li.active:before {
      // .About: Set transition on { .active }.
      opacity: 1;
      transition-property: opacity;
      transition-delay: 0.2s;
      transition-duration: 0.6s;
    }
    & a {
      position: relative;
      // .To prevent { nav li:before } ,, background-color overlapping <a>.
      cursor: pointer;
      // .Fix some problem after changing making <a> to use { @click.prevent.stop="..."}.
    }
    & li.active a {
      color: white;
    }
    & a,
    & a:link,
    & a:visited,
    & a:hover,
    & a:active,
    & a:link {
      color: $clorGreyDark_insideText;
      text-decoration: none;
      outline: 0;
    }
  }
</style>
