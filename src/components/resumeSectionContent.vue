<!--
  .About: { resumeSectionSubContent.vue } and { resumeSectionContent.vue } works together, they are 2 layer of slot (nested slot) instead of one. So the nested slot works like this - I can have 3 component - parent, a componentWithSlot1, a componentWithSlot2, then in the parent component I can put (inserting into slot) my final data inside componentWithSlot2 inside componentWithSlot1 inside parent. So the data will be rendered first (I guess), then componentWithSlot1, then componentWithSlot2, then parent.
-->
<template>
  <div class="resumeSectionContent">
    <slot
      name="default"
    >
      (resumeSectionContent)
    </slot>
  </div>
</template>

<script>

export default {
  name: 'resumeSectionContent',
  components: {
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

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "@/style/base.scss";

  .resumeSectionContent {
    // .For Css Variable.
    --maxWidth: 20em;
  }
  .resumeSectionContent {
    display: grid;
    grid-template-columns: minmax(1fr, var(--maxWidth));
    align-content: center;
    grid-row-gap: $spaceS6;
    padding: $spaceS4 2vw $spaceS4 4vw;
  }

  @media screen and (max-width: $screenMdWidth) {
    .resumeSectionContent {
      grid-row-gap: $spaceS7;
    }
  }
</style>
