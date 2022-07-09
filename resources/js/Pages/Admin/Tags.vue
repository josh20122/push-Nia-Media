<template>
  <v-container class="">
    <v-row>
      <v-col class="display-1">
        <div class="grid grid-cols-2 justify-between">
          <div>All Tags</div>
          <div class="grid justify-end">
            <v-btn small elevation="" color="primary" @click="dialog = true">
              Create Tag
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Title</th>
                <th>Blogs Count</th>
                <th>Published Blogs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tag, index) in tags.data" :key="index">
                <td v-text="tag.name"></td>
                <td v-text="tag.blogs_count"></td>
                <td v-text="tag.published_blogs_count"></td>
                <td>
                  <div class="flex">
                    <v-btn
                      :loading="loading"
                      :disabled="loading"
                      elevation=""
                      @click="visit(tag.id)"
                      icon
                      color=""
                    >
                      <v-icon color="blue">mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn
                      :loading="loading"
                      :disabled="loading"
                      elevation=""
                      @click="destroy(tag.id)"
                      v-if="!tag.can.delete"
                      icon
                      color=""
                    >
                      <v-icon color="red">mdi-delete</v-icon>
                    </v-btn>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-dialog v-model="dialog" max-width="400" persistent>
          <v-card :loading="loading" :disabled="loading">
            <v-card-title> Create Tag </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.name"
                    outlined
                    dense
                    :error-messages="errors.name"
                    placeholder="Tag Name"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <div class="grid justify-end">
                    <div>
                      <v-btn
                        small
                        elevation=""
                        @click="dialog = false"
                        outlined
                        color="error"
                        >cancel</v-btn
                      >
                      <v-btn
                        small
                        elevation=""
                        @click="create()"
                        outlined
                        color="success"
                        >create</v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-dialog>
        <!-- Edit Dialog -->
        <v-dialog v-model="editDialog" max-width="400" persistent>
          <v-card :loading="loading" :disabled="loading">
            <v-card-title> Edit {{ edit ? edit.name : null }} </v-card-title>
            <v-card-text>
              <v-row dense>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.edit"
                    outlined
                    dense
                    :error-messages="errors.edit"
                    placeholder="Tag Name"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <div class="grid justify-end">
                    <div>
                      <v-btn
                        small
                        elevation=""
                        @click="editDialog = false"
                        outlined
                        color="error"
                        >cancel</v-btn
                      >
                      <v-btn
                        small
                        elevation=""
                        @click="update()"
                        outlined
                        color="success"
                        >update</v-btn
                      >
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  layout: AdminNavigation,
  props: ["tags", "errors", "edit"],
  data() {
    return {
      dialog: false,
      loading: false,
      editDialog: false,
      done: false,
      form: {
        edit: this.edit ? this.edit.name : null,
        name: null,
      },
    };
  },

  methods: {
    update() {
      Inertia.post(`/admin/tags/${this.edit.id}/update`, this.form, {
        forceFormData: true,
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.loading = true;
          this.processing = true;
        },
        onSuccess: () => {
          this.loading = false;
          this.editDialog = false;
          this.done = true;
        },
        onError: () => {
          this.loading = false;
        },
      });
    },
    visit(id) {
      Inertia.put(`/admin/tags/${id}/edit`, null, {
        forceFormData: true,
        preserveScroll: true,

        preserveState: true,
        onStart: () => {
          this.loading = true;
          this.processing = true;
        },
        onSuccess: () => {
          this.form.edit = this.edit.name;
          this.loading = false;
          this.editDialog = true;
          this.dialog = false;
          this.done = true;
        },
        onError: () => {
          this.loading = false;
        },
      });
    },
    create() {
      Inertia.post(`/admin/tags/store`, this.form, {
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
        onBefore: () => {
          confirm(
            `Are you sure you want to create ${this.form.name} tag, action cannot be undone ? `
          );
        },
        onSuccess: () => {
          this.loading = false;
          this.dialog = false;
          this.done = true;
        },
        onError: () => {
          this.loading = false;
        },
      });
    },
    destroy(id) {
      Inertia.post(
        `/admin/tags/${id}/delete`,
        { _method: "delete" },
        {
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
          onBefore: () => {
            confirm(`Are you sure you want to delete this tag? `);
          },
          onSuccess: () => {
            this.loading = false;
            this.dialog = false;
            this.done = true;
          },
          onError: () => {
            this.loading = false;
          },
        }
      );
    },
  },
};
</script>

<style>
</style>