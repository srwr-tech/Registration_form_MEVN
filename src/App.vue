<template>
  <div id="app">
    <RegistrationForm />
  </div>
</template>

<script>
import RegistrationForm from './components/RegistrationForm.vue';

export default {
  name: 'App',
  components: {
    RegistrationForm
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', sans-serif;
  text-align: center;
  margin-top: 60px;
  text-align: center;
}
</style>
