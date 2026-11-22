<template>
  <section class="signup">
    <form class="card" @submit.prevent="submit" novalidate>
      <label for="email">Email</label>
      <input id="email" v-model.trim="email" type="email" placeholder="Email" />

      <label for="password">Password</label>
      <input id="password" v-model="password" type="password" placeholder="Password" />

      <div v-if="showErrors && failed.length" class="error">
        <p>The password is not valid</p>
        <p v-for="msg in failed" :key="msg">- {{ msg }}</p>
      </div>
      <p v-if="submitted && !emailOk" class="error">Please enter a valid email address.</p>
      <p v-if="success" class="ok">Signed up successfully!</p>

      <button class="btn" type="submit">Signup</button>
    </form>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const email = ref('');
const password = ref('');
const submitted = ref(false);
const success = ref(false);

const rules = [
  {
    text: 'The password should be at least 8 and less than 15 characters long',
    test: (p) => p.length >= 8 && p.length < 15,
  },
  {
    text: 'The password should include at least one uppercase alphabet character',
    test: (p) => /[A-Z]/.test(p),
  },
  {
    text: 'The password should include at least two lowercase alphabet characters',
    test: (p) => (p.match(/[a-z]/g) || []).length >= 2,
  },
  { text: 'The password should include at least one numeric value', test: (p) => /\d/.test(p) },
  {
    text: 'The password should start with an uppercase letter',
    test: (p) => /^[A-Z]/.test(p),
  },
  {
    text: 'The password should include the character "_"',
    test: (p) => p.includes('_'),
  },
];

// conditions that are not satisfied by the current password
const failed = computed(() => rules.filter((r) => !r.test(password.value)).map((r) => r.text));
// show the message while typing, and also after pressing Signup
const showErrors = computed(() => submitted.value || password.value.length > 0);
const emailOk = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value));

const submit = () => {
  submitted.value = true;
  success.value = failed.value.length === 0 && emailOk.value;
};
</script>

<style scoped src="../assets/signup.css"></style>
