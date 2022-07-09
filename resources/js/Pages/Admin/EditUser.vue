<template>
    <v-container class="fill-height pb-12">
      <v-row>
        <v-col cols="12" sm="6">
          <v-card outlined max-width="500" class="mx-auto">
            <v-card-text>
              <v-form>
                <v-row dense>
                  <v-col cols="12">
                    <div class="grid justify-center">
                      <v-avatar size="170" class="mx-auto">
                        <img :src="imagePath" alt="" />
                      </v-avatar>
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Full Name</label>
                    <v-text-field
                      placeholder="Enter name"
                      :error-messages="errors.name"
                      v-model="form.name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Email</label>
                    <v-text-field
                      placeholder="Enter email"
                      v-model="form.email"
                      :error-messages="errors.email"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Role</label>
                    <v-select
                      placeholder="Enter email"
                      v-model="form.role"
                      :items="roles"
                      :error-messages="errors.email"
                      outlined
                      dense
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <label for="">Edit Avatar</label>
                    <v-file-input
                      placeholder="Click Here"
                      v-model="form.image"
                      :error-messages="errors.image"
                      outlined
                      :show-size="true"
                      dense
                    ></v-file-input>
                  </v-col>
                  <v-col>
                    <v-btn elevation="" @click="update()" color="primary">
                      Update
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-snackbar
          v-model="processing"
          :timeout="timeout"
          :color="color"
          tile
          absolute
          right
          transition="slide-x-reverse-transition"
          class="white--text"
        >
          <div class="font-sembold text-lg" v-text="text"></div>
        </v-snackbar>
      </v-row>
    </v-container>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  layout: AdminNavigation,
  props: ["errors", "user", "imagePath"],

  data() {
    return {
      form: {
        name: this.user.name,
        email: this.user.email,
        image: null,
        role: this.user.role,
      },
      processing: false,
      color: null,
      timeout: null,
      roles: ["USER", "ADMIN"],
      loading: null,
      redirect: false,
      text: null,
    };
  },
  methods: {
    update() {
      Inertia.post(`/admin/user/${this.user.id}/update`, this.form, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.loading = true;
          this.processing = true;
          this.color = "yellow darken-1";
          this.timeout = 100003663;
          this.text = "Update in progress, please wait..";
        },

        onSuccess: () => {
          this.loading = false;
          this.text = "Update Success";
          this.processing = false;
          this.color = "green darken-1";
          this.timeout = 4000;
          this.redirect = true;
        },
        onError: () => {
          this.loading = false;
          this.timeout = 3000;
          this.color = "error";
          this.text = "Failed, please check for any errors";
          this.processing = false;
        },
      });
    },
  },
};
</script>

<style>
</style>