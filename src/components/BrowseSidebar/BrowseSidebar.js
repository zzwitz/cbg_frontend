import React from 'react';
import './BrowseSidebar.css'
import {makeCategoryLink} from '../Functions/HelperFunctions.js'
import {Link} from 'react-router-dom'

// Creates list item component with React-Router link comp.
class ListItem extends React.Component {
  render() {
    return(
    <Link class = "BrowseSidebarListItem" to = {this.props.link}>
      <div>
        <li id = {this.props.id}> {this.props.title} </li>
        <br/>
      </div>
    </Link>)
  }
}

// Browse sdiebar section
class BrowseSidebarSection extends React.Component {
  render() {
    return(
        <div class = 'BrowseSidebarSection'>
        {// Section title
        }
          <h5> {this.props.sectionTitle} </h5>
          <div class = 'BrowseSidebarSectionContents'>
            <ul class = 'BrowseSidebar'>
            {
              // Mapping section links to bullets
            }
            {this.props.catList.map(cat => (
              <ListItem id = {cat.id} title = {cat.title} link = {cat.link} />
            ))}
            </ul>
          </div>
        </div>

    )
  }
};

//
// creates entire sidebar
class BrowseSidebar extends React.Component {
    render() {
      return(        <div class = 'BrowseSidebarContainer'>
      {// creates sections  and passes data
      }
      {this.props.sectionList.map(
        section => (
        <BrowseSidebarSection sectionTitle = {section.title} catList = {section.catList}/>
    ))}
     <h5> Search </h5>
      <input class = 'StandardInput' placeholder = 'By artist, content, etc' />
      <input type = 'submit'/>
              </div>)
    }
};

// Stateless, receives data from Browse Page
export default BrowseSidebar;
