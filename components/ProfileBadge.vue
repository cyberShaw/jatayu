<template>
  <div class="media-wrapper">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            src="https://img.icons8.com/dusk/64/000000/circled-user-male-skin-type-1-2.png"
            alt="Profile Icon"
          />
        </figure>
      </div>
      <div class="media-content">
        <nuxt-link to="/profile">
          <p class="title is-5 has-text-weight-bold is-family-monospace has-text-white">
            John Smith
          </p>
          <p class="subtitle is-link is-6 has-text-white">Admin</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileBadge',
  props: ['profileName'],
};
</script>

<style lang="scss">
.media-wrapper {
  // padding: 1rem -1rem 1rem 1rem;
  border-radius: 10px;
  height: 60px;
  width: 200px;
  position: fixed;
  z-index: 9001;
  right: calc(3vw + 10px);
  top: calc(3vh + 0.2rem);
  cursor: pointer;
  background-color: #0068ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
