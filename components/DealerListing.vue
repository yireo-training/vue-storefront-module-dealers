<template>
  <div>
    <h1>{{ $t('Dealers') }}</h1>
    <div v-if="!dealers && !loading">{{ $t('No dealers found') }}</div>
    <div v-if="loading">{{ $t('Loading data') }}</div>
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
      return this.$store.state.dealers.items
    },
    loading() {
      return this.$store.state.dealers.loading
    }
  }
};
</script>
