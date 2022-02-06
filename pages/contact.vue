<template>
  <div class="page">
    <div class="contactHero">
      <div class="row">
        <div class="col-6">
          <div
            class="contactQuote d-flex flex-column justify-content-center align-items-center"
          >
            <h5>My optimism wears heavy boots and is loud.</h5>
            <div class="quoteAuthor">Henry Rollins</div>
          </div>
        </div>
        <div class="col-6"></div>
      </div>
    </div>
    <div class="container">
      <div class="row contact-wrapper">
        <div class="col-sm-12 col-md-6 order-2 order-md-1">
          <div class="contactSummary">
            <h4>Contact Us</h4>
            <div class="tel mb-3">1300 144 838</div>
            <div class="address mb-3">
              5 Everage Street
              <br />Moonee Ponds VIC 3039
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 order-1 order-md-2">
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
export default {
  components: { contactForm },
  layout: 'page-layout',
}
</script>

<style scoped>
/* Styles */
.page {
  width: 100%;
  overflow-x: hidden;
}
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
.tel {
  font-size: 1.2em;
  font-weight: 900;
  color: var(--colour-primary);
  padding: var(--space-md);
  border-bottom: 3px solid var(--colour-secondary);
}
.address {
  font-size: 1.2em;
  padding: var(--space-md);
  border-bottom: 3px solid var(--colour-secondary);
}
</style>
