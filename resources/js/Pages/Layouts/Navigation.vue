<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      color="drawer"
      temporary
      :hidden="$vuetify.breakpoint.smAndUp"
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

        <div class="px-2 pb-4 grid space-y-2">
          <Link
            href="/auth/register"
            v-if="!shared.user.auth"
            class="no-underline"
          >
            <v-btn
              small
              elevation=""
              class="no-underlne"
              outlined
              rounded
              color="white"
              block
            >
              <span class="no-underline">sign up</span></v-btn
            >
          </Link>
          <Link
            href="/auth/login"
            v-if="!shared.user.auth"
            class="no-underline"
          >
            <v-btn
              small
              elevation=""
              class="no-underlne"
              outlined
              rounded
              color="white"
              block
            >
              <span class="no-underline">sign in</span></v-btn
            >
          </Link>
          <Link
            href="/auth/logout"
            v-if="shared.user.auth"
            class="no-underline"
          >
            <v-btn
              small
              elevation=""
              class="no-underlne"
              outlined
              rounded
              color="white"
              block
            >
              <span class="no-underline">logout</span></v-btn
            >
          </Link>
          <Link
            href="/user/my-profile"
            v-if="shared.user.auth"
            class="no-underline"
          >
            <v-btn
              small
              elevation=""
              class="no-underlne"
              outlined
              rounded
              color="white"
              block
            >
              <span class="no-underline">my account</span></v-btn
            >
          </Link>
          <Link href="/contact" class="no-underline">
            <v-btn
              small
              elevation=""
              class="no-underlne"
              outlined
              rounded
              color="white"
              block
            >
              <span class="no-underline">contact us</span></v-btn
            >
          </Link>
          <Link href="/tv" class="no-underline">
            <v-btn
              small
              elevation=""
              class="no-underlne"
              outlined
              rounded
              color="white"
              block
            >
              <span class="no-underline">Podcast</span></v-btn
            >
          </Link>
        </div>

        <v-divider class="white mb-10"></v-divider>

        <v-subheader>
          <span class="text-white text-lg font-semibold">Tags</span>
        </v-subheader>
        <div v-for="(tag, index) in shared.tags" :key="index">
          <v-list-item>
            <v-list-item-content>
              <Link :href="`/tag/${tag.slug}`" class="no-underline">
                <v-list-item-title
                  class="grey--text text--lighten-4"
                  v-text="tag.name"
                >
                </v-list-item-title>
              </Link>
            </v-list-item-content>
          </v-list-item>
          <v-divider class=""></v-divider>
        </div>

        <v-list-group class="white--text" color="white" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="'Others'"></v-list-item-title>
            </v-list-item-content>
          </template>
          <div
            active-class=""
            v-for="(tag, index) in shared.otherTags"
            :key="index"
          >
            <v-list-item>
              <v-list-item-content>
                <Link
                  class="text-white no-underline"
                  :href="`/tag/${tag.slug}`"
                >
                  <v-list-item-title>
                    <span class="text-white" v-text="tag.name"></span>
                  </v-list-item-title>
                </Link>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      color="nav"
      flat
      :hide-on-scroll="$vuetify.breakpoint.mdAndUp"
      dense
      :height="$vuetify.breakpoint.mdAndUp ? 80 : ''"
    >
      <v-container class="pa-0 fill-height">
        <v-row>
          <v-col>
            <div
              class="flex justify-between"
              v-if="$vuetify.breakpoint.smAndDown"
            >
              <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text">
              </v-app-bar-nav-icon>
              <v-toolbar-title>
                <v-btn
                  elevation=""
                  class="white--text"
                  depressed
              
                  color="transparent"
                  >nia media</v-btn
                >
              </v-toolbar-title>
              <div>
                <v-btn elevation="" icon color="" @click="dialog = !dialog">
                  <v-icon color="white">mdi-magnify</v-icon>
                </v-btn>
                <Link href="/" v-if="$page.url !== '/'">
                  <v-btn icon elevation="" color="">
                    <v-icon color="white">mdi-home</v-icon>
                  </v-btn>
                </Link>
              </div>
            </div>
            <div
              class="flex justify-between"
              v-if="$vuetify.breakpoint.mdAndUp"
            >
              <div class="inline-flex white--text">
                <v-avatar>
                  <img :src="'/images/logo.jpg'" alt="" />
                </v-avatar>

                <v-divider class="white mx-3" vertical></v-divider>

                <div
                  class="flex space-x-4 justify-end mt-3"
                  v-if="$vuetify.breakpoint.mdAndUp"
                >
                  <Link
                    :href="`/tag/${tag.slug}`"
                    v-for="(tag, index) in shared.tags"
                    :key="index"
                    class="capitalize grey--text no-underline"
                  >
                    <span class="text-white" v-text="tag.name"> </span>
                  </Link>
                  <Link href="/tv" class="capitalize grey--text no-underline">
                    <span class="text-white">Podcast </span>
                  </Link>

                  <!-- Others Menu -->
                  <div>
                    <v-menu
                      open-on-hover
                      top
                      offset-y
                      class="capitalize white--text"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          class="capitalize white--text"
                          depressed
                          color="transparent"
                          v-bind="attrs"
                          v-on="on"
                        >
                          <span>others</span>
                          <v-icon color="">mdi-menu-down</v-icon>
                        </v-btn>
                      </template>

                      <v-list color="nav">
                        <v-list-item
                          v-for="(item, index) in shared.otherTags"
                          :key="index"
                          ><Link
                            :href="`/tag/${item.slug}`"
                            class="no-underline text-white"
                          >
                            <v-list-item-title
                              ><span
                                class="no-underline text-white"
                                v-text="item.name"
                              ></span
                            ></v-list-item-title>
                          </Link>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </div>
                </div>
              </div>
              <div
                class="inline-flex justify-end"
                v-if="$vuetify.breakpoint.mdAndUp"
              >
                <div>
                  <v-btn elevation="" icon color="" @click="dialog = !dialog">
                    <v-icon color="white">mdi-magnify</v-icon>
                  </v-btn>
                </div>
                <Link href="/" v-if="$page.url !== '/'">
                  <v-btn elevation="" icon color="">
                    <v-icon color="white">mdi-home</v-icon>
                  </v-btn>
                </Link>
                <Link href="/user/my-profile" v-if="shared.user.auth">
                  <v-btn elevation="" icon color="">
                    <v-icon color="white">mdi-account</v-icon>
                  </v-btn>
                </Link>
                <Link href="/contact">
                  <v-btn elevation="" icon color="">
                    <v-icon color="white">mdi-phone</v-icon>
                  </v-btn>
                </Link>
                <Link
                  href="/auth/register"
                  v-if="!shared.user.auth"
                  class="no-underline text-white mr-3 mt-3"
                >
                  <span class="text-white"> Sign Up</span>
                </Link>
                <Link
                  v-if="!shared.user.auth"
                  href="/auth/login"
                  class="no-underline text-white mt-3"
                >
                  <span class="text-white">Log In</span>
                </Link>
                <Link v-if="shared.user.auth" href="/auth/logout">
                  <v-btn icon>
                    <v-icon color="white">mdi-logout</v-icon>
                  </v-btn>
                </Link>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-dialog max-width="400" v-model="dialog">
      <v-card class="">
        <v-card-title> Search </v-card-title>
        <v-card-text>
          <v-text-field
            placeholder="Search..."
            outlined
            dense
            v-model="search"
          ></v-text-field>
          <div class="flex justify-end">
            <v-btn
              small
              elevation=""
              @click="dialog = false"
              outlined
              color="error"
              >cancel</v-btn
            >
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-main class="background pb-6">
      <v-container class="" v-if="filter">
        <v-row>
          <v-col>
            <div class="title">Search results for {{ filter }}</div>
          </v-col>
        </v-row>
      </v-container>
      <slot> </slot>
    </v-main>

    <v-footer dark padless>
      <v-card
        flat
        tile
        width="100%"
        max-width="100%"
        class="image indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="(social, index) in socialLinks"
            :href="social.link"
            :key="index"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ social.icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Nia Media</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import debounce from "lodash/debounce";
import { Inertia } from "@inertiajs/inertia";
export default {
  components:{
  },
  props: ["title", "shared", "filter"],
  data() {
    return {
      drawer: false,
      dialog: false,
      search: this.filter,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
      socialLinks: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/Flojournalism.diaries/",
        },
        {
          icon: "mdi-twitter",
          link: "https://twitter.com/FlorentinahHiza?t=5YiEpFJawlc7bPQY5quE6A&s=08",
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/florentinah-hiza-a45ba8109",
        },
        {
          icon: "mdi-youtube",
          link: "https://youtube.com/channel/UCk0IYz5ANiia2xQahL0Dgmg",
        },
      ],
    };
  },

  watch: {
    search: debounce(function (value) {
      Inertia.get(
        `/`,
        { search: value },
        {
          replace: true,
          preserveScroll: true,
        }
      );
    }, 500),
  },
};
</script>
<style scoped>
.image {
  background-image: url("../../../../public/images/bg-7.jpg");
}
</style>