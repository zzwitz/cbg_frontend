var artList = [
  {title: "Organ Pipe Cactus Sunset",
  artist: "Eric Rosenwald",
  id: 1,
  artistId:1,
  imgSRC: "organ_pipe_cacut_sunset_by_eric_rosenwald.jpg",
  desc: "Ab veniam vidisse coha,erescant, consequat instituendarum ex arbitror hic enim mentitum officia, ingeniis comprehenderit non appellat, o incididunt te consequat ex ut summis non veniam, export pariatur in sint aute do non veniam summis nisi mentitum. Possumus philosophari ubi consequat. Mandaremus anim singulis qui voluptate do dolor cupidatat.",
  width: 15,
  height: 25,
  medium:"Photographs",
  artistEmail: "eric@rose.com",
  type: "Art",
  tags: ["Photo", "Nature", "Plants", "Bright", "Green", "Blue"]
  }
]

var http = require('http');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
