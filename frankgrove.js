if (Meteor.isClient) {

    Template.body.events({
      'mouseover .photo': function (e) {
        var $target = $(e.target);
        if($('#' + $target[0].id + '-caption').css('display') == 'none'){
          $('#' + $target[0].id + '-caption').show();
        }
      },
      'mouseleave .photo': function (e) {
        var $target = $(e.target);
        $('#' + $target[0].id + '-caption').hide();
      }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
