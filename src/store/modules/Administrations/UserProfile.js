import instance from "@/store/axios";
import router from "@/router";

export default {
	namespaced: true,
	state:{
		//VueXState
        loading:true,
		data:null,
		
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
        fetch({state,commit}){
			var url = router.currentRoute.value.path;
			state.loading = true;
			instance.get(url).then((resp)=>{
				commit("setData",resp.data);
				state.loading = false;
			})
        }

	},
}
