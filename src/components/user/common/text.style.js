const styles= theme => ({
    dom : {
        margin: theme.spacing.unit,
        width :"25%",
        minWidth : "330px",
    },

    cssLabel: {
      '&$cssFocused': {
      color: "blueviolet",
      },
    },cssFocused:{

    },
      cssOutlinedInput: {
        
        '&$cssFocused $notchedOutline': {
          borderColor: "blueviolet",
        },
      },notchedOutline : {  borderRadius: "30px",  },

});

export default styles;
