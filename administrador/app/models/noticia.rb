class Noticia < ActiveRecord::Base
  
  has_attached_file :imagen, :styles => {:thumb => "100x100#"},

  :url => "/imagenesNoticias/:id/:style.:extension",
         :path => ":rails_root/public/imagenesNoticias/:id/:style.:extension"
         def url(*args)
           data.url(*args)
         end

         def name
           data_file_name

         end

         def content_type
           data_content_type
         end

         def file_size
           data_file_size
         end
  
end
