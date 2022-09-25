<template>
  <b-card>
    <b-card-img class="rounded-circle" :src="character.image"></b-card-img>
    <b-card-body>
      <div class="d-flex justify-content-between">
        <label class="fw-bold">Name:</label><span>{{ character.name }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <label class="fw-bold">Status:</label><span>{{ character.status }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <label class="fw-bold">Species:</label><span>{{ character.species }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <label class="fw-bold">Gender:</label><span>{{ character.gender }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <label class="fw-bold">Created:</label
        ><span>{{ character.created | moment("from", "now") }}</span>
      </div>
      <b-button class="btn btn-success w-100">Episodes</b-button>
      <!-- <b-button block variant="primary">Block Level Button</b-button> -->

    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
