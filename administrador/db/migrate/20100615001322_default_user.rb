class DefaultUser < ActiveRecord::Migration
  def self.up
    User.create(:username => "gize", :password => "mariagizela", :password_confirmation => "mariagizela", :email => "gize@admin.com")
  end

  def self.down
  end
end
