var debug = 'develop';
module.exports = {
  debug: debug,
  port: {
    develop: 3000,
    production: 3001
  },
  rootDir: {
    develop: 'src/',
    build: 'src/__build/',
    production: 'release/'
  },
  qiniu: {
    host: '7xq22v.com2.z0.glb.qiniucdn.com',
    bucket_name: 'h5-images',
    pre_path: 'svnm/boqiivet20160305/production',
    ACCESS_KEY: 'sYZeTVmmEEyVkWKeKf4sqnVlGNhIcAk_zGAEUqgO',
    SECRET_KEY: '_TLO3Huiv64jRIf_HRu5oE9DhnzQSflCByGMrn-Q',
    upload_dir: [
      'js/**/*.js',
      'css/**/*.css',
      'img/**/*',
      'static/**/*'
    ]
  }
}
