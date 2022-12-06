interface IPostContent {
  date: Date
  title: string
  img: string

  toString(): string
  get uppercaseTitle(): string
}

export class PostContent implements IPostContent {
  date = new Date()
  title
  img

  constructor(title: string, img: string) {
    this.title = title
    this.img = img
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
