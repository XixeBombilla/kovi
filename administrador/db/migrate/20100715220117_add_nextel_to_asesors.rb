class AddNextelToAsesors < ActiveRecord::Migration
  def self.up
    add_column :asesors, :nextel, :string
  end

  def self.down
    remove_column :asesors, :nextel
  end
end
