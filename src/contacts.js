import React from 'react';
import App from './App.js';
import ReactDOM from 'react-dom';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

const style = {
	           div1:{
				   width:'100%',
				   height:'60px',
				   backgroundColor:'#F2F3F4',
				   display:'inline-block',
				   border:'1px solid #D7DBDD',
			   },
			   div2:{
				   width:'100%',
				   height:'581px',
				   display:'inline-block',
				   border:'1px solid #D7DBDD',
				   overflowY:'scroll',
				   marginTop:'0px'
			   },
			    logo:{
		             width:'40px',
		             height:'40px',
					  float:'left',
					  backgroundColor:'Transparent',
					  border:'none',
					  cursor:'pointer',
					  outline:'none',
					  marginTop:'5px',
					  marginLeft:'10px',
					  borderRadius:'50%'
	                },
			    button:{
				      color:'black',
					  backgroundColor:'Transparent',
					  border:'none',
					  cursor:'pointer',
					  fontFamily:'Arial',
					  fontSize:'small',
					  letterSpacing:'2px',
					  outline:'none',
					  marginTop:'22px',
					  marginLeft:'200px'
					  
			       }
			  
};


class Contacts extends React.Component{

state={
	contacts:['HPDF','Rahul','Garima','Himanshi','Rishav','Roopa','Yashk','Shiva','Vaibhav','Saurabh','Tushar','Hitesh','Harsh','Praveen','Khushi'],
	img:['https://hasura.io/rstatic/resources/logo/Hasura-face-new.png',
	 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTav-zfRGcfzetszy6uKJ3OCa0NKvWx6jDHOz7Dxal74L7hfdnr',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xARRTMUNqL8Ir--6-ro-G5uV5LnZqHl7M3m_iYECjDHpfiMNRQ',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yAxmzVWHWr4CA_6_8ZtBBwUifL6KKhamiytrz6WSIivGaf_qSA',
	'https://pbs.twimg.com/media/Cs2GcQyUIAAXPzN.jpg',
	'https://magajo.com/wp-content/uploads/2017/03/jeune-femme-810x540.jpeg',
	'http://cdn.primedia.co.za/primedia-broadcasting/image/upload/c_fill,g_faces,h_363,w_323/jhvr1cz8sutlbwdysnre',
	'https://img.etimg.com/thumb/msid-63172827,width-300,resizemode-4,imgsize-101158/.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrkg7O2zI_Zh8nUFCl3Q1fNkm1nCfZg7RdGnMcm1qfGGM1GPX2AA',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT56lEbY44-4dzcWqwhIB9VQMqI_YkjWmTxt1ll_IdeXSzPX2d_',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe3sCrt6ahI2xBQDmhlKbY9bcWT2O3bQ3hBz4xrQ9BnDjJk4Ki',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhiV4fs47BdZDReO35Dd7Uzu8Dk6IgYXh_MV2T_hfWmGhLIOg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPKHn0dWtIjgZipjeothjJ81uWu9B4vOxdb5n79ivNchTVf0Xt',
	'https://i.kinja-img.com/gawker-media/image/upload/s--uiV_-UZY--/c_scale,fl_progressive,q_80,w_800/zfngcxw7ozst4dpzqvpd.jpg',
	'http://www.neoma-bs.com/academ/image_157.jpeg']
};


	
handleClick=()=>{
		ReactDOM.render(<App/>,document.getElementById('root'));
	    };

render(){
	return(
	<div>
         <div style={style.div1}>
		       <button style={style.logo} ><img style={style.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVUPtECfQ8dtJGSx3m3g89gMvYRKtwUtDIJVjisRQ7YJhKF30d"
                  			   alt='not found'/></button>
			  <button style={style.button} onClick={this.handleClick}>LOGOUT</button>
         </div>
        <div style={style.div2}>
			
		    <List>
                  <ListItem primaryText={this.state.contacts[0]}  leftAvatar={<Avatar src={this.state.img[0]} />} />
                  <ListItem primaryText={this.state.contacts[1]}  leftAvatar={<Avatar src={this.state.img[1]} />} />
                  <ListItem primaryText={this.state.contacts[2]}  leftAvatar={<Avatar src={this.state.img[2]} />} />
                  <ListItem primaryText={this.state.contacts[3]}  leftAvatar={<Avatar src={this.state.img[3]} />} />
				  <ListItem primaryText={this.state.contacts[4]}  leftAvatar={<Avatar src={this.state.img[4]} />} />
				    <ListItem primaryText={this.state.contacts[5]}  leftAvatar={<Avatar src={this.state.img[5]} />} />
                  <ListItem primaryText={this.state.contacts[6]}  leftAvatar={<Avatar src={this.state.img[6]} />} />
                  <ListItem primaryText={this.state.contacts[7]}  leftAvatar={<Avatar src={this.state.img[7]} />} />
                  <ListItem primaryText={this.state.contacts[8]}  leftAvatar={<Avatar src={this.state.img[8]} />} />
				  <ListItem primaryText={this.state.contacts[9]}  leftAvatar={<Avatar src={this.state.img[9]} />} />
				    <ListItem primaryText={this.state.contacts[10]}  leftAvatar={<Avatar src={this.state.img[10]} />} />
                  <ListItem primaryText={this.state.contacts[11]}  leftAvatar={<Avatar src={this.state.img[11]} />} />
                  <ListItem primaryText={this.state.contacts[12]}  leftAvatar={<Avatar src={this.state.img[12]} />} />
                  <ListItem primaryText={this.state.contacts[13]}  leftAvatar={<Avatar src={this.state.img[13]} />} />
				  <ListItem primaryText={this.state.contacts[14]}  leftAvatar={<Avatar src={this.state.img[14]} />} />
				  
            </List>
		   
         </div>		 
	</div>
   );
 }
}

export default Contacts;