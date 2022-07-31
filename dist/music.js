const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  loop: 'all',
  order: 'list',
  theme: '#000000',
  // lrcType: 3,
  audio: [
    // {
    //   name: '未来は風のように',
    //   artist: 'Liella! (リエラ)',
    //   url: '/Music/未来は風のように.mp3',
    //   cover: 'http://imge.kugou.com/stdmusic/150/20210824/20210824174022614207.jpg',
    //   lrc: '/Music/未来は風のように-Liella! (リエラ).lrc',
    // },
    // {
    //   name: 'Tiny Stars',
    //   artist: 'Liella! (リエラ)',
    //   url: '/Music/伊達さゆり _ Liyuu - Tiny Stars.mp3',
    //   cover: 'http://imge.kugou.com/stdmusic/150/20210826/20210826131707870364.jpg',
    //   lrc: '/Music/Tiny Stars-Liella! (リエラ).lrc',
    // },
    // {
    //   name: 'STAY (Explicit)',
    //   artist: 'Liella! (リエラ)',
    //   url: '/Music/The Kid LAROI _ Justin Bieber - STAY (Explicit).mp3',
    //   cover: 'http://imge.kugou.com/stdmusic/150/20210707/20210707093402501637.jpg',
    //   lrc: '/Music/Stay-The Kid LAROI.lrc',
    // },
    // 3b1b OST
    // {
    //   name: 'Quaternions',
    //   artist: 'Vincent Rubinetti',
    //   url: '/Music/Vincent Rubinetti - Quaternions.mp3',
    //   cover: '/Music/The Music of 3Blue1Brown.jpg',
    // },
    {
      name: 'Eutopia',
      artist: '法元明菜',
      url: '/music/法元明菜Eutopia.mp3',
      cover: '/music/法元明菜Eutopia.jpg',
      lrc: '/music/法元明菜Eutopia.lrc',
    },
  ]
});