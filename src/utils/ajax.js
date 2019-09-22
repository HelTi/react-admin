class AjaxClass {
  constructor(config) {
    this.config = config
    this.initAxios()
  }
  initAxios() {
    console.log(this.config)
  }
  static get() {
    console.log('get', this)
  }

  static post() {
    console.log('post', this)
  }
}

function Ajax(config) {
  if (!(this instanceof Ajax)) {
    return new AjaxClass(config)
  } else {
    return this
  }
}

Ajax.get = AjaxClass.get
Ajax.post = AjaxClass.post

export default Ajax
