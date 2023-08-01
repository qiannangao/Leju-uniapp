let baseURL='';
 if(process.env.NODE_ENV==='development'){
	 baseURL='http://localhost'
	 // baseURL='http://192.168.124.37'
	  // baseURL="http://leju.bufan.cloud"
 }else if(process.env.NODE_ENV==='production'){
	 baseURL="http://leju.bufan.cloud"
 }
 export default baseURL