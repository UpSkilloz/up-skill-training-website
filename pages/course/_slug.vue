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
    <p v-if="course.description" class="intro mt-3">{{ course.description }}</p>
    <div v-if="course.overview">
      <h4 class="profile-title">Course Overview</h4>
      <p>{{ course.overview }}</p>
    </div>

    <div class="col-sm-12 col-lg-6">
      <div v-if="course.overviewList" class="mb-4">
        <ul
          v-for="course in course.overviewList"
          :key="course.title"
          class="m-0"
        >
          <li class="mt-2">{{ course }}</li>
        </ul>
      </div>
    </div>
    <div class="onlineEnquiry d-flex justify-content-center align-items-center">
      <a href="/contact">
        <div class="btn ctaButtonInverse">Online Enquiry</div>
      </a>
    </div>
    <div class="row">
      <div class="col-sm-12 col-lg-6 min">
        <div v-if="course.receive" class="attendees mb-4">
          <h4 class="profile-title">You Receive:</h4>
          <ul v-for="course in course.receive" :key="course.title" class="m-0">
            <li class="mt-2">{{ course }}</li>
          </ul>
        </div>
      </div>

      <div class="col-sm-12 col-lg-6">
        <div v-if="course.outcomes" class="outcomes mb-4">
          <h4 class="profile-title">Course Outcomes:</h4>
          <h5 class="mt-2 mb-4">Participants of the workshop will:</h5>
          <ul v-for="course in course.outcomes" :key="course.title" class="m-0">
            <li class="mt-2">{{ course }}</li>
          </ul>
        </div>
      </div>
    </div>

    <nuxt-content :document="course" />
    <div class="onlineEnquiry d-flex justify-content-center align-items-center">
      <a href="/contact">
        <div class="btn ctaButtonInverse">Online Enquiry</div>
      </a>
    </div>
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
  object-fit: contain;
  object-position: center center;
}
.intro {
  color: var(--colour-grey-dark);
  font-style: italic;
  line-height: 1.8em;
  background: rgba(var(--colour-primary-rgb), var(--alpha-10));
  padding: var(--space-md);
}
.attendees {
  background: rgba(var(--colour-secondary-rgb), var(--alpha-30));
  padding: var(--space-lg);
  font-style: italic;
}
.outcomes {
  background: var(--colour-grey-light);
  padding: var(--space-lg);
}
.onlineEnquiry {
  width: 100%;
  height: 100px;
}
</style>
