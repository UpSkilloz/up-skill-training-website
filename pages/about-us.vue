<template>
  <div>
    <div class="container">
      <b-row class="mt-5">
        <b-col-12 class="mb-5">
          <p>
            <nuxt-content :document="about[0]" />
          </p>
        </b-col-12>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'page-layout',
  async asyncData({ $content }) {
    const about = await $content('about').fetch()
    const reps = await $content('reps').sortBy('id', 'asc').fetch()

    return {
      about,
      reps,
    }
  },
}
</script>

<style scoped>
/* Styles */
.repProfile {
  margin-bottom: var(--space-xxlg);
}
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
</style>
