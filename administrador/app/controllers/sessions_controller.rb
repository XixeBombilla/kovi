class SessionsController < ApplicationController
  def new
  end
  
  def create
    user = User.authenticate(params[:login], params[:password])
    if user
      session[:user_id] = user.id
      flash[:notice] = "Entrada Exitosa."
      redirect_to_target_or_default(root_url)
    else
      flash.now[:error] = "Contrase&ntilde;a Incorrecta."
      render :action => 'new'
    end
  end
  
  def destroy
    session[:user_id] = nil
    flash[:notice] = "Haz salido del Administrador."
    redirect_to root_url
  end
end
