<template>
  <div>
    <div class="text-h3">Esto es Home</div>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
  },
};
</script>
