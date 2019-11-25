import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      list: [
      {name: "Go to the gym", priorityLevel: "Low"},
      {name: "Cook lunch", priorityLevel: "High"},
      {name: "Finish homework", priorityLevel: "Low"}
      ],
      newItem: "",
      newPriority: ""
    },
    methods: {
      saveNewItem: function () {
        this.list.push({name: this.newItem, priorityLevel: this.newPriority});
        this.newItem = "";
        this.newPriority = "";
      }
    }
  });
});
