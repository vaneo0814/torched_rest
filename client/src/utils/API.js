import axios from "axios";

export default {
  // Gets all menuitem
  getMenuItems: function() {
    return axios.get("/api/menu");
  },
  // Gets the menuitem with the given id
  getMenuItem: function(id) {
    return axios.get("/api/menu/" + id);
  },
  // Deletes the menuitem with the given id
  deleteMenuItem: function(id) {
    return axios.delete("/api/menu/" + id);
  },
  // Saves a menuitem to the database
  saveMenuItem: function(menuData) {
    return axios.post("/api/menu", menuData);
  }
};
