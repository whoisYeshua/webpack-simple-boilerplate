import { useEffect, useRef } from 'react'

import WebpackLogo from '@assets/images/webpack-logo.avif'
import { PostContent } from './PostContent'

const Post = () => {
  const preReference = useRef<HTMLPreElement | null>(null)
  useEffect(() => {
    const preElement = preReference.current
    if (!preElement) return
    const postContent = new PostContent('Webpack Post Title test', WebpackLogo)

    preElement.classList.add('code')
    preElement.innerHTML = postContent.toString()
  }, [])
  return <pre ref={preReference} />
}

export default Post
