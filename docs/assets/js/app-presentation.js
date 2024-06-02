
import {initialize_mermiad_presentation} from "./init-mermaid.js"


// initialize_mermiad_presentation();

// Init présentation
Reveal.initialize({

  controls: true,
  center: true,
  hash: true,


  // Display presentation control arrows
  // Display a presentation progress bar
  progress: true,
  slideNumber: 'c/t',
  showSlideNumber: 'all',
  history: true,
  keyboard: true,
  jumpToSlide: true,
  disableLayout: false,
  

  // resolutions. Can be specified using percentage units.
  width: "100%",
  height: "100%",

  // Factor of the display size that should remain empty around
  // the content
  margin: 0,

  // Bounds for smallest/largest possible scale to apply to content
  minScale: 0.2,
  maxScale: 2.0,
  showNotes: false,

  // https://www.npmjs.com/package/reveal.js-mermaid-plugin
  mermaid: {
    theme: 'base',
    darkMode : true,
    
    themeVariables: {
      primaryColor: '#F2F2F2',  // Dark blue as requested
      primaryTextColor: '#262626',  // White for good contrast
      primaryBorderColor: '#6E4161', // Darker shade of primary for borders
      lineColor: '#6E4161'        // Lighter blue for lines
      // secondaryColor: '#7986A1',    // Even lighter blue for secondary elements
      // tertiaryColor: '#A2AACC',      // Lightest blue for tertiary elements
    },
    securityLevel: 'loose',
    startOnLoad: false,
  },



  plugins: [RevealMarkdown,RevealMermaid],
  

});

