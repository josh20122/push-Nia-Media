<template>
  <v-app>
    <v-main class="image">
      <v-container class="fill-height">
        <v-row>
          <v-col>
            <v-card
              outlined
              class="mx-auto"
              color="grey lighten-4"
              max-width="500px"
            >
              <v-card-text class="text-center pb-0">
                <div class="text-3xl font-semibold">LOGIN</div>
              </v-card-text>
              <v-card-text>
                <v-card-subtitle class="text-center pt-0">
                  Login to your Account
                </v-card-subtitle>
                <v-form>
                  <v-row no-gutters>
                    <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    prepend-inner-icon="mdi-mail"
                    type="text"
                    outlined
                    dense
                    :error-messages="errors.email"
                    label="Email"
                  >
                  </v-text-field>
                    </v-col>
                    <v-col cols="12">
                  <v-text-field
                    label="Password"
                    outlined
                    dense
                    v-model="form.password"
                    :error-messages="errors.password"
                    :type="showeye ? 'password' : 'text'"
                    prepend-inner-icon="mdi-lock"
                    @click:append="showeye = !showeye"
                    :append-icon="showeye ? 'mdi-eye' : 'mdi-eye-off'"
                  >
                  </v-text-field>
                    </v-col>
                    <v-col cols="12">
                  <v-checkbox
                    v-model="form.remember_me"
                    label="Remember me"
                    dense
                    color="orange darken-2"
                  ></v-checkbox>
                    </v-col>
                  </v-row>
                </v-form>
                <v-btn @click="submit()" block color="success">
                  <v-icon color="white">mdi-account</v-icon>
                  {{ remember_me }}

                  Login</v-btn
                >
                <v-card-text>
                  Do not have an account
                  <Link :preserve-scroll="true" href="/auth/register"
                    >Register</Link
                  >
                </v-card-text>
                <v-card-text class="text-center">
                  <Link href="/auth/forgot-password">Forgot Password ?</Link>
                </v-card-text>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue";
import { Inertia } from "@inertiajs/inertia";
export default {
  components: {
    Link,
  },
  props: {
    errors: {
      required: false,
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      showeye: true,
      form: {
        email: null,
        password: null,
        remember_me: false,
      },
    };
  },
  methods: {
    submit() {
      Inertia.post(`/auth/login`, this.form, {
        preserveState: true,
      });
    },
  },
};
</script>

<style scoped>
.image {
  background-image: url("../../../../public/images/bg-7.jpg");
}
</style>