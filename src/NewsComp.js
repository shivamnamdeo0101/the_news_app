import React ,{useState,useEffect}from "react";
import Loading from "./Loading";
import './App.css';
import moment from "moment";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function NewsComp({item}) {


	const [post_url, set_post_url] = useState("");

	const style = {
	  position: 'absolute',
	  top: '50%',
	  left: '50%',
	  transform: 'translate(-50%, -50%)',
	  width: 400,
	  bgcolor: 'background.paper',
	  border: '2px solid #000',
	  boxShadow: 24,
	  p: 4,
	};
	const [open, setOpen] = React.useState(false);
 	 const handleOpen = (id) => {

 	 setOpen(true);
 	 console.log(id);
 	 set_post_url(id);
 	}
    const handleClose = () => setOpen(false);



	return (

		<div>
		      <Modal
		        open={open}
		        onClose={handleClose}
		        aria-labelledby="modal-modal-title"
		        aria-describedby="modal-modal-description"
		      >
		        <Box sx={style}>
		          <Typography id="modal-modal-title" variant="h6" component="h2">
		           
		          	<iframe src={post_url} title="web url"></iframe>

		          </Typography>
		          
		        </Box>
		      </Modal>
			<div className="news_comp" onClick={()=>handleOpen(item.webUrl)}>
				<p>{moment(item.webPublicationDate).fromNow()}</p>
				<h1>{item.webTitle}</h1>
				<h4>Post URL : <a href={item.webUrl}>{item.webUrl}</a></h4>
			</div>
		</div>
	)
}

export default NewsComp