class NoticiasController < ApplicationController
   before_filter :login_required
  def index
    @noticias = Noticia.all
    respond_to do |wants|
      wants.html 
      wants.xml  { render :xml => @noticias }
       end
  end
  
  def show
    @noticia = Noticia.find(params[:id])
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @noticia }
       end
  end
  
  def new
    @noticia = Noticia.new
  end
  
  def create
    @noticia = Noticia.new(params[:noticia])
    if @noticia.save
      flash[:notice] = "Noticia creada Satisfactoriamente."
      redirect_to @noticia
    else
      render :action => 'new'
    end
  end
  
  def edit
    @noticia = Noticia.find(params[:id])
  end
  
  def update
    @noticia = Noticia.find(params[:id])
    if @noticia.update_attributes(params[:noticia])
      flash[:notice] = "Noticia Actualizada."
      redirect_to @noticia
    else
      render :action => 'edit'
    end
  end
  
  def destroy
    @noticia = Noticia.find(params[:id])
    @noticia.destroy
    flash[:notice] = "Noticia Eliminada."
    redirect_to noticias_url
  end
end
