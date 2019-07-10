<template>
  <div class="portfolio">
    <section class="secInfoPlate">
      <div class="infoPlateCtnr_width">
        <div class="infoPlateCtnr_padding">
          <div class="infoPlateCtnr_absolute">
            <div class="infoPlate">
              <div class="ptfoContent">
                <div class="scrollText_overflow">
                  <div class="scrollText_flex">
                    <div class="scrollText_main">
                      <h3 class="title">
                        <i>{{ myProjects[crrInfoPlate.projectIdx].projectName }}</i>
                      </h3>
                      <div class="content">
                        <i class="defaultText">{{ myProjects[crrInfoPlate.projectIdx].excerpt }}</i>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btnMore withbgColor" @click="openModal">更多</button>
                <button class="btnBrowse withbgColor" @click="goToLink_project">網址</button>
              </div>
              <div class="ptfoContentBg">
              </div>
              <div class="myProjectImageFirst" :style="{'background-image': crrInfoPlate.style}">
              </div>
            </div>
            <div class="navBtnCtnr">
              <div class="btn btnPrev" @click="shiftInfoPlateProject(-1)">
                <arrowThick></arrowThick>
              </div>
              <div class="btn btnNext" @click="shiftInfoPlateProject(1)">
                <arrowThick></arrowThick>
              </div>
            </div>
            <!-- .{ .navBtnCtnr } is child of { .infoPlateCtnr_absolute },
            not { .infoPlate }! -->
            <div class="infoPlateBgEcho one">
              <div class="infoPlateBgEcho two">
                <div class="infoPlateBgEcho three">
                  <div class="infoPlateBgEcho four">
                  </div>
                </div>
              </div>
            </div>
            <!-- .{ .infoPlateBgEcho } is child of { .infoPlateCtnr_absolute },
            not { .infoPlate }! -->
          </div>
        </div>
      </div>
    </section>
    <section class="secGraphicDesign">
      <div class="headingImgCtnr">
        <eyedrop></eyedrop>
        <h3 class="heading"><i>平面設計<br>(2015)</i></h3>
      </div>
      <button @click="goToLink">瀏覽 2015 的平面設計</button>
    </section>
    <infoPlateModal
      :ifShowModal="ifShowModal"
      :myProjects="myProjects"
      :projectIdx="crrInfoPlate.projectIdx"
      @modalHasClosed="closeModal"
      @shiftInfoPlateProject_child="shiftInfoPlateProject($event)"
    ></infoPlateModal>
  </div>
</template>

<script>
import infoPlateModal from "@/components/infoPlateModal.vue";
import arrowThick from "@/components/svg/arrowThick.vue";
import eyedrop from "@/components/svg/eyedrop.vue";

