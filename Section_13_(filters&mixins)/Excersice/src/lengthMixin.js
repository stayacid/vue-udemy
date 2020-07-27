export const lengthMixin = {
  computed: {
    lengthFromMixin() {
      return this.text2 + ' ' + '(' + this.text2.length +')';
    }
  }
}