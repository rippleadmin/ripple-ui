<template>
  <div>
    <RComponent :value="detail" />
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      required: true
    }
  }
}
</script>
