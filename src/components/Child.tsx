import { defineComponent } from 'vue'
  
export default defineComponent({
  name: 'Child',
  // setup () {
  //  return () => <h2>vue tsx!</h2>
  // }
  methods: {
    say() {
      this.$message.success("halo tsx")
    }
  },
  render() {
    return (
      <h2 onClick={this.say}>vue tsx!</h2>
    )
  }
})
