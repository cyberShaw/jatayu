<template>
  <div class="page">
    <PageHead title="Profile" subtitle="Account" />
    <div class="section">
      <div class="media">
        <div class="media-left pad is-hidden-mobile">
          <div class="svg-container">
            <img src="../static/image/profile.svg" />
          </div>
        </div>
        <div class="media-content">
          <h1 class="is-size-1 is-family-secondary"></h1>
          <div class="content is-size-5 is-family-monospace">
            <div class="media">
              <div class="media-left has-text-weight-bold">💂 Name:</div>
              <div class="media-content">Administrator</div>
            </div>
            <div class="media">
              <div class="media-left has-text-weight-bold">📧 Email:</div>
              <div class="media-content">jatayu-admin@gmail.com</div>
            </div>
            <div class="media">
              <div class="media-left has-text-weight-bold">🆔 User ID:</div>
              <div class="media-content">#420</div>
            </div>
            <div class="media">
              <div class="media-left has-text-weight-bold">📍 Zone:</div>
              <div class="media-content">South Zone</div>
            </div>
            <div class="media">
              <div class="media-left has-text-weight-bold">🏙️ City:</div>
              <div class="media-content">Coimbatore</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHead from '@/components/PageHead';
export default {
  layout: 'dashboard',
  components: {
    PageHead,
  },
};
</script>

<style>
.svg-container {
  max-width: 35vw;
}
.media {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
