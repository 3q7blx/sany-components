<!--test.vue-->
<template>
  <div class="echojoy-test" @click="handleClick">{{ num }}</div>
</template>

<script>
export default {
  name: 'EchojoyTest',
  data () {
    return {
      num: 0
    }
  },
  methods: {
    handleClick () {
      this.num++
    }
  }
}
</script>

<style >
.echojoy-test {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 30px;
  text-align: center;
  background: #24292e;
  color: white;
}
</style>
