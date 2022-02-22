<template>
  <div>
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
export default {}
</script>

<style scoped>
/* Styles */
</style>
