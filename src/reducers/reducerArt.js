
// Creating string constants to declutter code
const FETCH_ART_BEGIN = 'FETCH_ART_BEGIN'
const FETCH_ART_SUCCESS = 'FETCH_ART_SUCCESS'
const FETCH_ART_FAILURE = 'FETCH_ART_FAILURE'

// Establishes initial state with fake art
var artList = [
  {title: "Loading...",
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
  {title: "Loading...",
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
  {title: "Loading...",
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
{title: "Loading...",
artist: 'Da Vinci',
id: '1',
artistId: '1',
imgSRC: "favicon.ico",
desc: "Ab veniam vidisse cohaerescant, consequat instituendarum ex arbitror hic enim mentitum officia, ingeniis comprehenderit non appellat, o incididunt te consequat ex ut summis non veniam, export pariatur in sint aute do non veniam summis nisi mentitum. Possumus philosophari ubi consequat. Mandaremus anim singulis qui voluptate do dolor cupidatat.",
width: 50,
height: 10,
artistEmail: 'da@vinceezy.com',
type: 'Art'
}]

// Exports for other art pages to use
export function getFakeLoadingArt() {
  return [
    {
      rowColor:  "inherit",
      title: 'Loading Art...',
      artList: artList
    }]
};

// Sets intiial state with jsut sectionObj
// [TO CHANGE] ADD FAILURE / LOADING STATES
const initialState = {
  sectionObj: getFakeLoadingArt(),
  fetchArtSuccess: false,
  fetchingArt: false,
  fetchArtFailure: false,
  error: null,
}

//
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ART_BEGIN:
      var newVars =  {fetchingArt: true}
      return { ...state, ...newVars }
    case FETCH_ART_SUCCESS:
      return {sectionObj: action.payload}
      var newVars =  {fetchingArt: false, fetchArtSuccess:true, sectionObj: action.payload}
      return { ...state, ...newVars }
    case FETCH_ART_FAILURE:
      var newVars =  {fetchingArt: false, fetchArtFailure: true, error: action.error}
      return { ...state, ...newVars }
  }
  return state
 }
