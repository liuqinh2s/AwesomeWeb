export interface Video {
  name: string,  // 片名
  source: string,  // 播放源
  cover: string,  // 封面
  score: number,  // 评分
  details: {
    directors: string[],  // 导演
    actors: string[],  // 演员
    types: string[],  // 类型
    region: string,  // 地区
    alias: string[],  // 别名
    intro: string,  // 剧情简介
    scriptwriter: string[],  // 编剧
    date: string,  // 上映日期
    duration: string,  // 片长
    language: string,  // 语言
    IMDB: string,  // 编号
  }
}