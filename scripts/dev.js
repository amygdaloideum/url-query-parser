const { FuseBox, WebIndexPlugin, CSSPlugin, CSSResourcePlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: '../src/',
  target: 'browser@es6',
  output: '../dist/$name.js',
  plugins: [
    WebIndexPlugin({ template: '../src/index.html' }),
    [CSSResourcePlugin({ dist: '../dist/css-resources' }), CSSPlugin()],
  ],
  useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  sourceMaps: true,
});

fuse.dev(); // launch http server

fuse
  .bundle('app')
  .instructions(' > index.jsx')
  .hmr()
  .watch();

fuse.run();
