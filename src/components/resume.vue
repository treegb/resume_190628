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
          <i class="defaultText defaultTextColor">大同大學 工業設計系 (2009 ~ 2013)。</i>
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
              <SvgGo></SvgGo>
            </template>
            <template v-slot:contentTitle>
              圍棋人科技股份有限公司 2019/07 ~ 2019/12
            </template>
            <template v-slot:contentText>
              切板，Vue 框架組件製作，前端功能/邏輯，API 串接。
            </template>
          </resumeSectionSubContent>
          <resumeSectionSubContent>
            <template v-slot:image>
              <circuitBoard></circuitBoard>
            </template>
            <template v-slot:contentTitle>
              東元電機家電事業部觀音廠 2018/03 ~ 2019/01
            </template>
            <template v-slot:contentText>
              生產線上的作業員。對專業技能沒有幫助，但影響人格養成。
            </template>
          </resumeSectionSubContent>
          <resumeSectionSubContent>
            <template v-slot:image>
              <rain></rain>
            </template>
            <template v-slot:contentTitle>
              高夫貝爾國際有限公司 2015/01 ~ 2016/08
            </template>
            <template v-slot:contentText>
              產品概念設計，平面設計，Logo 配色，產品攝影。
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
              RWD 響應式網頁設計。知道 Flex 和 Grid layout 的使用時機。有無障礙 (accessibility) 網頁的基本知識。
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
              理解非同步 Async 的設計。了解一些良好代碼常使用的慣例像是 "SOLID" 的 "單一職責原則"。對於 Functional  Programming (.map(),  .filter() ... ) 有基本的認識。
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
              知道狀態管理  (vuex)  的使用時機。對於 reactivity  (computed,  vuex  getters,  slot) 的優勢有基本的認識。使用 Vue Router 管理 views。理解 REST API 的基本規範，並與後端做 API 串接。
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
              使用 Sass variable 和 CSS variable 管理樣式，方便未來的變動。使用 Sass Mixin 和 helper function (e.g. scale-color()) 來管理樣式。
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
              有 Element Ui 和 Bootstrap 使用經驗。了解 Bootstrap Grid layout。知道如何使用 Bootstrap 常用組件快速完成樣式和功能，像是 form (input)，modal，navbar。配合 Font Awesome 使用 icon font。
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
              使用 Git 與團隊進行開發。
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
import SvgGo from "@/components/svg/SvgGo.vue"
import circuitBoard from "@/components/svg/circuitBoard.vue"
import rain from "@/components/svg/rain.vue"
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
    SvgGo,
    circuitBoard,
    rain,
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
