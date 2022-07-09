<template>
  <v-app>
    <v-main class="image">
      <v-container class="pa-0 fill-height">
        <v-row>
          <v-col>
            <v-card
              class="mx-auto"
              max-width="500px"
              :loading="loading"
              color="background"
              :disabled="loading"
            >
              <v-card-text class="display-1 text-center">
                Reset Password
              </v-card-text>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="form.email"
                    prepend-inner-icon="mdi-email"
                    type="text"
                    outlined
                    dense
                    :error-messages="errors.email"
                    label="E-mail"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="form.password"
                    prepend-inner-icon="mdi-lock"
                    :type="ispassword ? 'password' : 'text'"
                    outlined
                    dense
                    :error-messages="errors.password"
                    @click:append="ispassword = !ispassword"
                    :append-icon="ispassword ? 'mdi-eye' : 'mdi-eye-off'"
                    label="New password"
                  >
                  </v-text-field>
                  <v-text-field
                    v-model="form.password_confirmation"
                    prepend-inner-icon="mdi-lock"
                    outlined
                    dense
                    type="password"
                    :error-messages="errors.password_confirmation"
                    label="Confirm password"
                  >
                  </v-text-field>
                </v-form>
                <v-btn
                  :disabled="loading"
                  @click="submit()"
                  class="white--text"
                  elevation=""
                  block
                  @keyup="submit()"
                  color="indigo"
                  >Reset Password</v-btn
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
export default {
  props: {
    errors: {
      type: Object,
      required: false,
      default: null,
    },
    token: {
      required: false,
      type: String,
      default: null,
    },
  },
  mounted() {
    this.form.token = this.token;
  },
  methods: {
    submit() {
      Inertia.post(`/auth/reset-password`, this.form, {
        onStart: () => {
          this.loading = true;
        },
        onFinish: () => {
          this.loading = false;
        },
      });
    },
  },
  data() {
    return {
      loading: false,
      ispassword: true,
      form: {
        email: null,
        password: null,
        password_confirmation: null,
        token: null,
      },
    };
  },
};
</script>

<style scoped>
.image {
  background-image: url("../../../../public/images/bg-7.jpg");
}
</style>