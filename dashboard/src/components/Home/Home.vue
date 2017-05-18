<!-- CSS -->
<style lang="stylus" src="./Home.styl"></style>

<template>
  <div class="home">
    <img src="../../assets/img/accor_logo.png">
    <div class="home-form">
      <input type="text" name="clientid" v-model="clientId" v-on:keyup.enter="submit" onkeypress="this.style.width = ((this.value.length + 1) * 9) + 'px';">
      <input type="submit" v-on:click="submit"  id="loginSubmit">
    </div>
  </div>
</template>

<!-- JS -->
<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: '..',
        client: null,
        clientId: null
      }
    },

    methods: {
      submit: function () {
        console.log(this.clientId)
        this.$router.push(`/client/${this.clientId}`)
      }
    }
  }
</script>
