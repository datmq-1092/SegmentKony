define(function() { 

  var y = 0;

  return{
    loadData: function() {
      //     this.view.Segment.onScrollWidgetPosition = this.onScrollWidgetPositionCallBack;
      this.view.Segment.onScrolling= this.onScrollingCallBack;
      //     this.view.Segment.onRowDisplay = this.onRowDisplayListener;
      //     this.view.Segment.onScrollEnd = this.onScrollingCallBack;
      this.view.Segment.data = this.listData();

    },

    onRowDisplayListener: function(widget, state, currentRowContext, startRowContext, endRowContext){
      //     alert("wdg:" + widget);
      //     alert("state:" + state);
      alert("sectionIndex:" + startRowContext.sectionIndex + " - " + "rowIndex:" + startRowContext.rowIndex);
      //     alert("endRowContext:" + endRowContext);
    },

    onScrollingCallBack: function(source)
    {
      if (y > this.view.Segment.contentOffsetMeasured.y) {
        alert("down");
      } else if (y < this.view.Segment.contentOffsetMeasured.y) {
        alert("up");
      }
      //             alert(this.view.Segment.contentOffsetMeasured);
      //     alert("rowTemplate:" + this.view.Segment.);

      //       alert(y);
      y = this.view.Segment.contentOffsetMeasured.y;
    },

    onScrollWidgetPositionCallBack: function(wdg, screenX, screenY, frameX, frameY) {
      alert("wdg:" + wdg);
      alert("screenX:" + screenX);
      alert("screenY:" + screenY);
      alert("frameX:" + frameX);
      alert("frameY:" + frameY);
      //wdg : Widget that is registered for onScrollWidgetPosition.
      /*screenX : Position of widget with respect to 
the screen's X - coordinates (after downsizing the navigation bar and status bar).*/
      /*screenY : Position of widget with respect to the screen's Y - 
coordinates (after downsizing the navigation bar and status bar).*/
      //frameX : Position of widget with respect to parent container's X- coordinates.
      //frameY : Position of widget with respect to parent container's Y- coordinates.
    },

    //format:
    //   var tempTab = [
    //   [
    //   	{"lblSegHdr":"First Set"},
    //    [
    //     {"lblData":"1"},
    //     {"lblData":"2"},               
    //     {"lblData":"3"},
    //     {"lblData":"4"},
    //     {"lblData":"5"},
    //     {"lblData":"6"},
    //     {"lblData":"7"},
    //     {"lblData":"8"},
    //    ],
    //   ]
    //  ];
    //  <form_name>.<segment_name>.setData(tempTab);
    listData: function() {
      var data = [
        [
          {"lblHeading":"One"},
          [
            {"lblHeading":"1"},
            {"lblHeading":"2"},
            {"lblHeading":"3"},
            {"lblHeading":"4"},
            {"lblHeading":"5"}
          ],
        ],
        [
          {"lblHeading":"Two"},
          [
            {"lblHeading":"1"},
            {"lblHeading":"2"},
            {"lblHeading":"3"},
            {"lblHeading":"4"},
            {"lblHeading":"5"}
          ],
        ],
        [
          {"lblHeading":"Three"},
          [
            {"lblHeading":"1"},
            {"lblHeading":"2"},
            {"lblHeading":"3"},
            {"lblHeading":"4"},
            {"lblHeading":"5"}
          ],
        ]
      ];
      return data;
    },

    //Load More
    btnClick: function() {
      var sectionIndex = this.view.Segment.data.length - 1;
      var dataSection = this.view.Segment.data[sectionIndex];

      //--Case 1
      //     var list = [];
      //     dataSection[1].push({"lblHeading":"6"});
      //     dataSection[1].push({"lblHeading":"7"});
      //     dataSection[1].push({"lblHeading":"8"});
      //     dataSection[1].push({"lblHeading":"9"});
      //     dataSection[1].push({"lblHeading":"10"});
      //     list.push(dataSection);
      //     this.view.Segment.addAll(list);
      //     this.view.Segment.removeSectionAt(sectionIndex);

      //--Case 2
      var index = dataSection[1].length;
      this.view.Segment.addDataAt({"lblHeading":"6"}, index, sectionIndex);
      this.view.Segment.addDataAt({"lblHeading":"7"}, index + 1, sectionIndex);
      this.view.Segment.addDataAt({"lblHeading":"8"}, index + 2, sectionIndex);
      this.view.Segment.addDataAt({"lblHeading":"9"}, index + 3, sectionIndex);
      this.view.Segment.addDataAt({"lblHeading":"10"}, index + 4, sectionIndex);
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
  };
});