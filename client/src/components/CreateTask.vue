<template>
    <div class="container">
        <div class="wraptask bounceInDown">
            <h1>Create Task</h1>
            <div class="tasklist">
                <div class="inputan">
                    <ul>
                        <li>
                            <input style="padding: 10px; border:thin solid black; width:100%; height: 50px; color: black;" type="text" placeholder="New Task.." v-model="name">
                            <input style="padding: 10px; border:thin solid black; width:100%; height: 50px; color: black;" type="text" placeholder="Description" v-model="description">
                        </li>
                        <li>
                            <button style="padding: 10px; border:thin solid black; width:100%; height: 50px; background: #ff9000 !important; color: white; font-size: 20px;" @click="saveTask">SAVE</button>
                        </li>
                    </ul>
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
      description: ''
    }
  },
  methods: {
    saveTask () {
      console.log('masuk fungsi')
      console.log(this.name, ' = ', this.description)
      let payload = {
        name: this.name,
        description: this.description
      }
      this.$store.dispatch('saveTask', payload)
      this.$alertify.success('Create task success')
      this.name = ''
      this.description = ''
    }
  }
}
</script>
<style scoped>
.wraptask {
  margin: 0 auto;
  width: 60%;
}
.wraptask > h1 {
  font-size: 35px;
  margin-top: 20px;
  color: yellow !important;
  font-family: 'Crete Round', serif;
}
.padding-top {
  margin-top: 30px;
}
.inputan {
  margin-top: 30px;
  width: 100%;
}
.inputan > ul > li {
  border-radius: 5px;
  list-style: none;
  width: 100%;
  float: left;
  background: yellow;
  /* border: thin solid grey; */
  margin-top:8px;
  overflow: hidden;
}
/* .inputtask {
  font-size: 20px;
  padding: 10px;
  margin-top: 30px;
  width: 80%;
  border: 3px solid #c4c4c4;
} */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .wraptask {
    margin: 0 auto;
    width: 100%;
    /* background: teal; */
    }
}
</style>
