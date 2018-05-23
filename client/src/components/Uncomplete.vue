<template>
    <div class="container">
        <div class="wraptask">
            <h1>My Tasklist</h1>
            <div class="tasklist">
                <ul>
                    <li v-for="(uncom, i) in unCompleteTask" :key="i" class="animated bounceInLeft">
                        <div class="checklist">
                            <v-checkbox @click="test(uncom._id, i)"></v-checkbox>
                        </div>
                        <h3> {{ uncom.name }} </h3>
                        <h5> {{ uncom.description }} </h5>
                        <p class="tgl"> {{ uncom.createdAt }} </p>
                        <button class="btndelete" @click="hapusTask(uncom._id, i)">x</button>
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
      checkbox: []
    }
  },
  computed: {
    ...mapState([
      'unCompleteTask'
    ])
  },
  methods: {
    test (id, index) {
      console.log('=======>', id)
      let payload = {
        id: id,
        index: index
      }
      swal("Are you sure you want to do this?", {
        buttons: ["Oh noez!", "Aww yiss!"],
      }, 
      this.$store.dispatch('checklistTask', payload))
      // this.$alertify.success('Task complete')
    },
    hapusTask (id, index) {
      let payload = {
        id: id,
        index: index
      }
      this.$store.dispatch('deleteTaskUncomplete', payload)
      this.$alertify.success('Delete success')
    }
  }
}
</script>

<style scoped>

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
.checklist {
    width: 60px;
    min-height: 110px;
    background: #fc9f00;
    float: left;
    margin-right: 15px;
}
.checkbox {
    display: table;
    margin-top: 30px;
    margin-left: 17px;
}
.tasklist > ul > li {
  border-radius: 5px;
  list-style: none;
  width: 100%;
  float: left;
  background: yellow;
  /* border: thin solid grey; */
  margin-top:8px;
  overflow: hidden;
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
@media only screen and (max-width: 678px) {
    .wraptask {
    margin: 0 auto;
    width: 100%;
    /* background: teal; */
    }
}
</style>
