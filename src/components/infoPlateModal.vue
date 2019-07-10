<template>
  <div
    :class="['infoPlateModal', {isVisible: ifVisible, hasOpacity: ifHasOpacity}]"
    :style="{transition: `opacity ${time.opacityTransition}ms`}"
  >
    <div class="centerAndOverflowCtnr" :ref="'centerAndOverflowCtnr'">
      <div class="maxWidthFlexCtnr">
        <div class="modalMainArea">
          <div class="headingCtnr">
            <div class="heading">
              <i>{{ myProjects[projectIdx].projectName }}</i>
            </div>
            <div class="closeBtn" @click="closeModal">
            </div>
          </div>
          <div class="navCtnr">
            <div
              :class="['navItem', 'about', {active: activeNav === 'about'}]"
              @click="toggleNav('about')"
            ><i>關於</i></div>
            <div
              :class="['navItem', 'images', {active: activeNav === 'images'}]"
              @click="toggleNav('images')"
            ><i>圖片</i></div>
            <div
              :class="['navItem', 'usedSkills', {active: activeNav === 'usedSkills'}]"
              @click="toggleNav('usedSkills')"
            ><i>使用能力</i></div>
          </div>
          <div class="tabContent">
            <div class="about" v-show="activeNav === 'about'">
              <i class="defaultText defaultTextColor">{{ myProjects[projectIdx].about }}</i>
            </div>
            <div class="usedSkills" v-show="activeNav === 'usedSkills'">
              <template v-for="skill of myProjects[projectIdx].usingSkills">
                <div class="title" :key="skill.skillId + 'title'"><i>{{ skill.skillName}}</i></div>
                <div class="content" :key="skill.skillId + 'content'"><i class="defaultText defaultTextColor">{{ skill.content}}</i></div>
              </template>
            </div>
            <div class="images" v-show="activeNav === 'images'">
              <template v-for="(screenShot, key) of myProjects[projectIdx].screenShots">
                <div class="decorationElm" :key="`decorationElm_${screenShot}`">
                  <div class="line lineLeft"></div>
                  <div class="dot"></div>
                  <div class="line lineRight"></div>
                </div>
                <div class="imageCtnr" :key="`imageCtnr_${screenShot}`">
                  <img :src="getImageAssetPath(projectIdx, key)" :alt="screenShot">
                </div>
              </template>
            </div>
          </div>
          <div class="btnCtnr">
            <div class="btn btnPrev" @click="shiftInfoPlateProject(-1)">
              <arrowThick></arrowThick>
            </div>
            <div class="btn btnNext" @click="shiftInfoPlateProject(1)">
              <arrowThick></arrowThick>
            </div>
            <button @click="closeModal">返回</button>
          </div>
        </div>
      </div>
    </div>
    <div class="backdrop" @click="closeModal">
    </div>
  </div>
</template>

<script>
import arrowThick from "@/components/svg/arrowThick.vue"
import jquery from "jquery";

