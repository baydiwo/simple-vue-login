<template>
  <div>
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row>
        <b-col align-self="center">
          <b-form @submit.stop.prevent="onSubmit">
            <b-form-group
              id="input-group-1"
              description="Only number begin with 62"
            >
              <b-form-input id="mobile" name="mobile" v-model="form.mobile" placeholder="Mobile Number" type="text" 
              v-validate="{required: true, min:6, max:20, regex:'^62([1-9]+[0-9]*)$'}"
              :state="validateState('mobile')"
              aria-describedby="mobile-live-feedback"
              data-vv-as="Mobile"></b-form-input>
              
              <b-form-invalid-feedback id="mobile-live-feedback">{{ veeErrors.first('mobile') }}</b-form-invalid-feedback>
            </b-form-group>
      
            <b-form-group id="input-group-2" label-for="firstName">
              <b-form-input
                id="firstName"
                name="firstName"
                :state="validateState('firstName')"
                aria-describedby="firstname-live-feedback"
                data-vv-as="First Name"
                v-model="form.firstName"
                v-validate="{required: true, min:3, regex:'^([a-zA-Z0-9]\\s*)+$'}"
                placeholder="First Name"
              ></b-form-input>
              <b-form-invalid-feedback id="mobile-live-feedback">{{ veeErrors.first('firstName') }}</b-form-invalid-feedback>
            </b-form-group>
            
            <b-form-group id="input-group-3" label-for="lastName">
              <b-form-input
                id="lastName"
                name="lastName"
                :state="validateState('lastName')"
                aria-describedby="lastName-live-feedback"
                data-vv-as="Last Name"
                v-model="form.lastName"
                v-validate="{required: true, min:3, regex:'^([a-zA-Z0-9]\\s*)+$'}"
                placeholder="Last Name"
              ></b-form-input>
              <b-form-invalid-feedback id="mobile-live-feedback">{{ veeErrors.first('lastName') }}</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group id="input-group-4" label-for="dob">
              <b-form-datepicker id="dob" v-model="form.dob" required></b-form-datepicker>
            </b-form-group>

            <b-form-group id="input-group-5">
              <b-form-radio-group v-model="form.checked" id="radio-5">
                <b-form-radio value="male">Male</b-form-radio>
                <b-form-radio value="female">Female</b-form-radio>
              </b-form-radio-group>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label-for="input-5"
            >
              <b-form-input
                id="email"
                name="email"
                :state="validateState('email')"
                aria-describedby="email-live-feedback"
                data-vv-as="Email"
                v-model="form.email"
                type="email"
                v-validate="'required|email'"
                placeholder="Email"
              ></b-form-input>
              <b-form-invalid-feedback id="mobile-live-feedback">{{ veeErrors.first('email') }}</b-form-invalid-feedback>
            </b-form-group>

            <b-button type="submit" variant="primary">Register</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
import Parse from 'parse';

export default {
  name: 'RegistationPage',
  props: {
    msg: String
  },
  data() {
    return {
      form: {
        mobile: ""
      },
      show: true
    }
  },
  mounted() {
    const user = Parse.Object.extend('User');
    const query = new Parse.Query(user);
    query.select('username');
    return query.find().then((result) => {
      console.log(result)
    })
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    onSubmit() {
      // evt.preventDefault()
      // alert(JSON.stringify(this.form))
      this.$validator.validateAll('form-registration').then((result) => {
        console.log(result)
        if (result) {
          console.log(result)
        }
      });
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  },
  computed: {
    validateMobile() {
      return this.form.mobile.length > 4 && this.form.mobile.length < 13
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
