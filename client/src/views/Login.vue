<template>
  <div class="container">
      <div class="wraptask animated bounceInLeft">
          <h1>TodoFancy</h1>
          <input class="inputan" type="text" placeholder="Username.." v-model="username">
          <input class="inputan" type="text" placeholder="Password.." v-model="password">
          <button @click="login" class="btn-login">Login</button>
          <button class="btn-register">Register</button>
          <hr>
          <p>login</p>
          <fb:login-button 
              scope="public_profile,email"
              onlogin="checkLoginState();">
          </fb:login-button>
          <button @click="checkLoginState()" class="btn-facebok">Login Facebook</button>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      userProfile: ''
    }
  },
  components: {
  },
  created () {
  },
  computed: {
    ...mapState([
      'token'
    ])
  },
  methods: {
    login () {
      let payload = {
        username: this.username,
        password: this.password
      }
      this.$store.dispatch('loginManual', payload)
        .then(response => {
          console.log('YEAYYY !!!', response)
          this.userProfile = response
          localStorage.setItem('token', response.token)
          swal({
            title: 'Good job!',
            text: 'Welcome to the apllication, Mr ' + response.username,
            icon: 'success'
          })
          if (localStorage.getItem('token')) {
            this.$router.push('/profile')
          }
        })
        .catch(err => {
          console.log(err)
          console.log('Errrorrrrrr')
        })
    },
    checkLoginState () {
      console.log('masuk ke login function')
      FB.getLoginStatus(function(response) {
          console.log(response)
          if(response.status == 'connected') {
              // console.log('status sukses login, save token bro')
              // statusChangeCallback(response);

            FB.api(`/me`, {
                fields: ['email', 'picture', 'name']
            }, function (profile) {
                axios.post('https://todofancyyosa.herokuapp.com/api/user/signfb', {
                  email: profile.email,
                  fullname: profile.name,
                  picture: profile.picture.data.url,
                })
                  .then(responseServer => {
                    // let token = responseServer.data.token
                    // console.log('token---->', token)
                    // localStorage.setItem('token', token)
                    // console.log('data from server----->', responseServer)
                    let data = response.data.data
                    console.log(data)
                    this.userProfile = data
                    localStorage.setItem('token', data.token)
                    swal({
                      title: 'Good job!',
                      text: 'Welcome to the apllication, Mr ' + data.fullname,
                      icon: 'success'
                    })
                    if (localStorage.getItem('token')) {
                      this.$router.push('/profile')
                    }

                  })
                  .catch(err => {
                    console.log(err)
                  })
            })
          }
      })
    }
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Quicksand', sans-serif;
  color: white;
  font-size: 50px;
  margin-bottom: 20px;
}
.inputan {
  padding: 10px;
  border:thin solid black;
  width:100%;
  height: 50px;
  color: black;
  background: yellow;
  margin-bottom: 5px;
  border-radius: 5px;
}
.btn-login {
  padding: 10px;
  border:thin solid black;
  width:100%;
  height: 50px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  background: rgb(255, 174, 0);
  margin-top: 15px;
  text-align: center
}
.btn-register {
  padding: 10px;
  border:thin solid black;
  width:100%;
  height: 50px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  background: #ed6a6a;
  margin-top: 5px;
  text-align: center
}
hr {
  margin: 30px 0px;
  color: yellow;
  background: yellow;
}
.btn-facebok {
  padding: 10px;
  border:thin solid black;
  width:100%;
  height: 50px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  background: rgb(108, 139, 243);
  margin-top: 5px;
  text-align: center
}
.wraptask {
  margin: 30px auto 0 auto;
  width: 60%;
}
@media only screen and (max-width: 600px) {
.wraptask {
  margin: 0 auto;
  width: 90%;
  /* background: teal; */
  }
}
</style>
