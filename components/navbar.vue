<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="none">
      <b-navbar-brand href="/">UpSkill Training</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/"><div class="menuPadding">Home</div></b-nav-item>
          <b-nav-item href="/courses"
            ><div class="menuPadding">Courses</div></b-nav-item
          >
          <b-nav-item href="/our-approach"
            ><div class="menuPadding">Our Approach</div></b-nav-item
          >
          <b-nav-item href="/trainers"
            ><div class="menuPadding">Trainers</div></b-nav-item
          >
          <b-nav-item href="/about-us"
            ><div class="menuPadding">About Us</div></b-nav-item
          >
          <b-nav-item href="/contact"
            ><div class="menuPadding">Contact</div></b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <navbar-schedule />
  </div>
</template>
<script>
export default {}
</script>

<style scoped>
.navbar {
  line-height: 3em;
  background: var(--colour-light);
  color: var(--colour-primary);
}
.navbar.scrolled {
  background: yellow;
}
.navbar-brand {
  width: 100px;
  height: 60px;
  padding: 0 0 0 100px;
  background: url('@/static/images/logo_icon.svg') center center no-repeat;
  object-fit: contain;
}
.navbar a {
  margin: var(--space-sm) 0;
}
.navbar-dark .navbar-toggler {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}
.navbar-dark .navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
.navbar-dark .navbar-toggler:hover {
  color: var(--colour-secondary);
  border-color: var(--colour-secondary);
}
.menuPadding {
  padding: 0;
}
@media screen and (max-width: 900px) {
  .menuPadding {
    padding: 0 0 0 16px;
  }
}
</style>
