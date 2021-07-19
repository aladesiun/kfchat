<template>
        <main>
			<div class="layout">
				<!-- Start of Sign In -->
				<div class="main order-md-1">
					<div class="start">
						<div class="container">
							<div class="col-md-12">
								<div class="content">
									<h1>Sign in to Swipe</h1>
									<div class="third-party">
										<button class="btn item bg-blue">
											<i class="material-icons">pages</i>
										</button>
										<button class="btn item bg-teal">
											<i class="material-icons">party_mode</i>
										</button>
										<button class="btn item bg-purple">
											<i class="material-icons">whatshot</i>
										</button>
									</div>
									<p>or use your email account:</p>
									<form @submit.prevent="Login">
										<div class="form-group">
											<input type="email" id="inputEmail" class="form-control" placeholder="Email Address" required v-model="email">
											<button class="btn icon"><i class="material-icons">mail_outline</i></button>
										</div>
										<div class="form-group">
											<input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="password">
											<button class="btn icon"><i class="material-icons">lock_outline</i></button>
										</div>
										<button type="submit" class="btn button">Sign In</button>
										<div class="callout">
											<span>Don't have account? <router-link to="signup">Create Account</router-link></span>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- End of Sign In -->
				<!-- Start of Sidebar -->
				<div class="aside order-md-2">
					<div class="container">
						<div class="col-md-12">
							<div class="preference">
								<h2>Hello, Friend!</h2>
								<p>Enter your personal details and start your journey with Swipe today.</p>
								<router to="/signup" class="btn button">Sign Up</router>
							</div>
						</div>
					</div>
				</div>
				<!-- End of Sidebar -->
			</div> <!-- Layout -->
		</main>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import {ref} from 'vue';
import firebase from 'firebase';


export default {
    setup() {
    const email = ref("email");
    const password = ref("password");
    
    const Login = ()=>{
      firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(function(data){
          console.log(data);
      })
      .catch(err =>alert(err.message))
    }
    return {
      Login,
      email,
      password
    } 
    },
}
</script>
