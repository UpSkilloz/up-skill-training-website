<template>
  <div class="scheduleForm">
    <form action="https://form.taxi/s/tli2b882" method="POST">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Name *</label>
        <input
          type="text"
          name="Name"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Email address *</label
        >
        <input
          type="email"
          name="Email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >Contact Phone:</label
        >
        <input
          type="text"
          name="ContactPhone"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >How can we help?</label
        >
        <textarea
          type="textarea"
          name="Help"
          rows="3"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <input
        type="submit"
        value="Send"
        class="ctaButton-dark"
        style="width: 100%"
      />
    </form>
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
