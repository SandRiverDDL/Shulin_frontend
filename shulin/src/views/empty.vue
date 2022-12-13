<template>
  <div class="home">
    <navi></navi>
    <el-empty style="margin-left: 0"></el-empty>
  </div>
</template>

<script>
// @ is an alias to /src
import Navi from "@/components/navi";

export default {
  name: 'emptyView',
  components: {
    Navi,
  }
}
</script>
