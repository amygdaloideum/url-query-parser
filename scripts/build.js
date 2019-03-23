const { FuseBox, WebIndexPlugin, CSSPlugin, CSSResourcePlugin, QuantumPlugin, TerserPlugin } = require('fuse-box');

const fuse = FuseBox.init({
  homeDir: '../src/',
  target: 'browser@es6',
  output: '../dist/$name.js',
  plugins: [
    WebIndexPlugin({ template: '../src/index.html' }),
    [CSSResourcePlugin({ dist: '../dist/css-resources' }), CSSPlugin()],
    TerserPlugin(),
    QuantumPlugin(),
  ],
  useTypescriptCompiler: true,
  allowSyntheticDefaultImports: true,
  sourceMaps: true,
});

fuse.bundle('app').instructions('>index.jsx');
fuse.run();