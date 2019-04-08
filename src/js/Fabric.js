import Helper from './Helper';

export default {
  data() {
    return {
      hello: "Hello World"
    }
  },

  mounted() {
    Helper.init();
  }
}