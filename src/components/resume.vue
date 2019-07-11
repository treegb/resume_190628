<template>
  <div class="resume">
    <resumeTitle></resumeTitle>
    <section>
      <resumeSectionHeading
        :title="'學歷'"
        :subtitle="'01'"
        :oddOrEvenDirection="'odd'"
      ></resumeSectionHeading>
      <resumeSectionContent>
        <template v-slot:default>
          <i class="defaultText defaultTextColor">大同大學 工業設計系 2009 ~ 2013。</i>
        </template>
      </resumeSectionContent>
    </section>
    <section>
      <resumeSectionHeading
        :title="'工作經歷'"
        :subtitle="'02'"
        :oddOrEvenDirection="'even'"
      ></resumeSectionHeading>
      <resumeSectionContent>
        <template v-slot:default>
          <resumeSectionSubContent>
            <template v-slot:image>
              <rain></rain>
            </template>
            <template v-slot:contentTitle>
              2015 ~ 2016 高夫貝爾國際有限公司
            </template>
            <template v-slot:contentText>
              產品概念設計，平面設計，Logo 配色，產品攝影。
            </template>
          </resumeSectionSubContent>
          <resumeSectionSubContent>
            <template v-slot:image>
              <circuitBoard></circuitBoard>
            </template>
            <template v-slot:contentTitle>
              2018 ~ 2019 東元電機家電事業部觀音場
            </template>
            <template v-slot:contentText>
              生產線上的作業員。
            </template>
          </resumeSectionSubContent>
        </template>
      </resumeSectionContent>
    </section>
    <section>
      <resumeSectionHeading
        :title="'專長'"
        :subtitle="'03'"
        :oddOrEvenDirection="'odd'"
      ></resumeSectionHeading>
      <resumeSectionContent>
        <template v-slot:default>
          <resumeSectionSubContent>
            <template v-slot:image>
              <svgHtml></svgHtml>
            </template>
            <template v-slot:contentTitle>
              HTML/CSS
            </template>
            <template v-slot:contentText>
              RWD 響應式網頁設計。
            </template>
          </resumeSectionSubContent>
          <resumeSectionSubContent>
            <template v-slot:image>
              <svgJquery></svgJquery>
            </template>
            <template v-slot:contentTitle>
              Javascript
            </template>
            <template v-slot:contentText>
              非同步 Async 的設計，JQuery, 操作 DOM， 模組 (ES module)。了解一些良好代碼常使用的慣例像是 "SOLID" 的 "單一職責原則"。
            </template>
          </resumeSectionSubContent>
          <resumeSectionSubContent>
            <template v-slot:image>
              <svgVue></svgVue>
            </template>
            <template v-slot:contentTitle>
              Vue.js
            </template>
            <template v-slot:contentText>
              會使用基本的 Vue Router, Slot。理解 REST API 的基本規範，並能用 Fetch API 對 JSON API 做出基本 CRUD 應用。閱讀過實際上線的 Vue project 的代碼 (但只有非常少量參與協作)。
            </template>
          </resumeSectionSubContent>
          <resumeSectionSubContent>
            <template v-slot:image>
              <svgSass></svgSass>
            </template>
            <template v-slot:contentTitle>
              Sass
            </template>
            <template v-slot:contentText>
              了解如何基本使用 Sass variable 和 CSS variable 管理樣式 (style)，方便未來的變動。只使用過少數的 Mixin。
            </template>
          </resumeSectionSubContent>
          <resumeSectionSubContent>
            <template v-slot:image>
              <svgBootstrap></svgBootstrap>
            </template>
            <template v-slot:contentTitle>
              Bootstrap
            </template>
            <template v-slot:contentText>
              了解基本的 Bootstrap Grid layout。使用 Bootstrap 元件快速完成樣式和功能，像是 form (input)，modal，navbar。配合 Font Awesome 使用 icon font。
            </template>
          </resumeSectionSubContent>
          <resumeSectionSubContent>
            <template v-slot:image>
              <github></github>
            </template>
            <template v-slot:contentTitle>
              Git
            </template>
            <template v-slot:contentText>
              能透過 Pull Request 的方式與對方進行基本的協作。
            </template>
          </resumeSectionSubContent>
          <resumeSectionSubContent>
            <template v-slot:image>
              <svgNodejs></svgNodejs>
            </template>
            <template v-slot:contentTitle>
              Node.js
            </template>
            <template v-slot:contentText>
              使用 Express.js, Vue.js, MongoDB 實作出基本的 CRUD 應用 (APP)。
            </template>
          </resumeSectionSubContent>
        </template>
      </resumeSectionContent>
    </section>
  </div>
</template>

<script>
import resumeTitle from "@/components/resumeTitle.vue"
import resumeSectionHeading from "@/components/resumeSectionHeading.vue"
import resumeSectionContent from "@/components/resumeSectionContent.vue"
import resumeSectionSubContent from "@/components/resumeSectionSubContent.vue"
import rain from "@/components/svg/rain.vue"
import circuitBoard from "@/components/svg/circuitBoard.vue"
import svgHtml from "@/components/svg/svgHtml.vue"
import svgJquery from "@/components/svg/svgJquery.vue"
import svgNodejs from "@/components/svg/svgNodejs.vue"
import svgVue from "@/components/svg/svgVue.vue"
import svgSass from "@/components/svg/svgSass.vue"
import svgBootstrap from "@/components/svg/svgBootstrap.vue"
import github from "@/components/svg/github.vue"

export default {
  name: 'resume',
  components: {
    resumeTitle,
    resumeSectionHeading,
    resumeSectionContent,
    resumeSectionSubContent,
    rain,
    circuitBoard,
    svgHtml,
    svgJquery,
    svgVue,
    svgSass,
    svgBootstrap,
    svgNodejs,
    github,
  },
  props: {
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

  section {
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin-top: $spaceS8;
        //border: 1px solid red;
  }
  section:first-of-type {
    margin-top: $spaceS7;
  }
  section:last-of-type {
    margin-bottom: $spaceS7;
  }
  .resumeSectionHeading {
    justify-self: end;
  }
  .resumeSectionContent {
    justify-self: start;
      //border: 3px solid blue;
  }

  @media screen and (max-width: $screenLgWidth) {
    section {
      grid-template-columns: 1fr;
      grid-row-gap: $spaceS6;
    }
    .resumeSectionHeading {
      justify-self: center;
    }
    .resumeSectionContent {
      justify-self: center;
    }
  }
  @media screen and (max-width: $screenMdWidth) {
    section:first-of-type {
      margin-top: $spaceS5;
    }
  }
</style>
