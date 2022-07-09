<template>
  <v-row>
    <v-col cols="12" v-if="title">
      <div class="title" v-text="title"></div>
    </v-col>
    <v-col
      v-for="(blog, index) in blogs"
      :key="index"
      cols="12"
      sm="6"
      :md="title ? 6 : 4"
      :lg="title ? 4 : 3"
    >
      <v-card>
        <v-img
          :src="blog.thumbnail.path"
          :height="$vuetify.breakpoint.mdAndUp ? 200 : 200"
        >
          <div class="absolute bottom-2 left-2"></div>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="orange lighten-1"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-card-text class="">
          <div class="grid space-y-2">
            <div class="inline-flex gap-x-3" v-if="blog.tags">
              <div class="inline-flex gap-x-2 flex-wrap">
                <Link
                  v-for="(tag, index) in blog.tags"
                  :key="index"
                  :href="`/tag/${tag.slug}`"
                  class="no-underline text-xs text-orange-500"
                >
             
                    <span class=" text-xs no-underline text-orange-500" v-text="'#' + tag.name"></span>
                
                </Link>
              </div>
            </div>

            <Link :href="`/blog/${blog.slug}`" class="no-underline">
              <div
                class="line-clamp-2 no-underline text-gray-900"
                v-text="blog.title"
              ></div>
            </Link>
            <div class="text-xs">
              {{ blog.created_at | moment("calendar") }}
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["blogs", "title"],
};
</script>

<style>
</style>