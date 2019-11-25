import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      list: ["Go to the gym", "Cook lunch", "Finish homework"],
      newItem: ""
    },
    methods: {
      saveNewItem: function () {
        this.list.push(this.newItem);
        this.newItem = "";
      }
    }
  });
});
