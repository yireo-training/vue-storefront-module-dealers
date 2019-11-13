<template>
  <div>
    <h1>Dealers</h1>
    <div v-if="!dealers">No dealers found</div>
    <ul v-if="dealers">
      <li v-for="dealer in dealers" v-bind:key="dealer.id">
        {{ dealer.name }} - {{ dealer.address }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DealerListing",
  created() {
    this.$store.dispatch("dealers/loadDealers", {
      url: "dealers"
    });
  },
  computed: {
    dealers() {
      return this.$store.state.dealers.dealers
    }
  }
};
</script>
