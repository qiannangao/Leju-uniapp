let baseURL='';
 if(process.env.NODE_ENV==='development'){
	 baseURL='http://localhost'
 }else if(process.env.NODE_ENV==='production'){
	 baseURL="http://leju.bufan.cloud"
 }
 export default baseURL