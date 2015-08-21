Age = new Meteor.Collection("age");

Age.attachSchema(new SimpleSchema ({
  birthdate: {
      type: Date,
      label: "Birthday",
      optional: true,
      autoform: {
        type: 'bootstrap-datepicker'
      }

  },
  myAge: {
      type: Number,
      label: "My Age",
      optional: true,
      max: 10,
      autoValue:function(){
        var dayBirth = this.siblingField("birthdate").value;
        var age =moment().diff(moment(dayBirth, 'MM/DD/YYYY'), 'years');
          console.log(age);
          return age;
      }
  }
}));
