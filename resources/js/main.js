Ripple.pages(name => import(`./Pages/${name}`))
Ripple.components(() => require.context('./Components', true, /\.(vue)$/i))
