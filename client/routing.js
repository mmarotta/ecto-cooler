Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

// main page
Router.route('/', function() {
    this.render('list', {to: "content"})
});

// detailed device view
Router.route('/device/:_id', function() {
    var deviceID = Devices.findOne({_id: this.params._id});
    this.render('deviceview', {data: deviceID, to: "content"})
});

