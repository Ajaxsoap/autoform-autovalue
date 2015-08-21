Template.form.events({
  'change input[name=birthdate]': function(event, template){
    var birthdate = $(event.target).val();
    template.$("input[name=myAge]").val(birthdate);
  }
});
