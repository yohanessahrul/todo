<template>
    <div class="container">
        <div class="wraptask">
            <h1>Complete Task</h1>
            <div class="tasklist">
                <ul>
                    <li v-for="(complete, i) in completeTasks" :key="i" class="animated swing">
                        <div class="checklist"></div>
                        <h3> {{ complete.name }} </h3>
                        <h5> {{ complete.description }} </h5>
                        <p class="tgl"> {{ complete.createdAt }} </p>
                        <button class="btndelete" @click="hapusTask(complete._id, i)">x</button>
                    </li>
                    <div class="clear"></div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      checkbox1: true,
      checkbox2: false
    }
  },
  computed: {
    ...mapState([
      'completeTasks'
    ])
  },
  methods: {
    hapusTask (id, index) {
      console.log('hariusnya hapus task id ke-', index)
      let payload = {
        id: id,
        index: index
      }
      this.$store.dispatch('deleteTaskComplete', payload)
      this.$alertify.success('Delete success')
    }
  }
}
</script>

<style scoped>

.checklist {
    width: 60px;
    min-height: 110px;
    background: #fc9f00;
    float: left;
    margin-right: 15px;
}
.wraptask {
  margin: 0 auto;
  width: 60%;
  /* background: teal; */
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
.tasklist {
  margin-top: 30px;
}
.tasklist > ul > li {
    overflow: hidden;
  position: relative;
  border-radius: 5px;
  list-style: none;
  width: 100%;
  float: left;
  background: yellow;
  /* border: thin solid grey; */
  margin-top:8px;
  position: relative;
}
.tasklist > ul > li > h3 {
  font-size: 20px;
  text-align: left;
  padding: 10px 10px 0px 10px;
  font-family: 'Raleway', sans-serif;

}
.tasklist > ul > li > h5 {
  color: #757575;
  font-size: 16px;
  text-align: left;
  padding: 3px 10px 0px 10px;
  font-family: 'Alegreya Sans', sans-serif;
}
.btndelete {
  position: absolute;
  right: 10px;
  top:10px;
  padding: 2px 7px;
  background: #dce004;
  border-radius: 15px;
  color: grey;
}
checkbox {
    width: 50px;
    height: 30px;
    background: purple;
    float: left !important;
}
.tgl {
  display: table;
  color: red;
  font-size: 14px !important;
  text-align: left !important;
  padding: 3px 10px 0px 10px !important;
}
.clear {
  clear: both;
}
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .wraptask {
    margin: 0 auto;
    width: 100%;
    /* background: teal; */
    }
}
</style>
