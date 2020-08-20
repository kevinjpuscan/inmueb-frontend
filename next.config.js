module.exports = {
  devIndicators: {
    autoPrerender: false
  },
  async redirects() {
    return [
      {
        source: "/new",
        destination: "/new/location",
        permanent: true
      }
    ];
  }
};
