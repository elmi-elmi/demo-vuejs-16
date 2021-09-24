<template>
  <base-card>
    <header>
      <h2>Register as Coach</h2>
    </header>
    <coach-form></coach-form>
  </base-card>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';
export default {
  components: { CoachForm }
};
</script>
