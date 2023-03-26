import type { Columns, TableOptions } from "../components/table/@types";
/**
 * 表格数据
 */
const tableData = [
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
    date: "2022-12-07",
    time: "17:20",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
  {
    id: 0,
    name: "王康",
    age: 22,
    description: "一个热爱前端的大学生",
    sex: "男",
  },
];

const columnOptions: Columns[] = [
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
    filters: ["sex", "date"],
    tags: true,
  },
  pagination: {
    visible: true,
    attrs: {
      small: false,
      nextText: "下一页",
    },
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
      {
        text: "编辑",
        onClick: (item: any) => {
          console.log(item);
        },
        attrs: {
          icon: "Edit",
          type: "primary",
          link: true,
        },
      },
      {
        text: "删除",
        onClick: (item: any) => {
          console.log(item);
        },
        attrs: {
          icon: "Delete",
          type: "danger",
          link: true,
        },
      },
    ],
  },
};

export {
    tableData,
    columnOptions,
    tableOptions
}