<template>
  <div class="page" id="top">
    <navbar />
    <index-hero />
    <div class="container">
      <div class="section intro pt-5" id="introduction">
        <h4>
          At UpSkill Training we design and deliver sales training programs that
          inspire sales teams to achieve greatness.
        </h4>
        <h5>Is your sales team:</h5>
        <ul>
          <li>Underperforming and not hitting their KPI’s?</li>
          <li>Underdelivering and suffer from a low close rate?</li>
          <li>Uninspired and just going through the motions?</li>
          <li>
            Caught up in the blame game. Blaming the leads, the economy, Covid
            Etc.
          </li>
        </ul>
      </div>
    </div>
    <div class="ctaSection">
      <cta-section />
    </div>
    <div class="features">
      <index-features />
    </div>
    <div class="schedules-section" id="schedules">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-6 p-4">
            <cta-video />
          </div>
          <div class="col-md-12 col-lg-6 p-4">
            <ScheduleForm />
          </div>
        </div>
      </div>
    </div>
    <footer-section />
    <back-to-top />
    <!-- <div>
      Shit that needs doing with "schedule a consultation" top right

      pop up that asks for email, name, phone - sign up for newsletter - "receive a
      weekly newsletter, outlining the latest techniques in sales and sales
      management to help you build a high performance sales team." 

      update the spanglish to : "You have to train both your salespeople and the sales
      managers who coach them" "High performance sales training" 
      
      dropmenu for courses... auto populate and also footer menu... 

      add our approach page... 

      make the features look a little nicer... 
      
      figure out how to add email address' to AWS Amplify - route 53
    </div>-->
  </div>
</template>

<script>
import 'animate.css'
import BackToTop from '~/components/back-to-top.vue'
import IndexHero from '~/components/index-hero.vue'
import navbar from '~/components/navbar.vue'
import indexFeatures from '~/components/index-features.vue'
import CtaSection from '~/components/cta-section.vue'
import FooterSection from '~/components/footer-section.vue'
import ScheduleForm from '~/components/schedule-form.vue'
import CtaVideo from '~/components/cta-video.vue'
export default {
  components: {
    navbar,
    IndexHero,
    BackToTop,
    indexFeatures,
    CtaSection,
    FooterSection,
    ScheduleForm,
    CtaVideo,
  },
}
</script>
<style scoped>
/* Styles */

.schedule-section {
  height: auto;
}
</style>
