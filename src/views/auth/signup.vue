<template>
    <main>
			<div class="layout">
				<!-- Start of Sign Up -->
				<div class="main order-md-2">
					<div class="start">
						<div class="container">
							<div class="col-md-12">
								<div class="content">
									<h1>Create Account</h1>
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
									<p>or use your email for registration:</p>
									<form class="signup" @submit.prevent="Register">
										<div class="form-parent">
											<!-- <div class="form-group">
												<input type="text" id="inputName" class="form-control" placeholder="Username" v-model="username" required>
												<button class="btn icon"><i class="material-icons">person_outline</i></button>
											</div> -->
											<div class="form-group">
												<input type="email" id="inputEmail" class="form-control" placeholder="Email Address" v-model="email" required>
												<button class="btn icon"><i class="material-icons">mail_outline</i></button>
											</div>
										</div>
										<div class="form-group">
											<input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password" required>
											<button class="btn icon"><i class="material-icons">lock_outline</i></button>
										</div>
										<button type="submit" class="btn button" >Sign Up</button>
										<div class="callout">
											<span>Already a member? <router-link to="/login">Sign In</router-link></span>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- End of Sign Up -->
				<!-- Start of Sidebar -->   
				<div class="aside order-md-1">
					<div class="container">
						<div class="col-md-12">
							<div class="preference">
								<h2>Welcome Back!</h2>
								<p>To keep connected with your friends please login with your personal info.</p>
								<router-link to="login" clrouter-linkss="btn button">Sign In</router-link>
							</div>
						</div>
					</div>
				</div>
				<!-- End of Sidebar -->
			</div> <!-- Layout -->
		</main>
</template>
<script>
import {ref} from 'vue';
import firebase from 'firebase';

export default {
    setup() {
    const email = ref("email");
    const password = ref("password");
    const Register = ()=>{
      firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then(data => console.log(data))
      .catch(err =>alert(err.message))
    }
    return {
      Register,
      email,
      password
    }
    }
}
</script>
