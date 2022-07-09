<template>
  <div>
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

      <meta name="description" :content="` nia media - contact`" />
    </Head>
    <div>
      <v-img :src="'/images/about2.png'" max-height="250">
        <div class="text-5xl font-bold text-center white--text mt-[100px]">
          Contact Us
        </div>
      </v-img>
    </div>
    <v-container class="">
      <v-row dense>
        <v-col>
          <v-card>
            <v-card-title class="pb-8">
              <div class="text-3xl font-bold">Ask for your query</div>
            </v-card-title>
            <v-card-text>
              <div class="grid text-lg">
                <div
                  class="grid"
                  v-for="(contact, index) in contactItems"
                  :key="index"
                >
                  <div class="flex space-x-3">
                    <div>
                      <v-avatar>
                        <img :src="contact.image" alt="" />
                      </v-avatar>
                    </div>
                    <div class="grid">
                      <div class="font-bold" v-text="contact.name"></div>
                      <div
                        class="font-light text-lg"
                        v-text="contact.number"
                      ></div>
                    </div>
                  </div>
                  <v-divider
                    v-if="index + 1 != contactItems.length"
                    class="my-4"
                  >
                  </v-divider>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card flat outlined max-width="500" color="mx-auto background2">
            <v-card-text>
              <v-form>
                <v-container class="">
                  <v-row no-gutters>
                    <v-col cols="12">
                      <div class="py-4">
                        <span> Get in Touch with us </span>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="blue "
                        placeholder="Your Name"
                        outlined
                        flat
                        v-model="contact.name"
                        :error-messages="errors.name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="blue "
                        placeholder="Your Email"
                        outlined
                        flat
                        v-model="contact.email"
                        :error-messages="errors.email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="blue "
                        placeholder="Phone Number"
                        outlined
                        flat
                        v-model="contact.phone"
                        :error-messages="errors.phone"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        color="blue "
                        placeholder="Subject"
                        outlined
                        v-model="contact.subject"
                        :error-messages="errors.subject"
                        flat
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        color="blue "
                        placeholder="Write Message"
                        outlined
                        :error-messages="errors.message"
                        flat
                        v-model="contact.message"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn
                        large
                        @click="submit"
                        elevation=""
                        :disabled="loading"
                        color="secondary"
                        class="wait--text subtitle"
                        >Send a message</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import Navigation from "../Layouts/Navigation.vue";
export default {
  layout: Navigation,
  props: {
    errors: {
      required: false,
      type: Object,
    },
  },
  data() {
    return {
      loading: false,
      contactItems: [
        {
          name: "Call Anytime",
          number: "2547 2890 6584",
          image: "/images/contact.png",
        },
        {
          name: "Write Email",
          number: "niameditech@gmail.com",
          image: "/images/mail.png",
        },
        {
          name: "Visit Us",
          number: "Nairobi Kenya",
          image: "/images/location.png",
        },
      ],
      contact: {
        name: null,
        email: null,
        subject: null,
        message: null,
        phone: null,
      },
    };
  },
  methods: {
    submit() {
      Inertia.post("/contact", this.contact, {
        preserveScroll: true,
        preserveState: true,
        onStart: () => {
          this.loading === true;
        },
        onFinish: () => {
          this.loading === false;
        },
      });
    },
  },
  components: {
    Navigation,
  },
};
</script>

<style>
</style>