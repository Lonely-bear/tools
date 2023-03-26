<script setup lang="ts">
import CustomTable from './components/table/CustomTable.vue'
import { tableData, tableOptions, columnOptions } from './data/test-table'
import { tableData as tableData2, tableOptions as tableOptions2, columnOptions as columnOptions2 } from './data/test-table2'

</script>

<template>
  <el-card>
    <CustomTable :table-data="tableData" :table-options="tableOptions" :column-options="columnOptions" />
  </el-card>
  <el-divider></el-divider>
  <el-card>
    <CustomTable :table-data="tableData2" :table-options="tableOptions2" :column-options="columnOptions2" />
  </el-card>
</template>

<style scoped></style>
