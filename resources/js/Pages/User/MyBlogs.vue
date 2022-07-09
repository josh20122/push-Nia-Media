<template>
  <v-container class="">
    <v-row>
      <v-col>
        <div class="display-1">All Articles</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3">
        <v-text-field
          type=""
          error-count=""
          placeholder=" Search .."
          dense
          label=""
          prepend-inner-icon="mdi-magnify"
          v-model="search"
          outlined
          color
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>Blog Title</th>
                <th>Created at</th>
                <th>Updated At</th>
                <th>Published</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(blog, index) in loadedBlogs.data" :key="index">
                <td>
                  <Link
                    class="no-underline text-black"
                    :href="'/blog/' + blog.slug"
                  >
                    <span
                      class="no-underline text-black"
                      v-text="blog.title"
                    ></span>
                  </Link>
                </td>
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
                  <div class="flex space-x-3">
                    <v-btn
                      outlined
                      elevation=""
                      @click="destroy(blog.id, blog.title)"
                      icon
                      color=""
                    >
                      <v-icon color="error">mdi-delete</v-icon>
                    </v-btn>
                    <Link :href="`/user/blog/${blog.id}/edit`">
                      <v-btn elevation="" outlined color="primary" rounded icon>
                        <v-icon color="primary"> mdi-pencil </v-icon>
                      </v-btn>
                    </Link>
                  </div>
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
import { Inertia } from "@inertiajs/inertia";
import AdminNavigation from "../Layouts/AdminNavigation.vue";
import { debounce } from "lodash";

export default {
  props: ["blogs", "filter"],
  data() {
    return {
      search: this.filter,
      loadedBlogs: this.blogs,
    };
  },
  layout: AdminNavigation,
  methods: {
    status(id) {
      Inertia.put("/admin/blog/status", { status: id });
    },
    destroy(blogId, blogName) {
      Inertia.post("/user/blog/trash/" + blogId, null, {
        onBefore: () => {
          confirm("Are you sure you want to delete " + blogName);
        },
      });
    },
  },

  watch: {
    search: debounce(function (value) {
      Inertia.get(
        `/user/blog`,
        { search: value },
        {
          replace: true,
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            this.loadedBlogs = this.blogs;
          },
        }
      );
    }, 200),
  },
  mounted() {
    window.addEventListener(
      "scroll",
      debounce((e) => {
        let pixelsFromBottom =
          document.documentElement.offsetHeight -
          document.documentElement.scrollTop -
          window.innerHeight;

        if (pixelsFromBottom < 500) {
          axios.get(this.loadedBlogs.next_page_url).then((response) => {
            this.loadedBlogs = {
              ...response.data,

              data: [...this.loadedBlogs.data, ...response.data.data],
            };
          });
        }
      }, 100)
    );
  },
};
</script>

<style>
</style>