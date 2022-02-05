<template>
  <div class="scheduleForm">
    <form action="SEND ADDRESS" id="ft-form" method="POST" accept-charset="UTF-8">
  <fieldset>
    <label>
      Name
      <input type="text" name="name" required>
    </label>
    <label>
      Email address
      <input type="email" name="email" required>
    </label>
    <label>
      Your message
      <textarea rows="3" name="message" required></textarea>
    </label>
  </fieldset>
  <div class="btns">
    <input type="text" name="_gotcha" value="" style="display:none;">
    <input type="submit" value="Submit">
  </div>
</form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Styles */
.scheduleForm {
  width: 100%;
  height: 100%;
  background: var(--colour-grey-light);
  padding: var(--space-md);
}
</style>
