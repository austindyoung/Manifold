Manifold.Collections.Users = Backbone.Searchable.extend({
  url: "/api/users",
  model: Manifold.Models.User,
  // filterCondition: function (model, regex) {
  //   return model.attributes.fname.toLowerCase().match(regex) || model.attributes.mname.toLowerCase().match(regex) || model.attributes.lname.toLowerCase().match(regex);
  //   // return (model.attributes.fname + " " + model.attributes.mname + " " + model.attributes.lname).toLowerCase().replace(/  /, " ").match(regex);
  // },
  //
  // display: function (model) {
  //   return (model.attributes.fname + " " + model.attributes.mname + " " + model.attributes.lname).toLowerCase().replace(/  /, " ")
  // },

  // filter: function (prefix) {
  //   prefix = prefix.toLowerCase();
  //   var regex = "^" + prefix
  //   return this.select(function (model) {
  //     return model.attributes.fname.toLowerCase().match(regex) || model.attributes.mname.toLowerCase().match(regex) || model.attributes.lname.toLowerCase().match(regex);
  //   });
  // },
  //
  // filter_auto_complete: function (prefix) {
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
  // //  if (results[0]) {
  // //    return results[0].attributes.fname + " " + results[0].attributes.mname + " " + results[0].attributes.lname;
  // //  } else {
  // //    return prefix;
  // //  }
  // return results[0];
  // },
  //
  // select: function (condition) {
  //   var selected = [];
  //   this.models.forEach(function (model) {
  //     if (condition(model)) {
  //       selected.push(model);
  //     }
  //   });
  //   return selected;
  // }
})
