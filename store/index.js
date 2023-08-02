import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store=new Vuex.Store({
	state:{
		address:{}
	},
	mutations:{
		updateAddress(state,address){
			state.address=address
		}
	},
	actions:{
		
	},
	getters:{
		
	},
})
module.exports=store