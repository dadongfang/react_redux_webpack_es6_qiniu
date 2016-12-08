module.exports = {
  port: {
    develop: 8000,
    production: 8001
  },
  rootDir: {
    develop: 'src/',
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
