import hello from 'hellojs'

export default ({ Vue }) => {
  hello.init({
    facebook: '353450562229396'
  })
  Vue.prototype.$hello = hello
}
