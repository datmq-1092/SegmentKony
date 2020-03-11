define({ 

  loadData: function() {
    this.view.Segment.data = this.listData();
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
  }
});