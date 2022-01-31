<template>
  <div class="container">
    <div class="row">
      <div
        v-for="course in courses"
        :key="course.slug"
        class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
      >
        <nuxt-link :to="{ name: 'course-slug', params: { slug: course.slug } }">
          <div class="card mt-4 h-100">
            <img
              v-if="course.image"
              :src="require(`~/static/images/courses/` + `${course.image}`)"
              class="card-img-top"
              alt="..."
            />
            <img
              v-else
              :src="require(`~/static/images/courses/test.jpg`)"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body d-flex flex-column">
              <h5>{{ course.title }}</h5>
              <p class="card-text">{{ course.snippet }}</p>
              <div class="courseBtn mt-auto">Find Out More</div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'page-layout',
  async asyncData({ $content }) {
    const courses = await $content('courses').sortBy('id', 'asc').fetch()

    return { courses }
  },
}
</script>

<style scoped>
/* Styles */
.courseHero {
  width: 100px;
  height: auto;
}
.card {
  height: 100%;
}
.card-img-top {
  max-height: 130px;
  object-fit: cover;
}
.card-body h5 {
  color: var(--colour-primary);
  font-weight: 400;
}
.card-text {
  color: var(--colour-grey);
  font-size: 0.8em;
}
.courseBtn {
  background: var(--colour-light);
  border: 1px solid var(--colour-primary);
  color: var(--colour-primary);
  padding: var(--space-sm);
  border-radius: 4px;
  text-align: center;
}
.courseBtn:hover {
  background: var(--colour-primary);
  color: var(--colour-light);
}
</style>
