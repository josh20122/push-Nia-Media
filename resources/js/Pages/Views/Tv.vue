<template>
  <v-container class="">
    <Head>
      <title>{{ "Nia Media - trending " }}</title>
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="shortcut icon" href="/images/logo.jpg" />
      <link rel="stylesheet" href="" />
      <meta name="”robots”" content="index, follow" />

      <meta
        name="keywords"
        :content="`hot, news, money, riches, trending,  tags,  nia media, latest news,news, logs, articles,news kenya, florentinah hijah, sports news`"
      />

      <meta name="description" :content="` nia media - podcast`" />
    </Head>
    <v-row>
      <v-col>
        <div class="display-1">Podcasts</div>
        <div v-if="videos.length < 1" class="title">No Podcasts found</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        lg="4"
        sm="6"
        v-for="(video, index) in videos"
        :key="index"
      >
        <div class="video-container">
          <iframe
            width="560"
            height="315"
            class="rounded-md"
            :src="`https://www.youtube.com/embed/${video.id.videoId}`"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="text-lg">
          {{ video.snippet.title }}
        </div>
        <div class="text-sm text-gray-400">
          {{ video.snippet.publishTime | moment("calendar") }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Navigation from "../Layouts/Navigation.vue";
export default {
  props: ["videos"],
  data() {
    return {
      playerVars: {
        autoplay: 1,
      },
    };
  },

  layout: Navigation,
};
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>