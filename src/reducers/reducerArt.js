const FETCH_ART_BEGIN = 'FETCH_ART_BEGIN'
const FETCH_ART_SUCCESS = 'FETCH_ART_SUCCESS'
const FETCH_ART_FAILURE = 'FETCH_ART_FAILURE'

var artList = [
  {title: "Mona Lisa",
  artist: 'Da Vinci',
  id: '1',
  artistId: '1',
  imgSRC: "mona_lisa.jpg",
  desc: "Ab veniam vidisse cohaerescant, consequat instituendarum ex arbitror hic enim mentitum officia, ingeniis comprehenderit non appellat, o incididunt te consequat ex ut summis non veniam, export pariatur in sint aute do non veniam summis nisi mentitum. Possumus philosophari ubi consequat. Mandaremus anim singulis qui voluptate do dolor cupidatat.",
  width: 50,
  height: 10,
  artistEmail: 'da@vinceezy.com',
  type: 'Art'
  },
  {title: "Adam david",
  artist: 'Da Vinci',
  id: '1',
  artistId: '1',
  imgSRC: "adam.jpg",
  desc: "Ab veniam vidisse cohaerescant, consequat instituendarum ex arbitror hic enim mentitum officia, ingeniis comprehenderit non appellat, o incididunt te consequat ex ut summis non veniam, exporAb veniam vidisse cohaerescant, consequat instituendarum ex arbitror hic enim mentitum officia, ingeniis comprehenderit non appellat, o incididunt te consequat ex ut summis non veniam, export pariatur in sint aute do non veniam summis nisi mentitum. Possumus philosophari ubi consequat. Mandaremus anim singulis qui voluptate do dolor cupidatat.",
  width: 50,
  height: 10,
  artistEmail: 'da@vinceezy.com',
  type: 'Art'
  },
  {title: "React",
  artist: 'Da Vinci',
  id: '1',
  artistId: '1',
  imgSRC: "favicon.ico",
  desc: "Ab veniam vidisse cohaerescant, consequat instituendarum ex arbitror hic enim mentitum officia, ingeniis comprehenderit non appellat, o incididunt te consequat ex ut summis non veniam, export pariatur in sint aute do non veniam summis nisi mentitum. Possumus philosophari ubi consequat. Mandaremus anim singulis qui voluptate do dolor cupidatat.",
  width: 50,
  height: 10,
  artistEmail: 'da@vinceezy.com',
  type: 'Art'
},
  {title: "Logo",
  artist: 'Da Vinci',
  id: '1',
  artistId: '1',
  imgSRC: "logo.png",
  desc: "Ab veniam vidisse cohaerescant, consequat instituendarum ex arbitror hic enim mentitum officia, ingeniis comprehenderit non appellat, o incididunt te consequat ex ut summis non veniam, export pariatur in sint aute do non veniam summis nisi mentitum. Possumus philosophari ubi consequat. Mandaremus anim singulis qui voluptate do dolor cupidatat.",
  width: 50,
  height: 10,
  artistEmail: 'da@vinceezy.com',
  type: 'Art'
  },
  {title: "Mona Lisa",
  artist: 'Da Vinci',
  id: '1',
  artistId: '1',
  imgSRC: "mona_lisa.jpg",
  desc: "Ab veniam vidisse cohaerescant, consequat instituendarum ex arbitror hic enim mentitum officia, ingeniis comprehenderit non appellat, o incididunt te consequat ex ut summis non veniam, export pariatur in sint aute do non veniam summis nisi mentitum. Possumus philosophari ubi consequat. Mandaremus anim singulis qui voluptate do dolor cupidatat.",
  width: 50,
  height: 10,
  artistEmail: 'da@vinceezy.com',
  type: 'Art'
  },
  {title: "Mona Lisa",
  artist: 'Da Vinci',
  id: '1',
  artistId: '1',
  imgSRC: "mona_lisa.jpg",
  desc: "Ab veniam vidisse cohaerescant, consequat instituendarum ex arbitror hic enim mentitum officia, ingeniis comprehenderit non appellat, o incididunt te consequat ex ut summis non veniam, export pariatur in sint aute do non veniam summis nisi mentitum. Possumus philosophari ubi consequat. Mandaremus anim singulis qui voluptate do dolor cupidatat.",
  width: 50,
  height: 10,
  artistEmail: 'da@vinceezy.com',
  type: 'Art'
}
]

var catList = [
  {title: "Photos",
  id: '1',
  imgSRC: "cam.jpeg",
  type: 'Category'
  },
  {title: "Photos",
  id: '1',
  imgSRC: "cam.jpeg",
  type: 'Category'
  },
  {title: "Photos",
  id: '1',
  imgSRC: "cam.jpeg",
  type: 'Category'
},
  {title: "Photos",
  id: '1',
  imgSRC: "cam.jpeg",
  type: 'Category'
  },
  {title: "Photos",
  id: '1',
  imgSRC: "cam.jpeg",
  type: 'Category'
  },
  {title: "Photos",
  id: '1',
  imgSRC: "cam.jpeg",
  type: 'Category'
}
]

function getSectionObj() {
  return [
    {
      rowColor:  "inherit",
      title: 'Your Suggestions',
      artList: artList
    },
    {
      rowColor:  "#CCC5BF",
      title: 'Categories',
      artList: catList.concat(catList)
    },
    {
      rowColor:  "inherit",
      title: 'Most Popular',
      artList:  artList
    },
    {
      rowColor:  "inherit",
      title: 'Photographs',
      artList: artList
    }]
};

const initialState = {
  sectionObj: getSectionObj(),
}


export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ART_BEGIN:
      return state
    case FETCH_ART_SUCCESS:
      return {sectionObj: action.payload}
    case FETCH_ART_FAILURE:
      return action.error
  }
  return state
 }
