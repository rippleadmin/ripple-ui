<template>
  <div>
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

    <Pagination v-if="showPaginator" class="mt-8" :links="links" />
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  components: {
    Pagination
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    links: Array,
    showPaginator: Boolean
  }
}
</script>
