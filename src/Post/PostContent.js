export class PostContent {
  constructor(title, img) {
    this.title = title
    this.img = img
    this.date = new Date()
  }

  toString() {
    return JSON.stringify(
      {
        title: this.title,
        date: this.date.toJSON(),
        img: this.img,
      },
      undefined,
      2
    )
  }

  get uppercaseTitle() {
    return this.title.toUpperCase()
  }
}
