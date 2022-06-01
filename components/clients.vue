<template>
  <div>
    <div class="container">
      <h2>Our Clients:</h2>
      <b-row>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image1.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image2.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image3.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image4.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image5.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image6.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image7.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image8.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image9.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
        <b-col cols="6" md="3">
          <img
            src="@/static/images/companies/image10.jpg"
            alt=""
            class="clients_image m-auto"
          />
        </b-col>
        <b-col cols="12" md="4"></b-col>
        <b-col cols="12" md="4"></b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* styles */
.container {
  padding: 1rem;
}
.image_wrapper {
  width: 90%;
  height: auto;
  margin: auto;
  object-fit: contain;
}
.clientImage,
.clients_image {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
