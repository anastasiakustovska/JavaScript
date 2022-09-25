<template>
  <div>
    <b-container class="d-flex flex-wrap justify-content-evenly">
      <characters-card
        class="m-1"
        style="width=300px"
        v-for="character in characters"
        :key="character.id"
        :character="character"
      ></characters-card>
    </b-container>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import CharactersCard from "@/components/characters/CharactersCard.vue";
export default {
  components: {
    CharactersCard,
  },
  data() {
    return {
      currentPage: 1,
      perPage: 20,
    };
  },
  mounted() {
    this.$store.dispatch("getCharacters");
  },
  computed: {
    characters() {
      return this.$store.getters.getCharacters;
    },
    rows() {
      return this.$store.getters.getPages;
    },
  },
};
</script>

<style></style>
