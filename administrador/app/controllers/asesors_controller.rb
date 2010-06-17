class AsesorsController < ApplicationController
  before_filter :login_required, :except => [:index]
  def index
    @asesors = Asesor.all
    respond_to do |wants|
      wants.html 
      wants.xml  { render :xml => @asesors }
    end
  end
  
  def show
    @asesor = Asesor.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @asesor }
    end
  end
  
  def new
    @asesor = Asesor.new
  end
  
  def create
    @asesor = Asesor.new(params[:asesor])
    if @asesor.save
      flash[:notice] = "Asesor Creado Satisfactoriamente."
      redirect_to @asesor
    else
      render :action => 'new'
    end
  end
  
  def edit
    @asesor = Asesor.find(params[:id])
  end
  
  def update
    @asesor = Asesor.find(params[:id])
    if @asesor.update_attributes(params[:asesor])
      flash[:notice] = "Asesor Actualizado."
      redirect_to @asesor
    else
      render :action => 'edit'
    end
  end
  
  def destroy
    @asesor = Asesor.find(params[:id])
    @asesor.destroy
    flash[:notice] = "Asesor Eliminado."
    redirect_to asesors_url
  end
end
