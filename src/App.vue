<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <el-button @click="startHacking">Start</el-button>
      <el-button @click="visible = true">Button</el-button>
      <el-dialog :visible.sync="visible" title="Hello world">
        <p>Try Element</p>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return { visible: false };
  },
  methods: {
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000
      });
    }
  }
};
</script>

<style>
body {
  background: yellowgreen;
}
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
