import instance from "@/store/axios";
export default {
	namespaced: true,
	state:{
		//VueXState
        loading:null,
		data:[],
		
	},
	getters:{
		//VueXGetters
		getLoading(state){
			return state.loading;
		},
		getData(state){
			return state.data;
		},

	},
	mutations:{
		//VueXMutations
		setLoading(state,value){
			state.loading = value;
		},
		setData(state,value){
			state.data = value;
		},

	},
	actions:{
		//VueXActions
        getOrders({commit,state}){
			instance.get("orders/1").then((resp)=>{
				commit('setData',resp.data)
			})
        },
		setOrderStatus({commit,state},data){
			instance.post(`orders/${data.order}/${data.status}/1`).then((resp)=>{
				commit('setData',resp.data)
			})
		},
	},
}

