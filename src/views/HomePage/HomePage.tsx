import React from "react";
import { CategoryBar } from '../../components/CategoryBar/CategoryBar'
import { Block } from '../../components/Block/Block'
import { useParams } from 'react-router-dom';
import { video } from "../../data";


export const HomePage = () => {
  const params = useParams();
  console.log(params)
  return <>
    <CategoryBar list={[{ title: '视频', path: 'video' }, { title: '电子书', path: 'ebook' }, { title: '音乐', path: 'music' }, { title: '图片', path: 'picture' }, { title: '文章', path: 'article' }, { title: 'RSS', path: 'rss' }]}></CategoryBar>
    <Block data={video}></Block>
  </>
}