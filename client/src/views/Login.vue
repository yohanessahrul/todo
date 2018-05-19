<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="info">
                <v-toolbar-title>Login form</v-toolbar-title>
                <!-- <v-spacer></v-spacer> -->
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="login.email"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="login.password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    {{ login.email }}
    {{ login.password }}
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  created () {
    // if (localStorage.getItem('statusLogin') === true) {
    //   this.$store.state.isLogin = true
    // }
  }
}
</script>

<style scoped>

</style>
