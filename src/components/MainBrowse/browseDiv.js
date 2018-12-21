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
            <BrowseBoard/>
          </div>
        </div>
      </div>
    )
  }
}


export default BrowseDiv
