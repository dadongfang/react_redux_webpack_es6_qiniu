module.exports = {
  pwa: true,
  spa: true,
  port: {
    develop: 3000,
    production: 3001
  },
  rootDir: {
    develop: 'src/',
    entry: 'src/entry/',
    build: 'src/__build/',
    production: 'dist/'
  },
  qiniu: {
    host: 'host',
    bucket_name: 'bucket',
    pre_path: 'react_demo',
    ACCESS_KEY: 'acces_key',
    SECRET_KEY: 'secret_key',
    upload_dir: [
      'js/**/*.js',
      'css/**/*.css',
      'img/**/*',
      'static/**/*'
    ]
  }
}
