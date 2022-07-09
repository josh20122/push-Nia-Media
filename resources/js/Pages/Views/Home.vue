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

      <meta
        name="description"
        :content="` nia media - latest hot news and articles`"
      />
    </Head>
  
    <Card :blogs="loadedBlogs.data" />
  </v-container>
</template>

<script>
import { debounce } from "lodash";
import Navigation from "../Layouts/Navigation.vue";
import Card from "../Components/Card.vue";
export default {
  layout: Navigation,
  props: ["blogs"],
  components: { Navigation, Card  },
  data() {
    return {
      loadedBlogs: this.blogs,
    };
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