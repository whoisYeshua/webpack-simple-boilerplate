import React, { useEffect } from 'react'

import * as $ from 'jquery/dist/jquery.min'

import WebpackLogo from '@assets/webpack-logo.webp'
import { PostContent } from './PostContent.js'

const Post = props => {
  useEffect(() => {
    const postContent = new PostContent('Webpack Post Title test', WebpackLogo)

    $('pre').addClass('code').html(postContent.toString())
  }, [])
  return <pre />
}

export default Post