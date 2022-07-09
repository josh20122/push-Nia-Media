<template>
  <v-app>
    <v-navigation-drawer
      color="drawer"
      v-model="drawer"
      :permanent="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list>
        <v-list-item class="">
          <v-list-item-avatar>
            <v-avatar>
              <v-img :src="'/images/logo.jpg'"></v-img>
            </v-avatar>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <span class="white--text font-semibold text-xl"> Nia Media </span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider class=""></v-divider>
        <v-list-item v-for="(page, index) in userLinks" :key="index">
          <Link :href="page.link" class="white--text">
            <v-list-item-icon>
              <v-icon v-text="page.icon" color="white"> </v-icon>
            </v-list-item-icon>
          </Link>

          <v-list-item-content>
            <Link :href="page.link" class="white--text no-underline">
              <v-list-item-title v-text="page.name" class="white--text">
              </v-list-item-title>
            </Link>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app hide-on-scroll color="nav">
      <v-app-bar-nav-icon
        v-if="!$vuetify.breakpoint.lgAndUp"
        @click="drawer = !drawer"
        class="white--text"
      >
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <Link href="/auth/logout">
        <v-btn elevation="" icon color="">
          <v-icon color="white">mdi-logout</v-icon>
        </v-btn>
      </Link>
      <v-avatar>
        <img :src="shared.user.auth.avatarPath" alt="" />
      </v-avatar>
    </v-app-bar>

    <v-main>
      <slot> </slot>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  props: ["shared"],
  data() {
    return {
      drawer: false,
      userLinks: [
        {
          name: "All Articles",
          icon: "mdi-format-align-center",
          link: "/user/blog",
        },
        {
          name: "Create Article",
          icon: "mdi-format-annotation-plus",
          link: "/user/blog/create",
        },
        {
          name: "My Profile",
          icon: "mdi-account-circle",
          link: "/user/my-profile",
        },
        {
          name: "All Users",
          icon: "mdi-account-multiple",
          link: "/admin/users",
        },
        { name: "All Tags", icon: "mdi-brightness-auto", link: "/admin/tags" },
      ],
    };
  },
};
</script>

<style>
</style>