<template>
  <div class="aboutMe">
    <div class="briefCtnr">
      <div class="text">
        <p><i class="defaultText defaultTextColor">經過好幾年的時間依然還沒進到網頁設計的領域，但我仍然沒有放棄。</i></p>
        <p><i class="defaultText defaultTextColor">我的本科系是產品設計。第一份工作做過基本的平面設計後，一直覺得自己的個性還有喜好，適合前端網頁設計。在視覺、使用者介面，與前端技術、解決問題，之間，找到我可以發揮的地方。</i></p>
        <p><i class="defaultText defaultTextColor">我自認為我的的成長速度不快，但是我持續在成長。有很長一段時間我都在原地踏步，甚至浪費時間，但是我想這就是我生命中歷經的過程，我歷史的一部分，這些過去的摸索都是有意義的，依然在潛意識的影響我現在 (甚至未來) 的思想，和決定。</i></p>
        <p><i class="defaultText defaultTextColor">我曾經花了很長的時間，摸索人生的意義，但我一直找不到答案。原來意義是每個人自己去賦予在事物上的，對於一件事物的主觀看法。事物本身並沒有意義，意義是每個人自己賦予上去的。</i></p>
        <p><i class="defaultText defaultTextColor">於是我開始有一個念頭，我想要做有意義的事情。我想在以後把前端網頁設計的能力，用來做對社會有貢獻的事情。我在 2019 上半年，嘗試透過各種網路資訊，去找需要 "資訊志工" 的地方。我幸運找到一個人，參與過他 (他與其他人) 的一個專案，把自己的能力貢獻給社會，不浪費時間。沒想到參與專案的過程中，我也見到了真實專案的複雜程度，大幅打開了視野，學到了很多東西。但礙於要先找工作的壓力，目前我把重點放在準備工作上。</i></p>
        <p><i class="defaultText defaultTextColor">我這些年來重視的價值依然沒有太大改變，我依然希望我能盡可能的維持這些原則是 - 坦白、透明、信用、互相溝通。</i></p>
        <p><i class="defaultText defaultTextColor">想要更了解我每天的生活作息，動態，可以翻看 <a href="https://treegb.github.io/treegbBlog/19/03/18/190318m144719/">我的這個 Blog</a>，裡面紀錄著我從 2019/03 到現在，從早到晚的生活作息。</i></p>
      </div>
      <div class="img"></div>
      <!-- .treegb logo is added by css. -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'aboutMe',
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

  .briefCtnr {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    @media screen and (max-width: $screenMdWidth) {
      flex-wrap: wrap
    }
  }
  .briefCtnr .text {
    //flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 1;
    margin: 1em 1.8em;
    //border: 1px solid green;
  }
  .briefCtnr .img {
    --avatarSize: 6em;
    --avatarGap: 0.2em;
    position: relative;
    width: var(--avatarSize);
    height: var(--avatarSize);
    //flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
    border-radius: 50%;
    border: 1px solid hsl(0deg, 0%, $clorGreyBrightLgtn + 8%);
    margin: 1em 1.8em 4em;
        //border: 3px solid blue;
  }
  .briefCtnr .img::before {
    position: absolute;
    content: "";
    top: var(--avatarGap);
    bottom: var(--avatarGap);
    left: var(--avatarGap);
    right: var(--avatarGap);
    box-sizing: border-box;
    background-image: url('~@/assets/treegb-logo.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    border-radius: 50%;
        //border: 1px solid yellow;
  }
  .briefCtnr .img::after {
    position: absolute;
    content: "";
    top: var(--avatarGap);
    bottom: var(--avatarGap);
    left: var(--avatarGap);
    right: var(--avatarGap);
    box-sizing: border-box;
        //border: 1px solid yellow;
        border-radius: 50%;
        transform: translate(0.8em, 1.9em) scale(0.85);
        background-color: $clorGreyDark;
        filter: blur(0px);
        // .Don't use blue, to make it more sharp.
        z-index: -1;
  }
</style>
