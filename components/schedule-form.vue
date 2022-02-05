<template>
  <div class="scheduleForm">
    <form action="https://form.taxi/s/dfwkk36o" method="POST">
    <input type="text" name="Name">
    <input type="email" name="Email">
    <textarea name="Message"></textarea>
  <input type="submit" value="Send">
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
