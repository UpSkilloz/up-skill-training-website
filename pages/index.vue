<template>
  <div class="page" id="top">
    <navbar />
    <index-hero />
    <div class="container">
      <div class="section intro pt-5" id="introduction">
        <h4>Develop a professional sales team of high performers!</h4>

        <p>
          Invest in skills based, high performance sales training for your whole organisation from sales reps to sales managers.
          If you want to differentiate your business from your competitors and win more sales, than you must invest in effective skills-based sales training.
        </p>

        <p>That’s because today, business is more competitive than ever. Products and services can be easily copied, prices are often matched or beaten, and customers now have more tools available to them when it comes to educating themselves on buying decisions. When buyers are faced with similar products or services at similar prices, then the only real difference is how they feel during the sales process. Winning at that game comes down to the skill of the sales person!</p>

        <p>Our skills-based sales training programs are custom designed for your business taking into consideration all the uniqueness that makes your business special. After attending our training program, your sales team will become the trusted experts in their field, acting with confidence and skill inspiring new and existing customers to do business with your company.</p>

        <p>All sales training courses are designed to be interactive, engaging and fun, making learning fast and easy. Your sales team will develop key skills they can use immediately to increase revenues, increase customer satisfaction and give team members a greater feeling of job satisfaction. With ongoing positive reinforcement, the new sales skill will in time become a real competitive advantage, one that cannot be copied.</p>
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
.intro h4 {
  font-weight: 700;
}
.schedule-section {
  height: auto;
}
</style>
