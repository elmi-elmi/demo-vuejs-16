<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ errors: !formIsValid }">
      <label for="email">Email</label>
      <input type="email" v-model.trim="email" />
    </div>
    <div class="form-control" :class="{ errors: !formIsValid }">
      <label for="message">Message</label>
      <textarea
        name="message"
        id="message"
        rows="5"
        v-model.trim="message"
      ></textarea>
    </div>
    <p v-if="!formIsValid">what is this shit</p>
    <div class="actions">
      <base-button>Send</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return { email: '', message: '', formIsValid: true };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;
      if (this.email === '' || !this.email.includes('@')) {
        this.formIsValid = false;
      }
      if (this.message === '') {
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      this.$store.dispatch('requests/requests', {
        coachId: this.$route.params.id,
        email: this.email,
        message: this.message
      });
      this.$router.replace('/coaches');
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
