import type { Columns, TableOptions } from "../components/table/@types";
/**
 * 表格数据
 */
const tableData = [
  {
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },{
    id: 0,
    name: "汪婷",
    age: 23,
    description: "一个讨厌代码的大学生",
    sex: "女",
    date: "2023-12-07",
    time: "17:20",
  },
];

const columnOptions: Columns[] = [
  {
    prop: "id",
    label: "用户ID",
  },
  {
    prop: "name",
    label: "姓名",
  },
  {
    prop: "age",
    label: "年龄",
  },
  {
    prop: "sex",
    label: "性别",
    dataType: "options",
    typeList: ["男", "女", "保密"],
    description: "hello world",
  },
  {
    prop: "date",
    label: "日期",
    dataType: "date",
  },
  {
    prop: "time",
    label: "时间",
    dataType: "time",
  },
];

const tableOptions: TableOptions = {
  search: {
    visible: true,
    filters: ["id", "name"],
    tags: true,
  },
  pagination: {
    visible: true,
  },
  topTools: {
    visible: true,
    tools: {
      add: true,
      delete: true,
      export: true
    }
  },
  column: {
    buttonGroup: [
      {
        text: "查看",
        onClick: (item: any) => {
          console.log(item);
        },
        attrs: {
          icon: "Pointer",
          link: true,
        },
      },
    ],
  },
  table: {
    checkBox: true
  }
};

export {
    tableData,
    columnOptions,
    tableOptions
}