module.exports = {
  apps : [{
    name: "API Gateway",
    script: 'dist/index.js',
    exec_mode: 'cluster',
    instances: 2,
    watch: true,
  }]
};
