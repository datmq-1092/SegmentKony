define({ 
  loadInit: function() {
    var bsp = this.basicConfig();
    var lsp = this.layoutConfig();
    var psp = this.platformConfig();

    this.view.add(this.createCollectionView(bsp, lsp, psp));
  },
  
  createCollectionView: function(basicConfig, layoutConfig, platformConfig) {
    var collectionView = new kony.ui.CollectionView(basicConfig, layoutConfig, platformConfig);
    return collectionView;
  },
  
  basicConfig: function() {
    return {
      "data": this.getData(),
      "left": "0dp",
      "top": "0dp",
      "width": "100%",
      "height": "100dp",
      "id": "colView",
      "onItemSelect": null,
      "minItemSpace": 10,
      "skin": "seg2Normal",
      "itemTemplate": "flxSampleRowTemplate",
      "scrollingEvents": {},
      "showScrollbars": false,
      "layout": kony.collectionview.LAYOUT_VERTICAL,
      "widgetDataMap": {
        "flxSampleRowTemplate": "flxSampleRowTemplate",
        "lblHeading": "lblHeading"
      }
    };
  },

  layoutConfig: function() {
    return {
      "padding": [0, 0, 0, 0],
      "paddingInPixel": false
    };
  },

  platformConfig: function() {
    return {
      "bounces": true,
      "enableDictionary": false,
    };
  },

  getData: function() {
    var data = [
      {"lblHeading":"1",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       } },
      {"lblHeading":"2",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"3",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"4",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"5",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"1",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       } },
      {"lblHeading":"2",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"3",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"4",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"5",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"1",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       } },
      {"lblHeading":"2",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"3",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"4",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }},
      {"lblHeading":"5",
       "flxSampleRowTemplate": {
         "height": "100dp",
         "width":  "50dp"
       }}
    ];
    return data;
  }

});