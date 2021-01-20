<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns">
          {{ column.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data">
        <td v-for="column in columns">
          {{ item[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: {
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
