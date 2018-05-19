<template>
  <div class="about">
    <div class="screenfixed">
      <v-tabs class="animated bounceInUp" icons-and-text centered dark color="red ">
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab href="#tab-1">
          New Task
          <v-icon>create</v-icon>
        </v-tab>
        <v-tab href="#tab-2">
          Task
          <v-icon>assignment</v-icon>
        </v-tab>
        <v-tab href="#tab-3">
          Complete
          <v-icon>done_outline</v-icon>
        </v-tab>
        <v-tab-item id="tab-1">
          <CreateTask/>
        </v-tab-item>
        <v-tab-item id="tab-2">
          <Uncomplete/>
        </v-tab-item>
        <v-tab-item id="tab-3">
          <Complete/>
        </v-tab-item>
      </v-tabs>
      <div class="buttonfloat">
        <button @click="toProfile">
          <i class="material-icons fingerprint">
            fingerprint
          </i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CreateTask from '@/components/CreateTask.vue'
import Complete from '@/components/Complete.vue'
import Uncomplete from '@/components/Uncomplete.vue'

export default {
  created () {
    this.$store.dispatch('completeData')
    this.$store.dispatch('uncompleteData')
  },
  components: {
    Navbar,
    CreateTask,
    Complete,
    Uncomplete
  },
  data () {
    return {
      e1: 'recent'
      // text: 'lorem ipsum nhjk bdhsjka dhsjkabhd jk'
    }
  },
  methods: {
    toProfile () {
      this.$router.push('/profile')
    }
  }
}
</script>

<style scoped>

.screenfixed {
  width: 100%;
  height: 200px;
  /* position: relative */
}
.buttonfloat {
  position: fixed;
  width: 60px;
  height: 60px;
  background: red;
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  -webkit-box-shadow: 1px 1px 3px 2px #00020A;
  box-shadow: 1px 1px 3px 2px #00020A;
}
.fingerprint {
  margin-top: 10px;
  font-size: 40px !important;
  color: white;
}
.tabs__div > a {
  color: white  ;
}
</style>
