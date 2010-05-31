class CreateAsesors < ActiveRecord::Migration
  def self.up
    create_table :asesors do |t|
      t.string :nombre
      t.string :tel
      t.string :cel
      t.string :id
      t.string :puesto
      t.timestamps
    end
  end
  
  def self.down
    drop_table :asesors
  end
end
