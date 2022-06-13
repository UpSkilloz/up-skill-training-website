<template>
  <div>
    <GtmBody />
    <div v-for="approach of approach" :key="approach.id" class="row bennyboy">
      <div class="col-sm-12 col-md-4">
        <div
          v-if="approach.image"
          class="circleImage d-flex justify-content-center align-items-center"
        >
          <img
            :src="require(`~/static/images/icons/` + `${approach.image}`)"
            alt="approach"
            width="90%"
            class="iconImage"
          />
        </div>
      </div>
      <div class="col-sm-12 col-md-8">
        <h2>{{ approach.title }}</h2>
        <p>
          <nuxt-content :document="approach" />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import '../gtm.js'
import GtmBody from '~/components/gtm-body.vue'

export default {
  components: { GtmBody },
  layout: 'page-layout',
  async asyncData({ $content }) {
    const approach = await $content('approach').fetch()

    return {
      approach,
    }
  },
}
</script>

<style scoped>
/* Styles */
.profile-contact svg {
  fill: var(--colour-primary);
  width: 50px;
  height: 50px;
  margin: 0 var(--space-sm);
}
.callBtn {
  border: 3px solid var(--colour-primary);
  background: var(--colour-light);
  color: var(--colour-primary);
  padding: var(--space-md);
  border-radius: 5px;
}
.highlighted {
  background: yellow;
}
.circleImage {
  width: 100%;
  max-width: 200px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconImage {
  background: var(--colour-secondary);
  border-radius: 50%;
  padding: 20px;
}
.bennyboy {
  width: 100%;
  padding: 20px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.bennyboy:nth-child(even) {
  background: var(--colour-grey-light);
  box-shadow: 0 0 10px var(--colour-grey);
  margin: 20px 0;
  flex-direction: row-reverse;
}
@media screen and (max-width: 768px) {
  .bennyboy {
    padding: 40px;
    text-align: center;
  }
}
</style>
