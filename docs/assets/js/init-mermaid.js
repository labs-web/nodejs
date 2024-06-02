
// const config = {
//   theme: 'base',
//   themeVariables: {
//     primaryColor: '#00838F',  // Dark blue as requested
//     primaryTextColor: '#fff',  // White for good contrast
//     primaryBorderColor: '#293A54', // Darker shade of primary for borders
//     lineColor: '#455278',        // Lighter blue for lines
//     secondaryColor: '#7986A1',    // Even lighter blue for secondary elements
//     tertiaryColor: '#A2AACC',      // Lightest blue for tertiary elements
//   },

//   logLevel: 'fatal',
//   securityLevel: 'loose',
//   startOnLoad: true,
//   arrowMarkerAbsolute: false,

//   er: {
//     diagramPadding: 20,
//     layoutDirection: 'TB',
//     minEntityWidth: 100,
//     minEntityHeight: 75,
//     entityPadding: 15,
//     stroke: 'gray',
//     fill: 'honeydew',
//     fontSize: 12,
//     useMaxWidth: true,
//   },
//   flowchart: {
//     diagramPadding: 8,
//     htmlLabels: true,
//     curve: 'basis',
//   },
//   sequence: {
//     diagramMarginX: 50,
//     diagramMarginY: 10,
//     actorMargin: 50,
//     width: 150,
//     height: 65,
//     boxMargin: 10,
//     boxTextMargin: 5,
//     noteMargin: 10,
//     messageMargin: 35,
//     messageAlign: 'center',
//     mirrorActors: true,
//     bottomMarginAdj: 1,
//     useMaxWidth: true,
//     rightAngles: false,
//     showSequenceNumbers: false,
//   },
//   gantt: {
//     titleTopMargin: 25,
//     barHeight: 20,
//     barGap: 4,
//     topPadding: 50,
//     leftPadding: 75,
//     gridLineStartPadding: 35,
//     fontSize: 11,
//     fontFamily: '"Open Sans", sans-serif',
//     numberSectionStyles: 4,
//     axisFormat: '%Y-%m-%d',
//     topAxis: false,
//     displayMode: '',
//   },
//   mindmap : {

//   }
// };

// {

//   primaryTextColor: '#fff',  // White for good contrast
//   secondaryColor: '#42A5F5', // Lighter blue based on primary
//   secondaryTextColor: '#fff', // White for good contrast
//   tertiaryColor: '#90CAF9', // Even lighter blue based on primary
//   tertiaryTextColor: '#000', // Black for good contrast
//   lineColor: '#ddd',        // Light gray lines
//   borderColor: '#ddd',        // Light gray borders
//   backgroundColor: '#fff',  // White background
//   errorColor: '#f44336',     // Error color (red)
//   warningColor: '#ffeb3b',   // Warning color (yellow)
//   successColor: '#4CAF50',   // Success color (green)
//   infoColor: '#00838F',      // Info color same as primary
// }
export function initialize_mermiad(){
    const config = {
        theme: 'base',
        darkMode : true,
        
        themeVariables: {
          primaryColor: '#F2F2F2',  // Dark blue as requested
          primaryTextColor: '#262626',  // White for good contrast
          primaryBorderColor: '#293A54', // Darker shade of primary for borders
          lineColor: '#455278'        // Lighter blue for lines
          // secondaryColor: '#7986A1',    // Even lighter blue for secondary elements
          // tertiaryColor: '#A2AACC',      // Lightest blue for tertiary elements
        },
        securityLevel: 'loose',
        startOnLoad: true,
      };
    mermaid.initialize(config);
}

export function initialize_mermiad_presentation(){
  const config = {
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
    };
  mermaid.initialize(config);
}