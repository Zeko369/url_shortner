module.exports = {
  apps: [
    {
      script: "./node_modules/.bin/ts-node",
      args: "--project router/tsconfig.json ./router/index.ts",
    },
    {
      script: "./node_modules/.bin/blitz",
      args: "start --production -H 0.0.0.0 -p 3232",
    },
  ],

  deploy: {
    production: {
      user: "zeko",
      host: "c2.zekan.tk",
      ref: "origin/master",
      repo: "git@github.com:Zeko369/url_shortener.git",
      path: "url",
      "pre-deploy-local": "",
      "post-deploy": "yarn && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
    },
  },
}
