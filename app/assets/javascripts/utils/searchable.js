Backbone.Searchable = Backbone.Collection.extend({
  filter: function (prefix, condition) {
    var condition = condition;
    prefix = prefix.toLowerCase();
    var regex = "^" + prefix
    if (prefix === "") {
      return [];
    } else if (!this.filterCondition) {
      return this.select(function (model) {
        return condition(model, regex);
      }.bind(this))
    } else {
      return this.select(function (model) {
        return this.filterCondition(model, regex);
      }.bind(this))
    }
  },

  autoCondition: function (model, regex) {
    return this.display(model).toLowerCase().match(regex);
  },


  filter_auto_complete: function (prefix) {
    prefix = prefix.toLowerCase();
    var regex = "^" + prefix
    if (prefix === "") {
      return [];
    } else {
      return this.select(function (model) {
        // debugger
        return this.autoCondition(model, regex);
      }.bind(this)
  )};
  //   prefix = prefix.toLowerCase();
  //   var partition = prefix.split(" ");
  //   if (partition[partition.length - 1] === "") {
  //     partition.pop();
  //   }
  //   var fname = partition[0];
  //   var results = this.select(function (model) {
  //     if (partition.length === 1) {
  //       return model.attributes.fname.toLowerCase().match("^" + partition[0]);
  //    } else if (partition.length === 2) {
  //       return model.attributes.fname.toLowerCase().match("^" + partition[0]) && model.attributes.lname.toLowerCase().match("^" + partition[1]);
  //    } else if (model.attributes.mname){
  //       return model.attributes.fname.toLowerCase().match("^" + partition[0]) && model.attributes.mname.toLowerCase().match("^" + partition[1]) && model.attributes.lname.toLowerCase().match("^" + partition[2]);
  //    }
  //  });
  // return results[0];
  },

  select: function (condition) {
    var selected = [];
    this.models.forEach(function (model) {
      if (condition(model)) {
        selected.push(model);
      }
    });
    return selected;
  }
})
