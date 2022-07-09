<template>
  <v-container class="">
    <v-row>
      <v-col class="display-1"> All Users </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3">
        {{ search }}
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
                <th>name</th>
                <th>Email</th>
                <th>Blogs Count</th>
                <th>Published Blogs</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in loadedUsers.data" :key="index">
                <td v-text="user.name"></td>
                <td v-text="user.email"></td>
                <td v-text="user.blogs_count"></td>
                <td v-text="user.published_blogs_count"></td>
                <td>
                  <Link :href="`/admin/user/${user.id}/edit`">
                    <v-btn small elevation="" outlined color="primary" rounded
                      >view</v-btn
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
import debounce from "lodash";
import { Inertia } from "@inertiajs/inertia";
export default {
  props: ["users"],
  layout: AdminNavigation,
  data() {
    return {
      search: this.filter,
      loadedUsers: this.users,
    };
  },

  watch: {
    search: debounce(function (value) {
      Inertia.get(
        "/user/blog",
        { search: value },
        {
          replace: true,
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            this.loadedUsers = this.blogs;
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

        if (
          pixelsFromBottom < 500 &&
          this.loadedUsers.current_page < this.loadedUsers.last_page
        ) {
          axios.get(this.loadedUsers.next_page_url).then((response) => {
            this.loadedUsers = {
              ...response.data,
              data: [...this.loadedUsers.data, ...response.data.data],
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