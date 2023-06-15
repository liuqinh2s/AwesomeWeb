import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import { music } from '../../data'
import ReactPlayer from 'react-player'

export const MusicPage = () => {
  console.log(music)
  return <>
    <ReactPlayer url='https://rl01.sycdn.kuwo.cn:80/c2e33c9b9ba7ce12e508e3666bb89e89/64857847/resource/n2/28/14/855411375.mp3' />
    {/* <ReactPlayer playing url={music.map(x=>x.musicSrc)} /> */}
  </>
}