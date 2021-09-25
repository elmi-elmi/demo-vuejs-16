<template>
  <section>
    <base-card>
      <header>
        <h2>Recieve request</h2>
        <ul v-if="hasRequest">
          <p>this is test</p>
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.email"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't recieve any request yet!</h3>
      </header>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: { RequestItem },
  computed: {
    hasRequest() {
      console.log('%%%%%%%%%%%%%%%%%%%');
      // console.log(this.$store.getters['requests/hasRequest'])
      return this.$store.getters['requests/hasRequest'];
    },
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
