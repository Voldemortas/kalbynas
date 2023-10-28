module.exports = {
  apps: [
    {
      name: 'Knygynas.lt',
      interpreter: 'bun',
      script: 'run serve-prod --port 6789',
      watch: true,
    },
  ],
}

