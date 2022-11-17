import instance from "@/store/axios";

export default {
	namespaced: true,
	state:{
		//VueXState
        tableData:[],
		loading:true,
		newDish:null,
		
	},
	getters:{
		//VueXGetters
		getTableData(state){
			
			return state.tableData;
		},
		getLoading(state){
			return state.loading;
		},
		getNewDish(state){
			return state.newDish;
		},

	},
	mutations:{
		//VueXMutations
		setTableData(state,value){
			state.tableData = value;
		},
		setLoading(state,value){
			state.loading = value;
		},
		setNewDish(state,value){
			state.newDish = value;
		},

	},
	actions:{
		//VueXActions
        getDishesByType({state,dispatch,commit},type){
			state.loading = true;
            instance.get(`dishes/type/${type}`).then((resp)=>{
				commit("setTableData",resp.data);
				state.loading = false;
				console.log(resp.data);
			})
        }
	},
}
