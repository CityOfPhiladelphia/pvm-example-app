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
        <div v-once>
          <!-- <basemap-toggle-control v-if="shouldShowImageryToggle" -->
          <basemap-toggle-control
                                  v-once
                                  :position="'topright'"
          />
        </div>

        <control-corner :vSide="'top'"
                        :hSide="'almostright'"
        >
        </control-corner>

        <div v-once>
          <basemap-select-control :position="'topalmostright'" />
          <!-- <basemap-select-control :position="this.basemapSelectControlPosition" /> -->
        </div>

        <div v-once>
          <measure-control :position="'bottomleft'" />
        </div>

        <div v-once>
          <location-control v-once
                            :position="'bottomright'"
          />
        </div>

        <!-- location marker -->
        <circle-marker v-if="this.$store.state.map.location.lat != null"
                       :latlng="this.locationMarker.latlng"
                       :radius="this.locationMarker.radius"
                       :fillColor="this.locationMarker.fillColor"
                       :color="this.locationMarker.color"
                       :weight="this.locationMarker.weight"
                       :opacity="this.locationMarker.opacity"
                       :fillOpacity="this.locationMarker.fillOpacity"
        />
        <!-- :pane="'highlightOverlay'" -->

        <esri-tiled-map-layer v-for="(basemap, key) in this.$config.map.basemaps"
                              v-if="activeBasemap === key"
                              :key="key"
                              :url="basemap.url"
                              :max-zoom="basemap.maxZoom"
                              :attribution="basemap.attribution"
        />

        <esri-tiled-map-layer v-for="(tiledLayer, key) in this.$config.map.tiledLayers"
                              v-if="tiledLayers.includes(key)"
                              :key="key"
                              :url="tiledLayer.url"
                              :zIndex="tiledLayer.zIndex"
                              :attribution="tiledLayer.attribution"
        />

        <!-- <esri-tiled-overlay v-for="(tiledLayer, key) in this.$config.map.tiledOverlays"
                            v-if="activeTiledOverlays.includes(key)"
                            :key="key"
                            :url="tiledLayer.url"
                            :zIndex="tiledLayer.zIndex"
                            :opacity="tiledLayer.opacity"
        /> -->

        <!-- <esri-dynamic-map-layer v-for="(dynamicLayer, key) in this.$config.map.dynamicMapLayers"
                                v-if="activeDynamicMaps.includes(key)"
                                :key="key"
                                :url="dynamicLayer.url"
                                :attribution="dynamicLayer.attribution"
                                :transparent="true"
                                :opacity="dynamicLayer.opacity"
        /> -->

        <!-- dorParcels, pwdParcels, vacantLand, vacantBuilding -->
        <!-- <esri-feature-layer v-for="(featureLayer, key) in this.$config.map.featureLayers"
                            v-if="shouldShowFeatureLayer(key, featureLayer.minZoom)"
                            :key="key"
                            :layerName="key"
                            :url="featureLayer.url"
                            :color="featureLayer.color"
                            :fillColor="featureLayer.color"
                            :fillOpacity="featureLayer.fillOpacity"
                            :weight="featureLayer.weight"
                            :style_="featureLayer.style"
                            :minZoom="featureLayer.minZoom"
                            :maxZoom="featureLayer.maxZoom"
                            :zIndex="featureLayer.zIndex"
                            :markerType="featureLayer.markerType"
                            :radius="featureLayer.radius"
                            :interactive="featureLayer.interactive"
        /> -->

        <!-- <div v-once>
          <cyclomedia-button v-if="this.shouldShowCyclomediaButton"
                             v-once
                             :position="'topright'"
                             :link="'cyclomedia'"
                             :imgSrc="'images/cyclomedia.png'"
                             @click="handleCyclomediaButtonClick"
          />
        </div> -->

      </map_>
      <!-- <cyclomedia-widget v-if="this.shouldLoadCyclomediaWidget"
                         slot="cycloWidget"
                         v-show="cyclomediaActive"
                         screen-percent="2"
      /> -->

    </div>

  </div>
