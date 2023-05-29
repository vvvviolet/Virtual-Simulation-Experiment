<template>
    <p class="FirstTitle">四、实验心得</p>
  <a-textarea v-model:value="value" placeholder="Basic usage" :rows="20" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
let Data = new Map();
export default defineComponent({
  data() {
    const value = ref<string>('');
    return {
      value,
    };
  },
  created(){
    var text=localStorage.getItem('Experience');
    console.log(text);
    if (text!=null)
    {
        this.value=text
    }
  },
  beforeUnmount(){
    Data.set('Experience',this.value)
    console.log(this.value)
    localStorage.setItem('Experience', Data.get('Experience'))
  }
});
</script>

<style>
.FirstTitle{
  font-family: sans-serif;
  font-size:30px;
}
</style>