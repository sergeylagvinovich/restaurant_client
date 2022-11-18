import instance from "@/store/axios";

export default {
	namespaced: true,
	state:{
		//VueXState
		tableData:[],
		userinfo:null,
	},
	getters:{
		//VueXGetters
		getTableData(state){
			return state.tableData;
		},
		getUserInfo(state){
			return state.userinfo;
		}
	},
	mutations:{
		//VueXMutations
		setUserInfo(state,value){
			state.userinfo = value;
		},
		setTableData(state,value){
			state.tableData = value;
		},
		setData(state,value){
			state.tableData = value.cart;
			state.userinfo = value.userInfo;
		}

	},
	actions:{
		//VueXActions
        addToCart({commit,dispatch},dishId){
            instance.post(`carts/${dishId}`).then((resp)=>{
                alert("ok");
            }).catch((err)=>{
                alert("Exception");
            })
        },
		getCard({commit,dispatch}){
			instance.get(`carts`).then((resp)=>{
				commit('setData',resp.data)
			}).catch((err)=>{
				alert("Exception");
			})
		},
		toOrder({commit,dispatch,state}){
			let data = {
				cartId:state.tableData.id,
				cartDishes:state.tableData.cartDishes,
				address:state.userinfo.address,
				phone:state.userinfo.phone,
			}
			instance.post(`orders`,data).then((resp)=>{
				commit('setData',resp.data)
			}).catch((err)=>{
				alert("Exception");
			})
		}
	},
}
