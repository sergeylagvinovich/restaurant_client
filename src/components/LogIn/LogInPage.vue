<template>
    <div class="authorization">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3 title-h6 title-color-white"><span>Log In / </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" v-model="isSignUp" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3 title-h4 title-color-white">Log In</h4>
											<div class="form-group">
												<input type="email" v-model="getUserData.email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off">
                                                <iconify-icon icon="uil-at" class="input-icon" ></iconify-icon>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" v-model="getUserData.password" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off">
												<iconify-icon icon="uil-lock-alt" class="input-icon" ></iconify-icon>
											</div>
											<a class="btn mt-4" @click.prevent="submit">submit</a>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3 title-h4 title-color-white">Sign Up</h4>
											<div class="form-group">
												<input type="text" name="logname" class="form-style" v-model="getUserData.userName" placeholder="Your Full Name" id="logname" autocomplete="off">
                                                <iconify-icon icon="uil-user" class="input-icon" ></iconify-icon>
											</div>	
											<div class="form-group mt-2">
												<input type="email" name="logemail" class="form-style" v-model="getUserData.email" placeholder="Your Email" id="logemail" autocomplete="off">
                                                <iconify-icon icon="uil-at" class="input-icon" ></iconify-icon>
											</div>	
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" v-model="getUserData.password" placeholder="Your Password" id="logpass" autocomplete="off">
                                                <iconify-icon icon="uil-lock-alt" class="input-icon" ></iconify-icon>
											</div>
											<a class="btn mt-4" @click.prevent="submit">submit</a>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
</template>
<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "LogInPage",
  computed:{
    isSignUp:{
      get(){
        return this.getSignUp;
      },
      set(value){
        this.setSignUp(value);
      }
    },
    ...mapGetters({
      'getUserData':'authModule/getUserData',
      'getLoading':'authModule/getLoading',
      'getSignUp':'authModule/getSignUp',
    }),
  },
  methods:{
    ...mapMutations({
      'setUserData':'authModule/setUserData',
      'setLoading':'authModule/setLoading',
      'setSignUp':'authModule/setSignUp'
    }),
    ...mapActions({
      'registerUser':'authModule/registerUser',
      'logIn':'authModule/logIn',
    }),
    submit(){
      if(this.getSignUp){
        this.registerUser();
      }else {
        this.logIn();
      }
    }
  }
};
</script>
<style></style>
