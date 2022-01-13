<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="none">
      <b-navbar-brand href="/">Up Skill Training</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/about-us">About Us</b-nav-item>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>Courses</em>
            </template>
            <b-dropdown-item href="#">Course One</b-dropdown-item>
            <b-dropdown-item href="#">Course Two</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.navbar {
  line-height: 3em;
  background: var(--colour-primary);
  color: var(--colour-light);
}
.navbar.scrolled {
  background: yellow;
}
.navbar-brand {
  width: 100px;
  height: 60px;
  padding: 0 0 0 100px;
  background: url('@/static/images/logo_icon_light.svg') center center no-repeat;
  object-fit: contain;
}
.navbar a {
  margin: 0 var(--space-md);
}
</style>
