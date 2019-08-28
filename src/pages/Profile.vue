<template>
  <q-page class="flex flex-center">
    <div>
    <div v-if="profile.id">
      <div class="q-title"></div>
    </div>
  </div>
  </q-page>
</template>

<script>

export default {
  name: 'Profile',
  data () {
    return {
      profile: {}
    }
  },
  mounted () {
    this.getProfile('facebook')
  },
  methods: {
    getProfile (network) {
      if (this.$hello.getAuthResponse(network) == null) {
        return
      }
      var elem = document.createElement("img");
      this.$hello(network).api('me')
        .then((res) => {
          console.log(res),
          this.profile = res,
          console.log(res.name),
          console.log(elem),
          document.getElementById('image').src = res.picture,
          document.getElementById('name').innerHTML = res.name,
          document.getElementById('image2').src = res.picture,
          console.log(res.name),
          console.log('made it thorugh'),
          console.log(elem)          
        })
    }
  }
}

</script>
