<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <XdButton>default</XdButton>
    <xd-button type="primary">primary</xd-button>
    <xd-button type="warning">warning</xd-button>
    <xd-button type="success">success</xd-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
