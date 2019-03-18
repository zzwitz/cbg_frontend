const FETCH_ART_BY_TAG_BEGIN = 'FETCH_ART_BY_TAG_BEGIN'
const FETCH_ART_BY_TAG_SUCCESS = 'FETCH_ART_BY_TAG_SUCCESS'
const FETCH_ART_BY_TAG_FAILURE = 'FETCH_ART_BY_TAG_FAILURE'

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

var initialState = {
  fetchingBool: false,
  tagText: null,
  tagId: null,
  tagArtList:
  { sectionObj:
        [{rowColor:  "inherit",
        title: '',
        artList: artList}]
  },
  errorBool: false,
  errorText: null
}



export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ART_BY_TAG_BEGIN:
      console.log('REDUCER ART TAG FETCH_ART_BY_TAG_BEGIN', action)
      var newVars =  {fetchingBool: true, tagText: action.payload.tagText}
      return { ...state, ...newVars }
    case FETCH_ART_BY_TAG_SUCCESS:
      console.log('REDUCER ART TAG FETCH_ART_BY_TAG_SUCCESS', action)
      var newVars =  {fetchingBool: false, tagArtList: {sectionObj: action.payload.sectionObj}, tagId: action.payload.tagId}
      return { ...state, ...newVars }
    case FETCH_ART_BY_TAG_FAILURE:
      console.log('REDUCER ART TAG FETCH_ART_BY_TAG_FAILURE', action)
      var newVars =  {fetchingBool: false, errorBool: true, errorText: action.payload}
      return { ...initialState, ...newVars }
  }
  return state
 }
