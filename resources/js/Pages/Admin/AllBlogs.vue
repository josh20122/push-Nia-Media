<template>
  <v-container class="">
    <v-row>
      <v-col class="display-1"> All Blogs </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Blog Title</th>
                <th>Author</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(blog, key) in blogs" :key="key">
                <td v-text="blog.title"></td>
                <td v-text="blog.user.name"></td>
                <td>
                  {{ blog.created_at | moment("calendar") }}
                </td>
                <td>
                  {{ blog.updated_at | moment("calendar") }}
                </td>
                <td>
                  <v-btn
                    x-small
                    elevation=""
                    rounded
                    outlined
                    :color="blog.published ? 'success' : 'error'"
                  >
                    {{ blog.published ? "Published" : "unpublished" }}
                  </v-btn>
                </td>
                <td>
                  <Link :href="`/user/blog/${blog.id}/edit`">
                    <v-btn small elevation="" outlined color="primary" rounded
                      >edit</v-btn
                    >
                  </Link>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AdminNavigation from "../Layouts/AdminNavigation.vue";
export default {
  layout: AdminNavigation,
  props: ["blogs"],
};
</script>

<style>
</style>