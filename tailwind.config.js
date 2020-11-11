module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    minHeight: {
            '25': '25vh',
            '30': '30vh',
            '40': '40vh',
            '50': '50vh',
    },
    maxHeight: {
             '0': '0',
             '1/4': '25%',
             '1/2': '50%',
             '3/4': '75%',
             'full': '100%',
             '25': '25vh',
             '35': '35vh',
             '50': '50vh',
             '65': '65vh',
             '80': '80vh',
    },
    minWidth: {
      '25': '25vw',
      '30': '30vw',
      '40': '40vw',
      '50': '50vw',
},
    maxWidth: {
             '0': '0',
             '1/4': '25%',
             '1/7': '27%',
             '1/2': '50%',
             '3/4': '75%',
             'full': '100%',
    },
    flex: {
        '1': '1 1 0%',
        auto: '1 1 auto',
       initial: '0 1 auto',
       inherit: 'inherit',
        none: 'none',
       stretch: '1 1 150px',
    },
    extend: {
      height: theme => ({
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
        "screen/75": "75%"
      }),
      width: theme => ({
        "screen/2": "50vw",
        "screen/3": "calc(100vw / 3)",
        "screen/4": "calc(100vw / 4)",
        "screen/5": "calc(100vw / 5)",
        "screen/75": "75%",
        "screen/27": "27%",
      }),
    },
  },
  variants: {},
  plugins: [],
}