export default {
  name: 'portfolio',
  components: {
    infoPlateModal,
    arrowThick,
    eyedrop,
  },
  props: {
  },
  data () {
    return {
      crrInfoPlate: {
        style: "none",
        projectIdx: 0,
        screenShotIdx: 0,
        autoPlayInterval: 2800,
      },
      ifShowModal: false,
      myProjects: [
        {
          projectId: "doggo",
          projectName: "Doggo",
          excerpt: "猜猜看這是什麼狗 (品種)。這是我學 vue 後第一個做的個人專案。",
          about: "Doggo 是一個小遊戲。每個回合遊戲會餵給你一張狗的圖片，你要選擇這隻狗的正確品種名稱。遊戲過程中你都可以使用 \"作弊提醒\"，但隨著作弊次數的增加，之後的回合會變得愈來愈難 (因為選項增加了)。遊戲結束後會提供你分數和統計資訊。",
          usingSkills: [
            {
              skillId: "vue",
              skillName: "Vue",
              content: "這是我學 vue 後第一個做的個人專案，這個專案使用 Vue 達到網頁元素的動態 顯示/消失 效果，以及管理遊戲的狀態。狀態透過 Props 和 Emit 在不同元件 (components) 之間互相傳遞。遊戲結束後會提供你分數和統計資訊，但是實際上這些資訊狀態是動態更新的，你在遊戲的過程中隨時都可以切換到 Score (分數) 的頁面查看。"
            },
            {
              skillId: "javascript",
              skillName: "Javascript",
              content: "使用到 API (Fetch API) 和 Async (Promise) 的部份，去 request \"Dog API\" 的 JSON 資料 (包括圖片網址)。還有例如遊戲的邏輯部份例如作弊懲罰的量和持續作用時效，場景 (狀態) 載入的先後順序。"
            },
            {
              skillId: "css",
              skillName: "Css",
              content: "排版和定位，CSS transition 的部份。"
            },
          ],
          screenShots: [
            "chose-game-mode_1.jpg",
            "chose-game-mode_2.jpg",
            "game-mode_guess-the-breed_2.jpg",
            "game-mode_guess-the-breed_3.jpg",
            "check-your-score_1.jpg",
            "check-your-score_2.jpg",
            "check-your-score_3.jpg",
            "help.jpg",
          ],
          link: "https://treegb.github.io/doggo/",
        },
        {
          projectId: "myResumeSite",
          projectName: "履歷網頁 (2019)",
          excerpt: "目前您所看到的這個履歷網頁。用來展示我的履歷，和作品集 (2019)。",
          about: "即使是這樣一個純粹展示個人資訊的履歷網頁，我從思考視覺設計的概念，到粗糙的 Wireframe 圖，到 RWD 設計，製作的過程我持續學習了不同類型的知識，也開始慢慢讓自己更熟練製作網頁，提昇完成專案的速度。",
          usingSkills: [
            {
              skillId: "rwd",
              skillName: "RWD 響應式網頁設計",
              content: "想辦法讓所有視覺效果，能從寬螢幕到手機，都合理的呈現。在做這個網頁的過程，我遇到了很多之前沒遇到的問題，了解到響應式設計的複雜性，以及嘗試去把他做出來。"
            },
            {
              skillId: "svg",
              skillName: "SVG",
              content: "所有 svg 圖片都是一個 Vue component，這樣在代碼的管理上，以及顏色，大小，定位這些參數上，能夠一致的管理。"
            },
            {
              skillId: "sass",
              skillName: "SASS",
              content: "主要是使用 Sass variable 和 CSS variable 管理樣式 (style)，方便未來的變動 (比如主題顏色)。"
            },
            {
              skillId: "vue",
              skillName: "Vue",
              content: "作品集頁面的專案圖片，是跟 Vue 裡面的 Data 相接的。目前這邊所顯示的資訊也都是把 Vue 裡面的 Data 帶進 template 裡面，而不是直接寫死在 HTML 上。Child component (Modal, 即彈跳視窗) 也共享這些資料的操作，狀態的修改，達到 2 個 component 之間同步的效果。"
            },
            {
              skillId: "javascript",
              skillName: "Javascript",
              content: "作品集頁面的專案圖片，的輪動效果，是跟 Vue 裡面的 Data 相接的。另外在 Modal (彈跳視窗) 的狀態的好幾個時間點的控制 (先後順序)，也是需要計算的。"
            },
          ],
          screenShots: [
            "resume_desktop_1.jpg",
            "resume_desktop_2.jpg",
            "resume_mobile_1.jpg",
            "resume_mobile_2.jpg",
            "resume_mobile_3.jpg",
            "resume_mobile_4.jpg",
            "portfolio_desktop_1.jpg",
            "portfolio_desktop_2.jpg",
            "portfolio_mobile_1.jpg",
            "portfolio_mobile_2.jpg",
            "portfolio_mobile_3.jpg",
            "portfolio_modal_desktop_1.jpg",
            "portfolio_modal_mobile_1.jpg",
            "purple_1.jpg",
            "purple_2.jpg",
            "purple_3.jpg",
            "purple_4.jpg",
          ],
          link: "https://www.example.org/",
        },
        {
          projectId: "thirtyXThirtyLifetimeTable",
          projectName: "30x30 生命表 (2017)",
          excerpt: "人的一生其實很短暫，算算看也才不過 30x30 個月 (900)。",
          about: "2017 的作品。人的一生其實很短暫，算算看也才不過 30x30 個月 (900)。做這個專案的目的之一是，提醒我自己要把握時間。",
          usingSkills: [
            {
              skillId: "javascript",
              skillName: "Javascript",
              content: "主要是用在日期的計算，以及 DOM 的操作 (新增)。我當時沒想到日期的計算會比我想像中的複雜。不知道可以用 library 像是 Moment.js。沒注意到效能的問題。"
            },
          ],
          screenShots: [
            "1.jpg",
            "2.jpg",
            "3.jpg",
            "4.jpg",
          ],
          link: "https://treegb.github.io/treegb/page/170306_180946.html",
        },
      ],
      intervalId: null,
      linkOf2015GraphicDesign: "https://flic.kr/s/aHsmfr6WGP",
    };
  },
  mounted () {
    this.setupData();
  },
  methods: {
    closeModal() {
      this.ifShowModal = false;
    },
    getArrayNextIndex (arraySize, crrIdx, shiftDirection) {
      // .Pure function, regarding any array (array size is { arraySize }),
      // shift to (base on { shiftDirection }) and get the next or previous index
      // (based on [ current ]-[ given ] index) { crrIdx }).
      if (shiftDirection === 1) {
        return (crrIdx >= arraySize - 1) ? 0 : crrIdx + 1;
      }
      if (shiftDirection === -1) {
        return (crrIdx <= 0) ? arraySize - 1 : crrIdx - 1;
      }
      return null;
    },
    getMyProjectsSize () {
      return this.myProjects.length;
    },
    getScreenShotsSize (projectIdx) {
      return this.myProjects[projectIdx].screenShots.length;
    },
    goToLink () {
      window.open(this.linkOf2015GraphicDesign, "_blank");
    },
    goToLink_project () {
      window.open(this.myProjects[this.crrInfoPlate.projectIdx].link, "_blank");
    },
    openModal () {
      this.ifShowModal = true;
    },
    setupData () {
      this.setInfoPlateImage({projectIdx: 0, screenShotIdx: 0});
      this.setInfoPlateImageAutoPlay();
    },
    setInfoPlateImage (
      {
        projectIdx = 0,
        screenShotIdx = 0,
        shiftProjectIdx = 0,
        shiftscreenShotIdx = 0,
      } = {}
    ) {
      // .Notice, you have only 3 ways to manipulate the state
      // ({ projectIdx} and { screenShotIdx}).
      // 1. Use both { projectIdx } and { screenShotIdx } (specify manually).
      // 2. Use only { shiftProjectIdx } (shift automatically).
      // 3. Use only { shiftscreenShotIdx } (shift automatically).
      let projectId = null;
      let assetTail = null;
      let assetRequired = null;
      let newProjectIdx = null;
      let newScreenShotIdx = null;
      function setState () {
        //console.log(this);
        projectId = this.myProjects[newProjectIdx].projectId;
        assetTail = this.myProjects[newProjectIdx].screenShots[newScreenShotIdx];
        assetRequired = require(`@/assets/myProjectScreenshot/${projectId}/${assetTail}`);
        this.crrInfoPlate.projectIdx = newProjectIdx;
        this.crrInfoPlate.screenShotIdx = newScreenShotIdx;
        this.crrInfoPlate.style = `url('${assetRequired}')`;
      }

      if (shiftProjectIdx === 1 || shiftProjectIdx === -1) {
        newProjectIdx = this.getArrayNextIndex(
          this.getMyProjectsSize(),
          this.crrInfoPlate.projectIdx,
          shiftProjectIdx
        );
        newScreenShotIdx = 0;
        // .Always on first screenshot image.
        setState.call(this);
        return;
      }
      if (shiftscreenShotIdx === 1 || shiftscreenShotIdx === -1) {
        newProjectIdx = this.crrInfoPlate.projectIdx;
        newScreenShotIdx = this.getArrayNextIndex(
          this.getScreenShotsSize(this.crrInfoPlate.projectIdx),
          this.crrInfoPlate.screenShotIdx,
          shiftscreenShotIdx
        );
        setState.call(this);
        return;
      }
      newProjectIdx = projectIdx;
      newScreenShotIdx = screenShotIdx;
      setState.call(this);
    },
    setInfoPlateImageAutoPlay () {
      let that = this;
      this.intervalId = setInterval(() => {
        that.setInfoPlateImage({shiftscreenShotIdx: 1});
      }, this.crrInfoPlate.autoPlayInterval);
    },
    shiftInfoPlateProject (shiftDirection) {
      this.unsetInfoPlateImageAutoPlay();
      this.setInfoPlateImage({shiftProjectIdx: shiftDirection});
      this.setInfoPlateImageAutoPlay();
    },
    unsetInfoPlateImageAutoPlay () {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  },
  watch: {
  },
  beforeDestroy () {
    this.unsetInfoPlateImageAutoPlay();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";
  @import "@/style/secInfoPlate.scss";

  // .Roughly in same concern.
  // ---------------------
  section {
    --sectionMarginTopBtm: 16em;
    background-color: hsl(0deg, 0%, ($clorGreyBrightLgtn + 10%));
    margin-left: calc(var(--mainElmPaddingLftRgt) * -1);
    margin-right: calc(var(--mainElmPaddingLftRgt) * -1);
    padding: $spaceS6 var(--mainElmPaddingLftRgt);
  }
  .secGraphicDesign {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-evenly;
    justify-items: center;
    align-items: center;
    grid-gap: 4em;
    margin-top: calc(var(--sectionMarginTopBtm) + 0em;);
    margin-bottom: calc(var(--sectionMarginTopBtm) * 0.5);
  }
  .secGraphicDesign .headingImgCtnr {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18em;
    height: 18em;
  }
  .secGraphicDesign .eyedrop {
    top: 50%;
    left: 50%;
    width: 100%;
  }
  .secGraphicDesign .headingImgCtnr .heading {
    z-index: 1;
    color: white;
    transform: translateX(0.5em);
    text-align: center;
  }
  .secGraphicDesign .headingImgCtnr h3.heading {
    font-size: 1em;
    // ."Unset" font-size of h3;
  }
  .secGraphicDesign .headingImgCtnr .heading i {
    font-size: 1.4em;
    font-weight: 300;
  }

  // .Roughly in same concern.
  // ---------------------
  @mixin sectionBgGradient ($hue, $ifReverseDirection: 0) {
    $sectionBgGradientRotate: -40deg;
    // .In this system (@mixin { sectionBgGradient }), the "0deg" means start from
    // "west to east" direction.
    $partDeg: '';

    @if ($ifReverseDirection == 1) {
      $partDeg: calc(90deg + #{$sectionBgGradientRotate} + 180deg),
    } @else {
      $partDeg: calc(90deg + #{$sectionBgGradientRotate}),
    }
    background-image: linear-gradient(
      #{$partDeg},
      hsl($hue, 85%, 70%) 0%,
      hsl($hue, 54%, 83%) 7%,
      hsl($hue, 30%, 83%) 25%,
      hsl($hue, 7%, 83%) 50%,
      hsl($hue, 0%, 83%) 80%
    );
  }
  section:nth-of-type(1) {
    @include sectionBgGradient($clorPrimaryHue, 1);
  }
  section:nth-of-type(2) {
    @include sectionBgGradient($clorPrimaryHue);
  }

  @media screen and (max-width: $screenMdWidth) {
    section {
      --sectionMarginTopBtm: 10em;
    }

    .secGraphicDesign {
      grid-template-columns: 1fr;
    }
  }
</style>
