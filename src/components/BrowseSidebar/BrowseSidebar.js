import React from 'react';
import './BrowseSidebar.css'
import {makeCategoryLink} from '../Functions/HelperFunctions.js'
import {Link} from 'react-router-dom'


class ListItem extends React.Component {
  render() {
    return(
    <Link class = "BrowseSidebarListItem" to = {makeCategoryLink(this.props.id)}>
      <div>
        <li id = {this.props.id}> {this.props.title} </li>
        <br/>
      </div>
    </Link>)
  }
}

class BrowseSidebarSection extends React.Component {
  render() {
    return(
      <div class = 'BrowseSidebarSection'>
        <h5> {this.props.sectionTitle} </h5>
        <div class = 'BrowseSidebarSectionContents'>
          <ul class = 'BrowseSidebar'>
          {this.props.catList.map(cat => (
            <ListItem id = {cat.id} title = {cat.title} />
          ))}
          </ul>
        </div>
      </div>

    )
  }
};

class BrowseSidebar extends React.Component {
    render() {
      return(        <div class = 'BrowseSidebarContainer'>
      {this.props.sectionList.map(section => (
        <BrowseSidebarSection sectionTitle = {section.title} catList = {section.catList}/>
    ))}
              </div>)
    }
};


export default BrowseSidebar;
