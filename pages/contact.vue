<template>
  <div>
    <GtmBody />
    <div class="contactHero">
      <div class="row">
        <div class="col-6">
          <div
            class="contactQuote d-flex flex-column justify-content-center align-items-center"
          >
            <h5>Growth and comfort do not coexist.</h5>
            <div class="quoteAuthor">Ginni Rometty</div>
          </div>
        </div>
        <div class="col-6"></div>
      </div>
    </div>
    <div class="container">
      <div class="row contact-wrapper">
        <div class="col-sm-12 col-md-6">
          <div class="contactSummary">
            <h4>Contact Us</h4>
            <p>
              Let us know your requirements and we will get back to you as soon
              as possible.
            </p>
            <p class="text-bold">1300 144 838</p>
            <p>
              5 Everage Street<br />
              Moonee Ponds VIC 3039
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="contactForm">
            <contact-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import contactForm from '~/components/contact-form.vue'
import '../gtm.js'
import GtmBody from '~/components/gtm-body.vue'
export default {
  components: { contactForm, GtmBody },
  layout: 'page-layout',
}
</script>

<style scoped>
/* Styles */
.contactHero {
  width: 100%;
  height: 40vh;
  background: url('@/static/images/contact.webp') center right no-repeat;
  background-size: cover;
  box-shadow: -4000px -4000px inset rgba(var(--colour-primary-rgb), var(--alpha-60));
}
.contactQuote {
  width: 100%;
  height: 30vh;
  color: var(--colour-light);
  font-weight: 900;
  text-align: center;
}
.contactQuote::before,
.contactQuote::after {
  content: '"';
  font-size: 2em;
}
.quoteAuthor {
  font-size: 1em;
  text-align: right;
  align-self: flex-end;
}
.contactSummary,
.contactForm {
  background: var(--colour-light);
  border-radius: var(--space-sm);
  padding: var(--space-md);
  box-shadow: 0 0 12px rgba(var(--colour-dark-rgb), var(--alpha-30));
  margin-bottom: var(--space-md);
}
.contact-wrapper {
  margin-top: -70px;
}
</style>
