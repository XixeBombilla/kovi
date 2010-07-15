class AddAttachmentsImagenToNoticia < ActiveRecord::Migration
  def self.up
    add_column :noticias, :imagen_file_name, :string
    add_column :noticias, :imagen_content_type, :string
    add_column :noticias, :imagen_file_size, :integer
    add_column :noticias, :imagen_updated_at, :datetime
  end

  def self.down
    remove_column :noticias, :imagen_file_name
    remove_column :noticias, :imagen_content_type
    remove_column :noticias, :imagen_file_size
    remove_column :noticias, :imagen_updated_at
  end
end
