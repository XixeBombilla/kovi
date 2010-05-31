require 'test_helper'

class AsesorsControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end
  
  def test_show
    get :show, :id => Asesor.first
    assert_template 'show'
  end
  
  def test_new
    get :new
    assert_template 'new'
  end
  
  def test_create_invalid
    Asesor.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end
  
  def test_create_valid
    Asesor.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to asesor_url(assigns(:asesor))
  end
  
  def test_edit
    get :edit, :id => Asesor.first
    assert_template 'edit'
  end
  
  def test_update_invalid
    Asesor.any_instance.stubs(:valid?).returns(false)
    put :update, :id => Asesor.first
    assert_template 'edit'
  end
  
  def test_update_valid
    Asesor.any_instance.stubs(:valid?).returns(true)
    put :update, :id => Asesor.first
    assert_redirected_to asesor_url(assigns(:asesor))
  end
  
  def test_destroy
    asesor = Asesor.first
    delete :destroy, :id => asesor
    assert_redirected_to asesors_url
    assert !Asesor.exists?(asesor.id)
  end
end
