<template>
  <div id="top" class="page">
    <navbar />
    <index-hero />
    <div class="container">
      <div id="introduction" class="section intro pt-5">
        <h4>
          High-performance sale training that unlocks the full potential of your
          salespeople!
        </h4>
        <p>
          At UpSkill training, our sole focus is creating world-class training
          programs for salespeople in the business to customer sector. Having a
          single purpose allows us to research, field test, and incorporate the
          latest sales techniques, psychology, and technology into our training
          course, ensuring that your people are receiving the absolute best
          practice sales methodologies from around the world.
        </p>
        <p>
          We work with large and small businesses and custom design training
          solutions to meet your business’s specific requirements. Our most
          requested training courses are, closing the sale on the first call,
          lead generation skills, appointment setting, advanced presentation
          skills, and effectively using the telephone to sell.
        </p>
      </div>
    </div>
    <div class="ctaSection">
      <cta-section />
    </div>
    <div class="features">
      <index-features />
    </div>
    <Carousel />
    <div id="schedules" class="schedules-section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-6 p-4">
            <!-- <cta-video /> -->
            <p>
              We have successfully trained field and telephone-based sales teams
              in the following:
            </p>
            <ul>
              <li>Solar Industry.</li>
              <li>Home Improvements industry.</li>
              <li>Domestic security system sales.</li>
              <li>Education software sales.</li>
              <li>Education cloud services sales.</li>
              <li>Therapeutics furniture sales.</li>
              <li>Business opportunity sales.</li>
              <li>Investment Property Sales.</li>
            </ul>
            <p>
              All our courses can be delivered in person at an agreed, suitable
              location or virtually using any popular video conferencing app
              such as zoom. The system can be provided over 1 to 3 days,
              depending on your requirement.
            </p>

            <p>
              For more information on transforming your sales team and results,
              call 1300 144 838 or complete the inquiry form.
            </p>
          </div>
          <div class="col-md-12 col-lg-6 p-4">
            <ScheduleForm />
          </div>
        </div>
      </div>
    </div>
    <footer-section />
    <back-to-top />
  </div>
</template>

<script>
import 'animate.css'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import BackToTop from '~/components/back-to-top.vue'
import IndexHero from '~/components/index-hero.vue'
import navbar from '~/components/navbar.vue'
import indexFeatures from '~/components/index-features.vue'
import CtaSection from '~/components/cta-section.vue'
import FooterSection from '~/components/footer-section.vue'
import ScheduleForm from '~/components/schedule-form.vue'
import Carousel from '~/components/carousel.vue'
// import CtaVideo from '~/components/cta-video.vue'

export default {
  components: {
    navbar,
    IndexHero,
    BackToTop,
    indexFeatures,
    CtaSection,
    FooterSection,
    ScheduleForm,
    Carousel,
    // CtaVideo,
  },
  mixins: [validationMixin],
  data() {
    return {
      email: null,
    }
  },
  validations: {
    email: {
      required,
      email,
    },
  },
  methods: {
    validateState(item) {
      const { $dirty, $error } = item
      return $dirty ? !!$error : null
    },
    submit() {
      this.$v.$touch()
      if (this.$v.$anyError) return false

      alert(`Form submitted for ${this.email}`)
    },
  },
}
</script>
<style scoped>
/* Styles */
.intro h4 {
  font-weight: 700;
}
.schedule-section {
  height: auto;
}
</style>
