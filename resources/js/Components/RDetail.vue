<template>
  <div>
    <div v-for="field in fields">
      <div>{{ field.label }}：{{ data[field.key] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fields: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
