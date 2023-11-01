import { useState } from 'react'

import { useFetch } from '@hooks'
import { CardData } from '@components'

interface Post {
  userId?: number
  id?: number
  title?: string
  completed?: boolean
}

const PostData = () => {
  const [count, setCount] = useState(1)

  const { data, error, isFetching } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/todos/${count}`,
  )

  const title = data ? data.title : error ? error.name : null
  const body = data ? `UserId: ${data.userId}, PostId: ${data.id}` : error ? error.message : null

  return (
    <section>
      <h1>Post data</h1>
      <button disabled={count < 2} className="link" onClick={() => setCount(c => c - 1)}>
        Prev
      </button>
      <button disabled={count > 199} className="link" onClick={() => setCount(c => c + 1)}>
        Next
      </button>
      <CardData loading={isFetching} title={title} body={body} />
    </section>
  )
}

export default PostData
