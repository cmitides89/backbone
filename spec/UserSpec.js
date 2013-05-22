describe("A User", function() {

  var user;

  beforeEach(function() {
    user = new app.models.User({
      first_name: 'Dan',
      last_name: 'Garland',
      image_url: 'uploads/me.jpg',
      bio: 'Freelance Ruby on Rails developer from London, UK',
      mission: 'Expressing creativity through innovative web development'
    });
  });

  it("should know how to print the entire name", function() {
    expect(user.full_name()).toEqual("Joe Simoes");
  });

});