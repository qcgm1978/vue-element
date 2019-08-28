<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <div>
      <el-button @click="openFullScreen">Start</el-button>
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
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      setTimeout(() => {
        loading.close();
        this.startHacking();
      }, 2000);
    },
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
