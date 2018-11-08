<template>
  <div id="app-root">
    <header class="site-header app group">
      <div class="row expanded">
        <div class="columns">
          <a href="//beta.phila.gov" class="logo">
            <img src="https://standards.phila.gov/img/logo/city-of-philadelphia-yellow-white.png" alt="City of Philadelphia">
          </a>
          <div class="app-divide"></div>
          <div class="page-title-container">
            <a href="#/">
              <h1 class="page-title">PVM Example App</h1>
            </a>
          </div>
        </div>
      </div>
    </header>

    <div id="components-root"
         class="medium-24 small-order-1 small-24 medium-order-2"
    >
      <map_ :class="{ 'mb-map-with-widget': this.$store.state.cyclomedia.active || this.$store.state.pictometry.active }"
            id="map-tag"
            :center="this.$store.state.map.center"
            :zoom="this.$store.state.map.zoom"
            zoom-control-position="bottomright"
            :min-zoom="this.$config.map.minZoom"
            :max-zoom="this.$config.map.maxZoom"
      >
        <esri-tiled-map-layer v-for="(basemap, key) in this.$config.map.basemaps"
                              v-if="'pwd' === key"
                              :key="'pwd'"
                              :url="basemap.url"
                              :max-zoom="basemap.maxZoom"
                              :attribution="basemap.attribution"
        />

      </map_>

    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  import philaVueMapping from '@cityofphiladelphia/phila-vue-mapping';
  const Map_ = philaVueMapping.Map_;
  const EsriTiledMapLayer = philaVueMapping.EsriTiledMapLayer;

  export default {
    components: {
      Map_,
      EsriTiledMapLayer,
    },
    data() {
      const data = {

      }
      return data;
    },
    mounted() {

    },
    computed: {

    },

  };

</script>

<style scoped>

#app-root {
  height: 100%
}

#components-root {
  padding: 20px;
  height: 90%;
  overflow-y: auto;
}

.component-label {
  font-size: 20px;
}

.margin-sides-20 {
  margin-left: 20px;
  margin-right: 20px;
}

.margin-20 {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.margin-bottom-60 {
  margin-bottom: 60px !important;
}

.ib {
  display: inline-block;
}

.mb-panel-map {
  /*this allows the loading mask to fill the div*/
  position: relative;
}

.mb-map-with-widget {
  height: 50%;
}


</style>
