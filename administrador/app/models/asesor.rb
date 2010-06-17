class Asesor < ActiveRecord::Base

has_attached_file :imagen, :styles => {:thumb => "100x100#"},

:url => "/imagenes/:id/:style.:extension",
       :path => ":rails_root/public/imagenes/:id/:style.:extension"
 
end
