<template>
  <div class="scheduleForm">
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter Email Address"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Phone Number:"
        label-for="input-1"
        description="We'll never share your details with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter Contact Number"
          required
        ></b-form-input>
      </b-form-group>

      <b-button
        type="submit"
        class="btn ctaButton-dark float-right m-2"
        variant="primary"
        >Submit</b-button
      >
      <b-button
        class="btn ctaButton float-right m-2"
        type="reset"
        variant="danger"
        >Reset</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        checked: [],
      },
      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style scoped>
/* Styles */
.scheduleForm {
  width: 100%;
  height: 100%;
  background: var(--colour-grey-light);
  padding: var(--space-xlg) var(--space-md);
}
</style>
