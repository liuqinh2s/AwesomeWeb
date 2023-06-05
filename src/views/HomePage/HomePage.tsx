import React from "react";
import { CategoryBar } from '../../components/CategoryBar/CategoryBar'
import { Block } from '../../components/Block/Block'
import { useParams } from 'react-router-dom';
import { video, book, category } from "../../data";


export const HomePage = () => {
  const params = useParams();
  console.log(params)
  const getData = () => {
    switch (params.id) {
      case undefined:
      case 'video':
        return video;
      case 'ebook':
        return book;
      default:
        return [];
    }
  }
  const getIndex = () => {
    switch (params.id) {
      case undefined:
      case 'video':
        return 0;
      case 'ebook':
        return 1;
      case 'music':
        return 2;
      case 'picture':
        return 3;
      case 'article':
        return 4;
      case 'rss':
        return 5;
      default:
        return 0;
    }
  }
  return <>
    <CategoryBar list={category} index={getIndex()}></CategoryBar>
    <Block data={getData() as any}></Block>
  </>
}