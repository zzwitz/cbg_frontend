import React from 'react';
import './browseDiv2.css';
import BrowseSidebar from '../BrowseSidebar/BrowseSidebar.js'
import BrowseBoard from '../BrowseBoard/BrowseBoard.js'

var daVinci =  {
  title: 'Da Vinci',
  id: 1
};
var picasso = {
  title :'Piasso',
  id: 2
}
var bobRoss = {
  title : 'Bob Ross',
  id : 3
}
var larryPalmer = {
  title : 'Larry Palmer',
  id : 4
}
var sculpture = {
  title : 'Sculpture',
  id : 5
}
var photography = {
  title : 'Photography',
  id : 6
}
var painting = {
  title : 'Painting',
  id : 7
}
var fashion = {
  title : 'Fashion',
  id : 8
}


var sectionOne = {
  title:'Artists',
  catList:[daVinci, picasso, bobRoss, larryPalmer]
}
var sectionTwo = {
  title :'Mediums',
  catList:[sculpture, photography,painting, fashion]
}


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
  return([
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
    }])
};

function getSidebar() {
  return([sectionOne, sectionTwo])
};

class BrowseDiv extends React.Component {
  render() {
    return(
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-2">
            <BrowseSidebar sectionList = {getSidebar()}/>
          </div>
          <div class="col-md-10">
            <BrowseBoard sectionList = {getSectionObj()}/>
          </div>
        </div>
      </div>
    )
  }
}


export default BrowseDiv
