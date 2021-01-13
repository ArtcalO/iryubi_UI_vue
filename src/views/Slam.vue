<template>
  <div class="posts">
    <NavBar></NavBar>
      <div class="album py-5 bg-light">
          <div class="container">
            <div class="row">
              <div v-for="slam in APIData" :key="slam.id" class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <div class="card-body">
                      <h4 class=""><a class="text-secondary" href="">{{slam.title}}</a></h4>
                      <p class="card-text">{{ slam.content }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
  import NavBar from '../components/Navbar'
  import { baseAPI } from '../axios-api'
  import { mapState } from 'vuex'
  export default {
    name: 'Slam',
    components: {
      NavBar
    },
    computed: mapState(['APIData']),
    created () {
        baseAPI.get('/slam/')
          .then(response => {
            this.$store.state.APIData = response.data
          })
          .catch(err => {
            console.log(err)
          })
    }
  };
</script>

<style>

</style>
