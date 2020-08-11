<template>
  <div>
    <input type="text" v-model="inputValue">
    <h1>{{ msg }}</h1>
    <button @click="clickHandler">count is: {{ count }};double is {{double}}</button>
    <ul>
      <li v-for="(item,index) in hobby" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs ,ref, computed, watchEffect } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const { count,state,double,clickHandler } = useMyHobby()
    // let { count,double } = useMyWay()
    
    return {count,...toRefs(state),double,clickHandler }
  }
}
function useMyHobby(){
  let count = ref(0)
  const state = reactive({
    inputValue:'',
    hobby:['eating','sleeping','playing']
  })
  const double = computed(()=> count.value*2)
  watchEffect(()=> console.log(count.value))
  function clickHandler(){
      count.value++
      state.hobby.push(state.inputValue)
    }
  return {count,state,double,clickHandler}
}
</script>
