<template>
  <div>
    <RComponent :value="table" />
  </div>
</template>

<script>
export default {
  props: {
    table: {
      type: Object,
      required: true
    }
  }
}
</script>
