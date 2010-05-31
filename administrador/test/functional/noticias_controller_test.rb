require 'test_helper'

class NoticiasControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end
  
  def test_show
    get :show, :id => Noticia.first
    assert_template 'show'
  end
  
  def test_new
    get :new
    assert_template 'new'
  end
  
  def test_create_invalid
    Noticia.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end
  
  def test_create_valid
    Noticia.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to noticia_url(assigns(:noticia))
  end
  
  def test_edit
    get :edit, :id => Noticia.first
    assert_template 'edit'
  end
  
  def test_update_invalid
    Noticia.any_instance.stubs(:valid?).returns(false)
    put :update, :id => Noticia.first
    assert_template 'edit'
  end
  
  def test_update_valid
    Noticia.any_instance.stubs(:valid?).returns(true)
    put :update, :id => Noticia.first
    assert_redirected_to noticia_url(assigns(:noticia))
  end
  
  def test_destroy
    noticia = Noticia.first
    delete :destroy, :id => noticia
    assert_redirected_to noticias_url
    assert !Noticia.exists?(noticia.id)
  end
end
