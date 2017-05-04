/**
 * Created by centmaster on 2017/5/4.
 */
const STORAGE_KEY = 'vue-todolist';
export default {
  fetch:function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
  },
  save:function (items) {
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