</template>

<script>

  import Map_ from '@cityofphiladelphia/phila-vue-mapping/src/leaflet/Map.vue';
  import EsriTiledMapLayer from '@cityofphiladelphia/phila-vue-mapping/src/esri-leaflet/TiledMapLayer.vue';
  import BasemapToggleControl from '@cityofphiladelphia/phila-vue-mapping/src/components/BasemapToggleControl.vue';
  import BasemapSelectControl from '@cityofphiladelphia/phila-vue-mapping/src/components/BasemapSelectControl.vue';
  import ControlCorner from '@cityofphiladelphia/phila-vue-mapping/src/leaflet/ControlCorner.vue';
  import MeasureControl from '@cityofphiladelphia/phila-vue-mapping/src/components/MeasureControl.vue';
  import LocationControl from '@cityofphiladelphia/phila-vue-mapping/src/components/LocationControl.vue';
  import CircleMarker from '@cityofphiladelphia/phila-vue-mapping/src/leaflet/CircleMarker.vue';

  // const EsriTiledOverlay = philaVueMapping.EsriTiledOverlay;
  // const EsriDynamicMapLayer = philaVueMapping.EsriDynamicMapLayer;
  // const EsriFeatureLayer = philaVueMapping.EsriFeatureLayer;
  // const CyclomediaButton = philaVueMapping.CyclomediaButton;
  // const CyclomediaWidget = philaVueMapping.CyclomediaWidget;

  export default {
    components: {
      Map_,
      EsriTiledMapLayer,
      BasemapToggleControl,
      BasemapSelectControl,
      // EsriTiledOverlay,
      ControlCorner,
      MeasureControl,
      LocationControl,
      CircleMarker,
      // EsriDynamicMapLayer,
      // EsriFeatureLayer,
      // CyclomediaButton,
      // CyclomediaWidget,
    },
    data() {
      const data = {

      }
      return data;
    },
    mounted() {

    },
    computed: {
      activeBasemap() {
        const shouldShowImagery = this.$store.state.map.shouldShowImagery;
        if (shouldShowImagery) {
          return this.$store.state.map.imagery;
        }
        const defaultBasemap = this.$config.map.defaultBasemap;
        const basemap = this.$store.state.map.basemap || defaultBasemap;
        return basemap;
      },
      tiledLayers() {
        const activeBasemap = this.activeBasemap;
        const activeBasemapConfig = this.configForBasemap(activeBasemap)

        return activeBasemapConfig.tiledLayers || [];
      },
      locationMarker() {
        const latlngArray = [this.$store.state.map.location.lat, this.$store.state.map.location.lng]
        const marker = {
          latlng: latlngArray,
          radius: 6,
          fillColor: '#ff3f3f',
          color: '#ff0000',
          weight: 1,
          opacity: 1,
          fillOpacity: 1.0
        }
        return marker;
      },
      // cyclomediaActive() {
      //   return this.$store.state.cyclomedia.active
      // },
      // shouldShowCyclomediaButton() {
      //   return this.$config.cyclomedia.enabled && !this.isMobileOrTablet;
      // },
      // shouldLoadCyclomediaWidget() {
      //   return this.$config.cyclomedia.enabled && !this.isMobileOrTablet;
      // },
      // handleCyclomediaButtonClick(e) {
      //   if (!this.cyclomediaInitialized) {
      //     this.$store.commit('setCyclomediaInitialized', true);
      //   }
      //   const willBeActive = !this.$store.state.cyclomedia.active;
      //   this.$store.commit('setCyclomediaActive', willBeActive);
      // },
    },
    methods: {
      configForBasemap(basemap) {
        return this.$config.map.basemaps[basemap] || {};
      },
    }

  };

</script>

<style
>

#app-root {
  height: 100%
}

#components-root {
  /* padding: 20px; */
  height: 90%;
  overflow-y: auto;
}

/*don't highlight any form elements*/
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

/* standards applies padding to buttons, which causes some weirdness with
buttons on the map panel. override here. */
button {
  padding: inherit !important;
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
