<template>
  <div class="container">
    <div class="profileHero mt-4">
      <img
        v-if="course.image"
        :src="require(`~/static/images/courses/` + `${course.image}`)"
        class="profileHeroImage"
        alt="..."
      />
      <img
        v-else
        :src="require(`~/static/images/courses/test.jpg`)"
        class="profileHeroImage"
        alt="..."
      />
    </div>
    <p class="intro mt-3">{{ course.description }}</p>
    <div v-if="course.overview">
      <h4 class="profile-title">Course Overview</h4>
      <p>{{ course.overview }}</p>
    </div>
    <div v-if="course.attendees" class="attendees mb-4">
      <h4 class="profile-title">
        Who should attend the “Advanced Sales” training course?
      </h4>
      <ul>
        <li>
          {{ course.attendees }}
        </li>
      </ul>
    </div>
    <nuxt-content :document="course" />
  </div>
</template>

<script>
export default {
  layout: 'course-layout',
  async asyncData({ $content, params }) {
    const course = await $content('courses', params.slug).fetch()

    return { course }
  },
}
</script>

<style scoped>
/* Styles */
.profileHero {
  width: 100%;
  height: auto;
}
.profileHeroImage {
  width: 100%;
  max-height: 40vh;
}
.profileHero img {
  object-fit: cover;
  object-position: center center;
}
.intro {
  color: var(--colour-grey);
  font-style: italic;
}
.profile-title {
  font-weight: 800;
}
.attendees {
  background: rgba(var(--colour-secondary-rgb), var(--alpha-30));
  padding: var(--space-md);
  font-style: italic;
}
</style>
