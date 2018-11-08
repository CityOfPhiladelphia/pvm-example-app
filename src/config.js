import transforms from './util/transforms';

let config = {
  // baseConfig: 'https://cdn.jsdelivr.net/gh/ajrothwell/atlas_base_config@d95ed79deed38e6a59d975bf7aaa5409cdee20bb/config.js',
  baseConfig: 'https://cdn.jsdelivr.net/gh/ajrothwell/mapboard-base-config@74cf4692237e16757681f6860b936efd734c27d8/config.js',
  router: {
    enabled: false
  },
  map: {
    defaultBasemap: 'pwd',
  },
  transforms,
  cyclomedia: {
    enabled: true,
    measurementAllowed: false,
    popoutAble: true,
  },
}

export default config;
