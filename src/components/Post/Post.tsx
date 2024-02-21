import { useEffect } from 'react'
import { $ } from 'jquery'

import WebpackLogo from '@assets/images/webpack-logo.avif'
import { PostContent } from './PostContent'

const Post = () => {
  useEffect(() => {
    const postContent = new PostContent('Webpack Post Title test', WebpackLogo)

    $('pre').addClass('code').html(postContent.toString())
  }, [])
  return <pre />
}

export default Post
