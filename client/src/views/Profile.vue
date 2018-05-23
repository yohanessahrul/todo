<template>
    <div class="container">
        <div class="wraptask">
            <!-- <h1>Profile</h1> -->
            <p></p>
            <div class="avatars animated bounceInLeft">
                <div class="gambar">
                    <img src="" alt="">
                </div>
                <h1> {{ name }} </h1>
            </div>
            <div class="content animated bounceInLeft">
                <div class="buttongroup">
                    <button @click="gotToABout">Create Todo</button>
                    <button @click="logout">Logout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      picture: '',
      id: ''
    }
  },
  created () {
    if (!localStorage.getItem('token')) {
      this.$router.push('/')
    }
    this.name = localStorage.getItem('fullname')
    this.email = localStorage.getItem('email')
  },
  methods: {
    gotToABout () {
      this.$router.push('/about')
    },
    logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('fullname')
      localStorage.removeItem('id')
      localStorage.removeItem('email')
      localStorage.removeItem('picture')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.wraptask {
  margin: 30px auto 0 auto;
  width: 60%;
  /* height: 500px; */
  /* background: yellow; */
}
.avatars {
  display: table;
  width: 100%;
  padding-bottom: 20px;
  /* height: 300px; */
  margin-top: 10px !important;
  /* background: orangered; */
}
.gambar {
  border-radius: 20px;
  width: 150px;
  height: 150px;
  margin: 40px auto 20px auto;
  background: yellow;
  overflow: hidden;
}
.gambar > img {
  width: 100%;
  height: 100%;
}
.buttongroup {
  width: 100%;
  height: 100px;
  /* background: red; */
}
.buttongroup > button {
  border-radius: 5px;
  width: 70%;
  margin-bottom: 10px;
  padding: 10px;
  background: yellow;
  border: none;
}
@media only screen and (max-width: 600px) {
.wraptask {
  margin: 0 auto;
  width: 100%;
  /* background: teal; */
  }
}
</style>