export default {
  name: 'infoPlateModal',
  components: {
    arrowThick,
  },
  props: [
    "ifShowModal",
    "myProjects",
    "projectIdx",
  ],
  data () {
    return {
      activeNav: "about",
      ifVisible: false,
      ifHasOpacity: false,
      ifStillInTransition: false,
      time: {
        // .Units ,, "ms".
        toSetVisible: 0,
        toSetOpacity: 30,
        opacityTransition: 1000,
      },
    };
  },
  mounted () {
  },
  methods: {
    async closeModal () {
      if (this.ifStillInTransition === true) {
        return;
      }
      this.ifStillInTransition = true;
      await this.setTimoutPromise(
        function () {
          this.ifHasOpacity = false;
        }.bind(this),
        0
      );
      await this.setTimoutPromise(
        function () {
          // .Do nothing.
        }.bind(this),
        this.time.opacityTransition
      );
      await this.setTimoutPromise(
        function () {
          this.ifVisible = false;
          this.ifStillInTransition = false;
          this.$emit("modalHasClosed");
        }.bind(this),
        this.time.toSetOpacity
      );
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
    getImageAssetPath (projectIdx, screenShotIdx) {
      let projectId = this.myProjects[projectIdx].projectId;
      let assetTail = this.myProjects[projectIdx].screenShots[screenShotIdx];
      let assetRequired = require(`@/assets/myProjectScreenshot/${projectId}/${assetTail}`);
      return assetRequired;
    },
    getMyProjectsSize () {
      return this.myProjects.length;
    },
    getScreenShotsSize (projectIdx) {
      return this.myProjects[projectIdx].screenShots.length;
    },
    async openModal () {
      if (this.ifStillInTransition === true) {
        return;
      }
      this.ifStillInTransition = true;
      await this.setTimoutPromise(
        function () {
          this.ifVisible = true;
        }.bind(this),
        this.time.toSetVisible
      );
      await this.setTimoutPromise(
        function () {
          this.ifHasOpacity = true;
        }.bind(this),
        this.time.toSetOpacity
      );
      await this.setTimoutPromise(
        function () {
          this.ifStillInTransition = false;
        }.bind(this),
        this.time.opacityTransition
      );
    },
    scrollToTop () {
      let centerAndOverflowCtnr = this.$refs.centerAndOverflowCtnr;
      jquery(centerAndOverflowCtnr).animate(
        {scrollTop: 0},
        "slow"
      );
      //jquery(centerAndOverflowCtnr).scrollTop(0);
    },
    setTimoutPromise (callbackWithBound, delay) {
      // .Purpose: Return a pending Promise immediately, and after a { delay } time (ms),
      // invoke { callbackWithBound }, then resolve this Promise.
      return new Promise((resolve /*, reject*/) => {
        setTimeout(function () {
          callbackWithBound();
          resolve();
        }, delay);
      });
    },
    shiftInfoPlateProject (shiftProjectIdx) {
      this.$emit("shiftInfoPlateProject_child", shiftProjectIdx);
      this.scrollToTop();
    },
    toggleNav(nav) {
      this.activeNav = nav;
    },
  },
  watch: {
    ifShowModal (newVal, oldVal) {
      if (newVal === true && oldVal === false) {
        this.openModal();
      }
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";

  // .Roughly in same concern.
  // -------------------------
  .infoPlateModal {
    --modalMainArea_minWidth: 30em;
    --maxWidthFlexCtnr_maxWidth: 45em;
    position: fixed;
    z-index: 4;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
        //border: 5px solid yellow;
  }
  .centerAndOverflowCtnr {
    // .Purpose: 2 purpose - 1. Prevent inner element exceed over
    // max-width and max-height 2. If overflow, bring up scroll bar.
    --centerAndOverflowCtnr_bgClor: white;
    max-width: 85%;
    max-height: 85%;
    overflow-y: auto;
    overflow-x: auto;
    background-color: var(--centerAndOverflowCtnr_bgClor);
    border-radius: 0.7em;
    border: 0.5em solid var(--centerAndOverflowCtnr_bgClor);
    // .Since I can't use padding (since this is an overflow element), I will
    // workaround and use a thick border which having same color with background instead.
        //border: 3px solid red;
        box-shadow: 0 0 1.4em hsla(0deg, 0%, 20%, 0.7);
  }
  .maxWidthFlexCtnr {
    // .Purpose: 2 purpose - 1. Prevent inner element exceed over
    // max-width 2. Center aligned inner flex item (both vertically and horizontally).
    display: flex;
    //justify-content: center;
    // .Don't use this, set { margin: auto; } inside { .modalMainArea } instead.
    align-items: center;
    max-width: var(--maxWidthFlexCtnr_maxWidth);
        //border: 3px solid green;
  }
  .modalMainArea {
    // .Purpose: Work with { .maxWidthFlexCtnr } and { .centerAndOverflowCtnr }.
    // .Don't forget this is flex item of { .maxWidthFlexCtnr }.
    // .The { margin: auto } must be set to make it work properly.
    --modalMainAreaPadding: #{$spaceS3};
    margin: auto;
    // .Important to add this.
    padding: var(--modalMainAreaPadding);
    min-width: var(--modalMainArea_minWidth);
    min-height: 13em;
        //border: 3px solid coral;

  }
  .backdrop {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: hsla(0deg, 0%, 30%, 0.37);
    z-index: -1;
  }

  // .Roughly in same concern.
  // -------------------------
  .infoPlateModal {
    visibility: hidden;
    opacity: 0;
  }
  .infoPlateModal.isVisible {
    visibility: visible;
  }
  .infoPlateModal.hasOpacity {
    opacity: 1;
  }

  // .Roughly in same concern.
  // -------------------------
  .headingCtnr {
    // .Notice, { --closeBtnTrackSize } should be larger than { --closeBtnSize }.
    // =============================================================================
    --closeBtnTrackSize: 3em;
    --closeBtnSize: 2.1em;
    // =============================================================================
    display: grid;
    grid-template-columns: 1fr var(--closeBtnTrackSize);
    justify-items: center;
    align-items: center;
    margin-top: calc(var(--modalMainAreaPadding) * -1);
    margin-bottom: $spaceS5;
        //border: 1px solid red;

  }
  .heading {
    background-color: $clorGreyDark;
    padding: $spaceS4 * 0.7 $spaceS5 * 0.9;
    border-radius: 2px;
    transform: translateX(calc(var(--closeBtnTrackSize) / 2));
  }
  .heading i {
    font-size: 1.7em;
    color: white;
  }
  .closeBtn {
    position: relative;
    width: var(--closeBtnSize);
    height: var(--closeBtnSize);
    border-radius: 4px;
    border: 1px solid hsl(0deg, 0%, 93%);
  }
  .closeBtn::before,
  .closeBtn::after {
    // .Purose: Create a "cross" image.
    --closeBtnCrossLineWidth: 70%;
    --closeBtnCrossLineHeight: 3px;
    position: absolute;
    content: "";
    top: calc(50% - (var(--closeBtnCrossLineHeight) / 2));
    left: calc((100% - var(--closeBtnCrossLineWidth)) / 2);
    width: var(--closeBtnCrossLineWidth);
    height: var(--closeBtnCrossLineHeight);
    background-color: $clorPrimary;
    box-shadow: 0 0 3em hsla(0deg, 0%, 0%, 1);
  }
  .closeBtn::before {
    transform: rotate(45deg);
  }
  .closeBtn::after {
    transform: rotate(-45deg);
  }
  .closeBtn:hover::before,
  .closeBtn:hover::after {
    background-color: hsl($clorPrimaryHue, $clorPrimarySatr, $clorPrimaryLgtn + 10%);
  }

  // .Roughly in same concern.
  // -------------------------
  .navCtnr {
    --navCtnrHeight: 3.0em;
    --barYEnd: #{$spaceS2 * 0.7};
    --barHeight: #{$spaceS2 * 0.7};
    width: 100%;
    height: var(--navCtnrHeight);
    display: block;
    position: relative;
    // .For nav bar to work.
    margin-top: $spaceS3;
    margin-bottom: $spaceS5;
        //border: 1px solid teal;
  }
  .navCtnr .navItem {
    height: 100%;
    display: inline-block;
    vertical-align: top;
    // .This will (and intended  to) do nothing unless something I'm not expected
    // happens. But I think I will keep it here to make it more explicit.
    position: relative;
    // .For nav bar to work.
    margin-left: $spaceS6;
        //border: 1px solid purple;
  }
  .navCtnr .navItem:first-child {
    margin-left: 3em;
  }
  .navCtnr::before,
  .navCtnr .navItem::before {
    // .Purpose: Create individual nav bar visual element "below" each { .navItem }.
    position: absolute;
    content: "";
    bottom: var(--barYEnd);
    height: var(--barHeight);
    left: 0;
    right: 0;
    background-color: hsl(0deg, 0%, 95%);
  }
  .navCtnr .navItem::before {
    transition: all 1s;
  }
  .navCtnr .navItem.active::before {
    background-color: $clorPrimary;
  }
  .navCtnr .navItem i {
    font-size: 0.85em;
    color: hsl(0deg, 0%, 71%)
  }
  .navCtnr .navItem.active i {
    color: hsl(0deg, 0%, 50%)
  }
  .navItem.about {
  }
  .navItem.usedSkills {
  }
  .navItem.images {
  }

  // .Roughly in same concern.
  // -------------------------
  .tabContent {
    margin: 4.2em 1.1em;
        //border: 1px solid red;
  }
  .tabContent .about {
    margin-left: 3em;
    margin-right: 3em;
  }
  .tabContent .images {
  }
  .tabContent .images .imageCtnr {
    display: block;
    width: 100%;
    text-align: center;
    line-height: 0;
  }
  .tabContent .images img {
    max-width: 100%;
    max-height: 25em;
    box-shadow: 2px 4px 13px hsla(0deg, 0%, 50%, 0.18);
  }
  .tabContent .images .decorationElm {
    --decorationElm_marginY: 2.8em;
    --decorationElm_dot_height: 3px;
    --decorationElm_dot_backgroundColor: hsl(0deg, 0%, 85%);
    --decorationElm_line_height: 1px;
    //--decorationElm_line_width: 6em;
    --decorationElm_line_width: 30%;
    --decorationElm_line_backgroundColor: var(--decorationElm_dot_backgroundColor);
    --decorationElm_line_spacing: 1.2em;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: var(--decorationElm_marginY);
    margin-bottom: var(--decorationElm_marginY);
  }
  .tabContent .images .decorationElm:first-of-type {
    display: none;
  }
  .tabContent .images .decorationElm .dot {
    height: var(--decorationElm_dot_height);
    width: var(--decorationElm_dot_height);
    //border-radius: 50%;
    background-color: var(--decorationElm_dot_backgroundColor);
  }
  .tabContent .images .decorationElm .line {
    height: var(--decorationElm_line_height);
    width: var(--decorationElm_line_width);
    background-color: var(--decorationElm_line_backgroundColor);
  }
  .tabContent .images .decorationElm .lineLeft {
    margin-right: var(--decorationElm_line_spacing);
  }
  .tabContent .images .decorationElm .lineRight {
    margin-left: var(--decorationElm_line_spacing);
  }
  .tabContent .usedSkills {
    --usedSkillsBorderWidth: 0.20em;
    display: grid;
    grid-template-columns: minmax(4em, 2fr) 3fr;
    justify-content: center;
    align-items: start;
    grid-column-gap: 5.2em;
    grid-row-gap: 1.6em;
        //border: 1px solid pink;
  }
  .tabContent .usedSkills .title {
    justify-self: end;
    text-align: right;
  }
  .tabContent .usedSkills .title i {
    font-size: 1.5em;
    font-weight: 400;
    color: $clorPrimary;
  }
  .tabContent .usedSkills .content {
    justify-self: start;
    border-left: var(--usedSkillsBorderWidth) solid hsl(0deg, 0%, 92%);
    padding: calc(2 * 0.0625em);
    padding-left: 1.4em;
  }

  // .Roughly in same concern.
  // -------------------------
  .btnCtnr {
    display: block;
    margin: 3em 1.8em 1.3em;
    text-align: right;
  }
  .btnCtnr > * {
    margin-left: 1px;
    margin-right: 1px;
    vertical-align: middle;
    // .Fixing a weird and unknow issue, is trivial.
    box-sizing: border-box;
    // .Fixing a trivial issue.
  }
  .btnCtnr .btn {
    font-size: 0.9rem;
    position: relative;
    display: inline-block;
    width: $spaceS7 + $spaceS1;
    height: $spaceS5 + $spaceS3;
    border: 1px solid $clorGreyBright;
    border-radius: 0.5em;
    background-color: hsl($clorPrimaryHue, $clorPrimarySatr + 0%, $clorPrimaryLgtn + 10%);
    box-shadow: 0 0 5px hsla($clorPrimaryHue, 90%, 25%, 0.4);
    transition: all 0.12s;
  }
  /deep/ .btnCtnr .arrowThick {
    --pathWithMainColor: white;
    top: 50%;
    left: 51%;
    width: 0.9em;
  }
  /deep/ .btnCtnr .btnNext .arrowThick svg {
    transform: rotateY(180deg);
  }
  .btnCtnr .btn:hover {
    border: 1px solid $clorGreyBright;
    border-radius: 0.5em;
    background-color: white;
    box-shadow: 0 0 4px hsla($clorPrimaryHue, 90%, 25%, 0.6);
    border-color: hsl($clorPrimaryHue, $clorPrimarySatr + 0%, $clorPrimaryLgtn + 10%);
  }
  /deep/ .btnCtnr .btn:hover .arrowThick {
    --pathWithMainColor: #{hsl($clorPrimaryHue, $clorPrimarySatr + 0%, $clorPrimaryLgtn + 10%)};
  }

  // .Starting media query.
  // ------------------------
  @media screen and (max-width: $screenMdWidth) {

    .navCtnr .navItem:first-child {
      margin-left: 2.3em;
    }
    .tabContent .usedSkills {
      grid-template-columns: 1fr;
    }
    .tabContent .usedSkills .title {
      justify-self: start;
      text-align: left;
      border-left: var(--usedSkillsBorderWidth) solid $clorPrimary;
      padding: calc(2 * 0.0625em);
      padding-left: 1.4em;
      margin-top: 2.4em;
    }
    .tabContent .usedSkills .title:first-child {
      margin-top: 1em;
    }
  }
  @media screen and (max-width: $screenSmWidth) {
    .infoPlateModal {
      --modalMainArea_minWidth: 21em;
    }
  }
  //@media screen and (max-width: 460px) {
  //}
</style>
