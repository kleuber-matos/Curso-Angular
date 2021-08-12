const proxy = [
  {
    context: "/comiss-servicosweb/comissaoonline/agenda",
    target: "http://localhost:8181/comiss-servicosweb/comissaoonline/agenda",
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;
