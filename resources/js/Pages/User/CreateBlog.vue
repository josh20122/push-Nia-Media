<template>
  <v-container class="">
    <v-row>
      <v-col>
        <div class="display-1">Create A new Blog</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form v-model="valid">
          <v-container class="pa-0">
            <v-row dense>
              <v-col cols="12" sm="6">
                <label for="">Title</label>
                <v-text-field
                  placeholder="Enter Title"
                  v-model="form.title"
                  outlined
                  :rules="required"
                  dense
                  :error-messages="errors.title"
                  :disabled="processing"
                  :loading="processing"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <label for="">Cover Image</label>
                <v-file-input
                  placeholder="Enter Cover Image"
                  v-model="form.image"
                  :show-size="true"
                  counter-size-string="2042"
                  :rules="required"
                  outlined
                  small-chips
                  :disabled="processing"
                  :loading="processing"
                  :error-messages="errors.image"
                  dense
                >
                </v-file-input>
              </v-col>
              <v-col cols="12">
                <label for="">Tags</label>
                <v-select
                  :items="tags"
                  item-text="name"
                  outlined
                  dense
                  deletable-chips
                  item-value="id"
                  multiple
                  :error-messages="errors.tags"
                  v-model="form.tags"
                  placeholder="Select"
                  :rules="required"
                  small-chips
                >
                </v-select>
              </v-col>
              <v-col cols="12">
                <label for="">Status</label>
                <v-select
                  :items="published"
                  item-text="status"
                  outlined
                  dense
                  deletable-chips
                  item-value="value"
                  :error-messages="errors.status"
                  v-model="form.status"
                  placeholder="Select"
                  :rules="required"
                >
                </v-select>
              </v-col>
              <v-col cols="12">
                <label for="">Blog Content</label>
                <VueEditor
                  placeholder="Type here.."
                  :error-messages="errors.content"
                  :disabled="processing"
                  v-model="form.content"
                ></VueEditor>
                <div
                  class="error--text text-xs pt-2"
                  v-text="errors.content"
                  v-if="errors.content"
                >
                  hhfhfhf
                </div>
              </v-col>
              <v-col cols="12">
                <div class="grid justify-end">
                  <v-btn
                    @click="upload"
                    elevation=""
                    left
                    color=" blue"
                    class="white--text"
                  >
                    <v-icon color="white">mdi-upload</v-icon>
                    Upload Blog
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
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
import AdminNavigation from "../Layouts/AdminNavigation.vue";
import { VueEditor } from "vue2-editor";
import { Inertia } from "@inertiajs/inertia";
export default {
  props: ["errors", "tags"],
  layout: AdminNavigation,
  components: { VueEditor },
  data() {
    return {
      valid: false,
      required: [(v) => !!v || "This field is required"],
      file: [
        (files) =>
          !files ||
          !files.some((file) => file.size > 2e6) ||
          "Avatar size should be less than 2 MB!",
      ],
      form: {
        content: null,
        image: null,
        title: null,
        published: null,
        tags: null,
      },
      color: null,
      text: null,
      published: [
        { status: "Published", value: true },
        { status: "Not Published", value: false },
      ],
      processing: false,
      timeout: null,
      loading: false,
      redirect: false,
    };
  },
  watch: {
    redirect() {
      Inertia.get("/user/blog");
    },
  },
  methods: {
    upload() {
      Inertia.post("/user/blog", this.form, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.loading = true;
          this.processing = true;
          this.color = "yellow darken-1";
          this.timeout = 10000;
          this.text = "Upload in progress, please wait..";
        },

        onSuccess: () => {
          this.loading = false;
          this.text = "Upload Success";
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
</style>.