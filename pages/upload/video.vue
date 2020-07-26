<template>
  <div>
    <PageHead title="Video" subtitle="Upload" />
    <b-message type="is-success" has-icon icon="arrow-circle-up" icon-pack="fas" size="is-medium">
      <p
        class="is-family-monospace"
      >Welcome 👋! Upload the video footage you have to verify and add to the sighting database!</p>
    </b-message>
    <section>
      <div class="columns">
        <div class="column is-5">
          <lottie
            :options="defaultOptions"
            :height="400"
            :width="400"
            v-on:animCreated="handleAnimation"
          />
        </div>
        <div class="column">
          <b-field class="file">
            <b-upload v-model="file" expanded>
              <a class="button is-primary is-fullwidth">
                <b-icon icon="upload"></b-icon>
                <span>{{ file.name || "Click to upload"}}</span>
              </a>
            </b-upload>
          </b-field>
          <b-field>
            <b-upload v-model="dropFiles" multiple drag-drop expanded>
              <section class="section">
                <div class="content has-text-centered">
                  <p>
                    <b-icon icon="upload" size="is-large"></b-icon>
                  </p>
                  <p>Drop your files here or click to upload</p>
                </div>
              </section>
            </b-upload>
          </b-field>
          <div class="tags">
            <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
              {{file.name}}
              <button
                class="delete is-small"
                type="button"
                @click="deleteDropFile(index)"
              ></button>
            </span>
          </div>
          <div class="butn">
            <b-button
              @click="uploadPhoto"
              type="is-success"
              size="is-medium"
              rounded
              icon-left="cloud-upload-alt"
              icon-pack="fas"
            >Upload</b-button>
            <b-button
              @click="clearFiles"
              type="is-danger"
              size="is-medium"
              rounded
              icon-left="trash-alt"
              icon-pack="fas"
            >Clear File</b-button>
          </div>
          <br />
          <div>
            <b-message
              type="is-success"
              has-icon
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit</b-message>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Lottie from '../lottie.vue';
import PageHead from '@/components/PageHead';
import * as animationData from '@/static/lottie/upload-video.json';
export default {
  layout: 'dashboard',
  components: {
    PageHead,
    lottie: Lottie,
  },
  data() {
    return {
      defaultOptions: {animationData: animationData.default},
      animationSpeed: 1,
      file: {},
      dropFiles: [],
      status: '',
      error: '',
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
    uploadPhoto() {
      console.log(this.file);
      this.$axios
        .post('https://upload-dimg.herokuapp.com/upload/image', this.file)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          this.error = res;
        });
    },
    clearFiles() {
      this.files = {};
    },
  },
};
</script>

<style>
.butn {
  display: flex;
  justify-content: center;
}
</style>